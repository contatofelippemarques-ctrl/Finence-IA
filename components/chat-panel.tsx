"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Bot, Loader2, Plus, Search, Send, Trash2, UserRound, Zap } from "lucide-react";
import { localizedWelcome } from "@/lib/finance/mock-data";
import { createMessage } from "@/lib/finance/ai-engine";
import { useLanguage } from "@/lib/i18n/language-provider";
import { getRemainingMessages } from "@/lib/subscriptions";
import type { ChatMessage, Conversation, PlanId } from "@/lib/types";
import { cn } from "@/lib/utils";

const demoConversationId = "conversation-demo";

export function ChatPanel() {
  const { dictionary, locale } = useLanguage();
  const [plan, setPlan] = useState<PlanId>("free");
  const [usedToday, setUsedToday] = useState(4);
  const [input, setInput] = useState("");
  const [search, setSearch] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [streamingId, setStreamingId] = useState<string | null>(null);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeId, setActiveId] = useState(demoConversationId);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initial: Conversation = {
      id: demoConversationId,
      title: dictionary.chat.title,
      updatedAt: new Date().toISOString(),
      messages: [createMessage("assistant", localizedWelcome[locale], { language: locale })]
    };
    const stored = window.localStorage.getItem("finance-ia-conversations");
    setConversations(stored ? JSON.parse(stored) : [initial]);
  }, [dictionary.chat.title, locale]);

  useEffect(() => {
    if (conversations.length) {
      window.localStorage.setItem("finance-ia-conversations", JSON.stringify(conversations));
    }
  }, [conversations]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [conversations, isThinking]);

  const activeConversation = conversations.find((conversation) => conversation.id === activeId) ?? conversations[0];
  const remaining = getRemainingMessages(plan, usedToday);
  const limitReached = remaining <= 0;

  const filteredConversations = useMemo(
    () => conversations.filter((conversation) => conversation.title.toLowerCase().includes(search.toLowerCase())),
    [conversations, search]
  );

  function updateActiveConversation(updater: (conversation: Conversation) => Conversation) {
    setConversations((current) => current.map((conversation) => (conversation.id === activeConversation?.id ? updater(conversation) : conversation)));
  }

  function newConversation() {
    const conversation: Conversation = {
      id: crypto.randomUUID(),
      title: dictionary.chat.newChat,
      updatedAt: new Date().toISOString(),
      messages: [createMessage("assistant", localizedWelcome[locale], { language: locale })]
    };
    setConversations((current) => [conversation, ...current]);
    setActiveId(conversation.id);
  }

  function deleteConversation(id: string) {
    setConversations((current) => {
      const next = current.filter((conversation) => conversation.id !== id);
      if (activeId === id) setActiveId(next[0]?.id ?? demoConversationId);
      return next.length ? next : [];
    });
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!input.trim() || !activeConversation || isThinking || limitReached) return;

    const userMessage = createMessage("user", input.trim(), { language: locale });
    const prompt = input.trim();
    setInput("");
    setIsThinking(true);
    updateActiveConversation((conversation) => ({
      ...conversation,
      title: conversation.messages.length <= 1 ? prompt.slice(0, 42) : conversation.title,
      updatedAt: new Date().toISOString(),
      messages: [...conversation.messages, userMessage]
    }));

    try {
      const response = await fetch("/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: prompt, locale, plan, usedToday })
      });

      if (!response.ok) {
        setUsedToday(getRemainingMessages(plan, usedToday) === 0 ? usedToday : usedToday + 1);
        throw new Error("limit");
      }

      const data = (await response.json()) as { message: ChatMessage };
      setUsedToday((current) => current + 1);
      streamAssistantMessage(data.message);
    } catch {
      const fallback = createMessage("assistant", dictionary.chat.limitReached, { language: locale });
      streamAssistantMessage(fallback);
    } finally {
      setIsThinking(false);
    }
  }

  function streamAssistantMessage(message: ChatMessage) {
    const target = message.content;
    const draft = { ...message, content: "" };
    setStreamingId(message.id);
    updateActiveConversation((conversation) => ({
      ...conversation,
      messages: [...conversation.messages, draft],
      updatedAt: new Date().toISOString()
    }));

    let index = 0;
    const timer = window.setInterval(() => {
      index += Math.max(1, Math.ceil(target.length / 42));
      updateActiveConversation((conversation) => ({
        ...conversation,
        messages: conversation.messages.map((item) => (item.id === message.id ? { ...item, content: target.slice(0, index) } : item))
      }));
      if (index >= target.length) {
        window.clearInterval(timer);
        setStreamingId(null);
      }
    }, 35);
  }

  return (
    <section id="chat" className="grid gap-5 py-8 xl:grid-cols-[320px_1fr]">
      <div className="glass-card rounded-3xl p-4">
        <button onClick={newConversation} className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-100">
          <Plus className="h-4 w-4" />
          {dictionary.chat.newChat}
        </button>
        <div className="mt-4 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
          <Search className="h-4 w-4 text-white/40" />
          <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder={dictionary.chat.search} className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-white/35" />
        </div>
        <div className="scrollbar-soft mt-4 max-h-[31rem] space-y-2 overflow-y-auto pr-1">
          {filteredConversations.map((conversation) => (
            <button
              key={conversation.id}
              onClick={() => setActiveId(conversation.id)}
              className={cn("group flex w-full items-center justify-between rounded-2xl px-3 py-3 text-left text-sm transition", conversation.id === activeConversation?.id ? "bg-white/[0.12] text-white" : "text-white/55 hover:bg-white/[0.08] hover:text-white")}
            >
              <span className="line-clamp-1">{conversation.title}</span>
              <Trash2
                onClick={(event) => {
                  event.stopPropagation();
                  deleteConversation(conversation.id);
                }}
                className="h-4 w-4 opacity-0 transition group-hover:opacity-60"
              />
            </button>
          ))}
        </div>
        <div className="mt-4 rounded-2xl border border-teal-300/15 bg-teal-300/10 p-3 text-sm text-teal-50">
          <div className="mb-2 flex items-center gap-2">
            <Zap className="h-4 w-4 text-teal-300" />
            {remaining} {dictionary.common.remaining}
          </div>
          <select value={plan} onChange={(event) => setPlan(event.target.value as PlanId)} className="w-full rounded-xl border border-white/10 bg-slate-950 px-3 py-2 text-white">
            <option value="free">Free</option>
            <option value="premium">Premium</option>
            <option value="ultra">Ultra</option>
          </select>
        </div>
      </div>

      <div className="glass-card flex h-[min(78vh,760px)] min-h-[620px] flex-col overflow-hidden rounded-[2rem]">
        <div className="border-b border-white/10 px-5 py-4">
          <p className="text-sm uppercase tracking-[0.3em] text-teal-200/65">{dictionary.chat.subtitle}</p>
          <h2 className="mt-2 text-2xl font-semibold md:text-4xl">{dictionary.chat.title}</h2>
        </div>

        <div ref={scrollRef} className="scrollbar-soft flex-1 space-y-5 overflow-y-auto p-4 md:p-6">
          {activeConversation?.messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn("flex gap-3", message.role === "user" && "justify-end")}
            >
              {message.role !== "user" && (
                <div className="grid h-9 w-9 flex-none place-items-center rounded-2xl bg-gradient-to-br from-teal-300 to-violet-400 text-slate-950">
                  <Bot className="h-5 w-5" />
                </div>
              )}
              <div className={cn("max-w-[86%] rounded-3xl px-4 py-3 text-sm leading-6 md:max-w-[72%]", message.role === "user" ? "bg-white text-slate-950" : "border border-white/10 bg-white/[0.08] text-white/[0.82]")}>
                {message.content}
                {streamingId === message.id && <span className="ml-1 inline-block h-4 w-1 animate-pulse rounded bg-teal-300 align-middle" />}
              </div>
              {message.role === "user" && (
                <div className="grid h-9 w-9 flex-none place-items-center rounded-2xl bg-white/10">
                  <UserRound className="h-5 w-5" />
                </div>
              )}
            </motion.div>
          ))}
          {isThinking && (
            <div className="flex items-center gap-3 text-sm text-white/50">
              <Loader2 className="h-4 w-4 animate-spin text-teal-300" />
              {dictionary.chat.thinking}
            </div>
          )}
        </div>

        {limitReached && (
          <div className="mx-4 mb-3 rounded-2xl border border-violet-300/20 bg-violet-300/10 p-4 text-sm text-violet-50">
            {dictionary.chat.limitReached} <span className="font-semibold">{dictionary.chat.upgrade}</span>
          </div>
        )}

        <form onSubmit={submit} className="border-t border-white/10 p-4">
          <div className="flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-950/70 p-2">
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              disabled={limitReached}
              placeholder={limitReached ? dictionary.chat.upgrade : dictionary.chat.placeholder}
              className="min-w-0 flex-1 bg-transparent px-3 py-3 outline-none placeholder:text-white/35 disabled:cursor-not-allowed"
            />
            <button disabled={limitReached || isThinking} className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-teal-300 to-violet-400 text-slate-950 transition disabled:cursor-not-allowed disabled:opacity-40">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
