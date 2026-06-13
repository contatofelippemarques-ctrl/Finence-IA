import type { Locale } from "@/lib/types";

export const locales: Locale[] = ["pt", "en", "es", "de", "fr", "it", "ja", "zh", "ko", "ar", "ru"];

export const localeNames: Record<Locale, string> = {
  pt: "Português",
  en: "English",
  es: "Español",
  de: "Deutsch",
  fr: "Français",
  it: "Italiano",
  ja: "日本語",
  zh: "中文",
  ko: "한국어",
  ar: "العربية",
  ru: "Русский"
};

export const rtlLocales: Locale[] = ["ar"];

export const dictionaries = {
  en: {
    metaTitle: "Finance IA - AI financial assistant",
    brand: "Finance IA",
    tagline: "Your calm AI financial companion.",
    nav: {
      chat: "AI Chat",
      dashboard: "Dashboard",
      income: "Extra Income AI",
      goals: "Goals",
      pricing: "Pricing",
      admin: "Admin"
    },
    hero: {
      eyebrow: "AI financial assistant SaaS",
      title: "Organize your money through conversation.",
      subtitle:
        "Finance IA combines a premium dashboard, human-like AI coaching, expense automation, debt control, realistic income ideas and subscription-ready SaaS architecture.",
      cta: "Start financial chat",
      secondary: "View dashboard"
    },
    auth: {
      title: "Secure access",
      subtitle: "Google login, email login, password recovery and profile sessions are designed for Supabase Auth or NextAuth.",
      google: "Continue with Google",
      email: "Email address",
      password: "Password",
      forgot: "Recover password",
      signIn: "Sign in"
    },
    onboarding: {
      title: "First financial profile",
      intro: "I'll ask a few smart questions and build your first financial map.",
      questions: [
        "What is your average monthly income?",
        "Which fixed expenses repeat every month?",
        "Do you currently have debts or installments?",
        "What financial goal matters most right now?",
        "How much do you have saved for emergencies?",
        "What type of work or income source do you have?",
        "Which spending habit worries you the most?"
      ]
    },
    dashboard: {
      title: "Financial command center",
      subtitle: "Live insights updated from natural chat messages.",
      balance: "Current balance",
      income: "Monthly income",
      expenses: "Monthly expenses",
      score: "Financial score",
      categories: "Spending categories",
      predictions: "Predictions",
      debts: "Debt overview",
      notifications: "Notifications"
    },
    chat: {
      title: "Talk to Finance IA",
      subtitle: "Tell me expenses, income, debts, goals or decisions in natural language.",
      placeholder: "Example: I spent 50 dollars on food",
      thinking: "Finance IA is thinking...",
      newChat: "New chat",
      search: "Search conversations",
      delete: "Delete",
      limitReached: "Daily message limit reached.",
      upgrade: "Upgrade to keep chatting"
    },
    finance: {
      expenseDetected: "I recorded this expense and updated your monthly view.",
      incomeDetected: "Great, I added this income to your balance.",
      debtDetected: "I tracked this debt movement and will watch the risk level.",
      goalDetected: "Goal created. I will help you stay consistent.",
      guidance:
        "Here is a clear next step: protect essentials first, reduce high-interest debt, then automate a small weekly saving."
    },
    incomeAi: {
      title: "Extra Income AI",
      subtitle: "Realistic ideas based on country, time, skills and financial pressure.",
      country: "Country",
      time: "Available time",
      skills: "Skills",
      generate: "Generate ideas"
    },
    pricing: {
      title: "Plans built for daily financial habits",
      free: "Free",
      premium: "Premium",
      ultra: "Ultra",
      monthly: "Monthly",
      yearly: "Yearly",
      upgrade: "Upgrade"
    },
    admin: {
      title: "Admin and AI training",
      subtitle: "Roles, response templates, multilingual FAQ and knowledge curation.",
      roles: "Role permissions",
      training: "AI training database",
      question: "Question",
      answer: "Answer",
      category: "Category",
      save: "Save training"
    },
    common: {
      language: "Language",
      saved: "Saved",
      alert: "Alert",
      simulate: "Simulate",
      remaining: "messages remaining today"
    }
  },
  pt: {
    metaTitle: "Finance IA - Assistente financeiro com IA",
    brand: "Finance IA",
    tagline: "Seu companheiro financeiro com IA.",
    nav: {
      chat: "Chat IA",
      dashboard: "Painel",
      income: "Renda Extra IA",
      goals: "Metas",
      pricing: "Planos",
      admin: "Admin"
    },
    hero: {
      eyebrow: "SaaS de assistente financeiro com IA",
      title: "Organize seu dinheiro conversando.",
      subtitle:
        "Finance IA combina painel premium, coach financeiro humanizado, automação de gastos, controle de dívidas, ideias reais de renda e arquitetura SaaS pronta para assinatura.",
      cta: "Iniciar chat financeiro",
      secondary: "Ver painel"
    },
    auth: {
      title: "Acesso seguro",
      subtitle: "Login Google, email, recuperação de senha e sessões de perfil com Supabase Auth ou NextAuth.",
      google: "Continuar com Google",
      email: "Email",
      password: "Senha",
      forgot: "Recuperar senha",
      signIn: "Entrar"
    },
    onboarding: {
      title: "Primeiro perfil financeiro",
      intro: "Vou fazer perguntas inteligentes e criar seu primeiro mapa financeiro.",
      questions: [
        "Qual é sua renda mensal média?",
        "Quais despesas fixas se repetem todo mês?",
        "Você tem dívidas ou parcelas atualmente?",
        "Qual meta financeira é mais importante agora?",
        "Quanto você tem guardado para emergências?",
        "Qual é seu tipo de trabalho ou fonte de renda?",
        "Qual hábito de gasto mais te preocupa?"
      ]
    },
    dashboard: {
      title: "Central financeira inteligente",
      subtitle: "Insights atualizados por mensagens naturais no chat.",
      balance: "Saldo atual",
      income: "Receita mensal",
      expenses: "Gastos mensais",
      score: "Score financeiro",
      categories: "Categorias de gastos",
      predictions: "Previsões",
      debts: "Visão das dívidas",
      notifications: "Notificações"
    },
    chat: {
      title: "Fale com a Finance IA",
      subtitle: "Conte gastos, rendas, dívidas, metas ou decisões em linguagem natural.",
      placeholder: "Exemplo: gastei 50 reais com comida",
      thinking: "Finance IA está pensando...",
      newChat: "Novo chat",
      search: "Buscar conversas",
      delete: "Excluir",
      limitReached: "Limite diário de mensagens atingido.",
      upgrade: "Faça upgrade para continuar"
    },
    finance: {
      expenseDetected: "Registrei esse gasto e atualizei sua visão mensal.",
      incomeDetected: "Ótimo, adicionei essa renda ao seu saldo.",
      debtDetected: "Acompanhei esse movimento de dívida e vou monitorar o risco.",
      goalDetected: "Meta criada. Vou te ajudar a manter consistência.",
      guidance:
        "Próximo passo claro: proteja o essencial, reduza dívidas caras e automatize uma pequena reserva semanal."
    },
    incomeAi: {
      title: "Renda Extra IA",
      subtitle: "Ideias realistas com base em país, tempo, habilidades e situação financeira.",
      country: "País",
      time: "Tempo disponível",
      skills: "Habilidades",
      generate: "Gerar ideias"
    },
    pricing: {
      title: "Planos criados para hábitos financeiros diários",
      free: "Grátis",
      premium: "Premium",
      ultra: "Ultra",
      monthly: "Mensal",
      yearly: "Anual",
      upgrade: "Assinar"
    },
    admin: {
      title: "Admin e treinamento da IA",
      subtitle: "Perfis, templates, FAQ multilíngue e curadoria de conhecimento.",
      roles: "Permissões por perfil",
      training: "Base de treinamento da IA",
      question: "Pergunta",
      answer: "Resposta",
      category: "Categoria",
      save: "Salvar treinamento"
    },
    common: {
      language: "Idioma",
      saved: "Salvo",
      alert: "Alerta",
      simulate: "Simular",
      remaining: "mensagens restantes hoje"
    }
  },
  es: {
    metaTitle: "Finance IA - Asistente financiero con IA",
    brand: "Finance IA",
    tagline: "Tu compañero financiero con IA.",
    nav: { chat: "Chat IA", dashboard: "Panel", income: "Ingresos Extra IA", goals: "Metas", pricing: "Precios", admin: "Admin" },
    hero: { eyebrow: "SaaS financiero con IA", title: "Organiza tu dinero conversando.", subtitle: "Un coach financiero humano con chat, panel premium, control de deudas, metas, ideas de ingresos y arquitectura SaaS.", cta: "Iniciar chat", secondary: "Ver panel" },
    auth: { title: "Acceso seguro", subtitle: "Google, email, recuperación de contraseña y sesiones de perfil.", google: "Continuar con Google", email: "Email", password: "Contraseña", forgot: "Recuperar contraseña", signIn: "Entrar" },
    onboarding: { title: "Perfil financiero inicial", intro: "Haré preguntas inteligentes y crearé tu mapa financiero.", questions: ["¿Cuál es tu ingreso mensual?", "¿Qué gastos fijos tienes?", "¿Tienes deudas?", "¿Cuál es tu meta principal?", "¿Cuánto tienes ahorrado?", "¿Cuál es tu trabajo?", "¿Qué hábito de gasto te preocupa?"] },
    dashboard: { title: "Centro financiero", subtitle: "Insights desde mensajes naturales.", balance: "Saldo actual", income: "Ingreso mensual", expenses: "Gastos mensuales", score: "Score financiero", categories: "Categorías", predictions: "Predicciones", debts: "Deudas", notifications: "Notificaciones" },
    chat: { title: "Habla con Finance IA", subtitle: "Cuéntame gastos, ingresos, deudas o metas.", placeholder: "Ejemplo: gasté 50 dólares en comida", thinking: "Finance IA está pensando...", newChat: "Nuevo chat", search: "Buscar conversaciones", delete: "Eliminar", limitReached: "Límite diario alcanzado.", upgrade: "Mejorar plan" },
    finance: { expenseDetected: "Registré este gasto.", incomeDetected: "Añadí este ingreso.", debtDetected: "Registré el movimiento de deuda.", goalDetected: "Meta creada.", guidance: "Prioriza lo esencial, reduce deuda cara y automatiza un pequeño ahorro." },
    incomeAi: { title: "Ingresos Extra IA", subtitle: "Ideas realistas según país, tiempo y habilidades.", country: "País", time: "Tiempo disponible", skills: "Habilidades", generate: "Generar ideas" },
    pricing: { title: "Planes para hábitos financieros diarios", free: "Gratis", premium: "Premium", ultra: "Ultra", monthly: "Mensual", yearly: "Anual", upgrade: "Mejorar" },
    admin: { title: "Admin y entrenamiento IA", subtitle: "Roles, plantillas y FAQ multilingüe.", roles: "Permisos", training: "Base de entrenamiento", question: "Pregunta", answer: "Respuesta", category: "Categoría", save: "Guardar" },
    common: { language: "Idioma", saved: "Guardado", alert: "Alerta", simulate: "Simular", remaining: "mensajes restantes hoy" }
  },
  de: {
    metaTitle: "Finance IA - KI-Finanzassistent",
    brand: "Finance IA",
    tagline: "Dein ruhiger KI-Finanzbegleiter.",
    nav: { chat: "KI-Chat", dashboard: "Dashboard", income: "Extra Income AI", goals: "Ziele", pricing: "Preise", admin: "Admin" },
    hero: { eyebrow: "KI-Finanz-SaaS", title: "Ordne dein Geld im Gespräch.", subtitle: "Premium-Dashboard, menschliches Coaching, Ausgabenautomatisierung, Schuldenkontrolle und realistische Einkommensideen.", cta: "Chat starten", secondary: "Dashboard ansehen" },
    auth: { title: "Sicherer Zugang", subtitle: "Google, E-Mail, Passwort-Wiederherstellung und Sitzungen.", google: "Mit Google fortfahren", email: "E-Mail", password: "Passwort", forgot: "Passwort wiederherstellen", signIn: "Anmelden" },
    onboarding: { title: "Erstes Finanzprofil", intro: "Ich stelle intelligente Fragen und erstelle deine Finanzkarte.", questions: ["Wie hoch ist dein monatliches Einkommen?", "Welche Fixkosten hast du?", "Hast du Schulden?", "Was ist dein wichtigstes Ziel?", "Wie viel Notreserve hast du?", "Welche Arbeit machst du?", "Welche Ausgabegewohnheit belastet dich?"] },
    dashboard: { title: "Finanzzentrale", subtitle: "Insights aus natürlicher Sprache.", balance: "Aktueller Saldo", income: "Monatseinkommen", expenses: "Monatsausgaben", score: "Finanzscore", categories: "Kategorien", predictions: "Prognosen", debts: "Schulden", notifications: "Benachrichtigungen" },
    chat: { title: "Sprich mit Finance IA", subtitle: "Nenne Ausgaben, Einnahmen, Schulden oder Ziele.", placeholder: "Beispiel: Ich habe 50 Euro für Essen ausgegeben", thinking: "Finance IA denkt nach...", newChat: "Neuer Chat", search: "Chats suchen", delete: "Löschen", limitReached: "Tageslimit erreicht.", upgrade: "Upgrade" },
    finance: { expenseDetected: "Ich habe diese Ausgabe erfasst.", incomeDetected: "Ich habe dieses Einkommen hinzugefügt.", debtDetected: "Ich verfolge diese Schuldbewegung.", goalDetected: "Ziel erstellt.", guidance: "Schütze zuerst das Nötige, senke teure Schulden und spare wöchentlich automatisch." },
    incomeAi: { title: "Extra Income AI", subtitle: "Realistische Ideen nach Land, Zeit und Fähigkeiten.", country: "Land", time: "Verfügbare Zeit", skills: "Fähigkeiten", generate: "Ideen generieren" },
    pricing: { title: "Pläne für tägliche Finanzgewohnheiten", free: "Kostenlos", premium: "Premium", ultra: "Ultra", monthly: "Monatlich", yearly: "Jährlich", upgrade: "Upgrade" },
    admin: { title: "Admin und KI-Training", subtitle: "Rollen, Vorlagen und mehrsprachige FAQ.", roles: "Berechtigungen", training: "Trainingsdatenbank", question: "Frage", answer: "Antwort", category: "Kategorie", save: "Speichern" },
    common: { language: "Sprache", saved: "Gespeichert", alert: "Alarm", simulate: "Simulieren", remaining: "Nachrichten heute übrig" }
  },
  fr: {
    metaTitle: "Finance IA - Assistant financier IA",
    brand: "Finance IA",
    tagline: "Votre compagnon financier IA.",
    nav: { chat: "Chat IA", dashboard: "Tableau", income: "Revenus Extra IA", goals: "Objectifs", pricing: "Tarifs", admin: "Admin" },
    hero: { eyebrow: "SaaS financier IA", title: "Organisez votre argent par conversation.", subtitle: "Dashboard premium, coaching humain, dépenses, dettes, objectifs et idées de revenus réalistes.", cta: "Démarrer le chat", secondary: "Voir le tableau" },
    auth: { title: "Accès sécurisé", subtitle: "Google, email, récupération de mot de passe et sessions.", google: "Continuer avec Google", email: "Email", password: "Mot de passe", forgot: "Récupérer le mot de passe", signIn: "Connexion" },
    onboarding: { title: "Premier profil financier", intro: "Je pose des questions intelligentes et crée votre carte financière.", questions: ["Quel est votre revenu mensuel ?", "Quelles dépenses fixes avez-vous ?", "Avez-vous des dettes ?", "Quel est votre objectif principal ?", "Quelle est votre épargne d'urgence ?", "Quel est votre travail ?", "Quelle habitude vous inquiète ?"] },
    dashboard: { title: "Centre financier", subtitle: "Insights depuis le chat naturel.", balance: "Solde actuel", income: "Revenu mensuel", expenses: "Dépenses mensuelles", score: "Score financier", categories: "Catégories", predictions: "Prédictions", debts: "Dettes", notifications: "Notifications" },
    chat: { title: "Parlez à Finance IA", subtitle: "Dites vos dépenses, revenus, dettes ou objectifs.", placeholder: "Exemple : j'ai dépensé 50 euros en nourriture", thinking: "Finance IA réfléchit...", newChat: "Nouveau chat", search: "Chercher conversations", delete: "Supprimer", limitReached: "Limite quotidienne atteinte.", upgrade: "Passer Premium" },
    finance: { expenseDetected: "J'ai enregistré cette dépense.", incomeDetected: "J'ai ajouté ce revenu.", debtDetected: "J'ai suivi cette dette.", goalDetected: "Objectif créé.", guidance: "Protégez l'essentiel, réduisez les dettes chères et automatisez une petite épargne." },
    incomeAi: { title: "Revenus Extra IA", subtitle: "Idées réalistes selon pays, temps et compétences.", country: "Pays", time: "Temps disponible", skills: "Compétences", generate: "Générer" },
    pricing: { title: "Plans pour habitudes financières", free: "Gratuit", premium: "Premium", ultra: "Ultra", monthly: "Mensuel", yearly: "Annuel", upgrade: "Améliorer" },
    admin: { title: "Admin et entraînement IA", subtitle: "Rôles, modèles et FAQ multilingue.", roles: "Permissions", training: "Base d'entraînement", question: "Question", answer: "Réponse", category: "Catégorie", save: "Enregistrer" },
    common: { language: "Langue", saved: "Enregistré", alert: "Alerte", simulate: "Simuler", remaining: "messages restants aujourd'hui" }
  },
  it: {
    metaTitle: "Finance IA - Assistente finanziario AI",
    brand: "Finance IA",
    tagline: "Il tuo compagno finanziario AI.",
    nav: { chat: "Chat AI", dashboard: "Dashboard", income: "Reddito Extra AI", goals: "Obiettivi", pricing: "Prezzi", admin: "Admin" },
    hero: { eyebrow: "SaaS finanziario AI", title: "Organizza il denaro conversando.", subtitle: "Dashboard premium, coaching umano, spese, debiti, obiettivi e idee realistiche di reddito.", cta: "Avvia chat", secondary: "Vedi dashboard" },
    auth: { title: "Accesso sicuro", subtitle: "Google, email, recupero password e sessioni.", google: "Continua con Google", email: "Email", password: "Password", forgot: "Recupera password", signIn: "Accedi" },
    onboarding: { title: "Primo profilo finanziario", intro: "Farò domande intelligenti e creerò la tua mappa finanziaria.", questions: ["Qual è il reddito mensile?", "Quali spese fisse hai?", "Hai debiti?", "Qual è l'obiettivo principale?", "Quanto hai per emergenze?", "Che lavoro fai?", "Quale abitudine ti preoccupa?"] },
    dashboard: { title: "Centro finanziario", subtitle: "Insight dal linguaggio naturale.", balance: "Saldo attuale", income: "Reddito mensile", expenses: "Spese mensili", score: "Punteggio finanziario", categories: "Categorie", predictions: "Previsioni", debts: "Debiti", notifications: "Notifiche" },
    chat: { title: "Parla con Finance IA", subtitle: "Racconta spese, entrate, debiti o obiettivi.", placeholder: "Esempio: ho speso 50 euro per cibo", thinking: "Finance IA sta pensando...", newChat: "Nuova chat", search: "Cerca conversazioni", delete: "Elimina", limitReached: "Limite giornaliero raggiunto.", upgrade: "Aggiorna" },
    finance: { expenseDetected: "Ho registrato questa spesa.", incomeDetected: "Ho aggiunto questa entrata.", debtDetected: "Ho tracciato questo debito.", goalDetected: "Obiettivo creato.", guidance: "Proteggi l'essenziale, riduci debiti costosi e automatizza un piccolo risparmio." },
    incomeAi: { title: "Reddito Extra AI", subtitle: "Idee realistiche per paese, tempo e competenze.", country: "Paese", time: "Tempo disponibile", skills: "Competenze", generate: "Genera idee" },
    pricing: { title: "Piani per abitudini finanziarie", free: "Gratis", premium: "Premium", ultra: "Ultra", monthly: "Mensile", yearly: "Annuale", upgrade: "Aggiorna" },
    admin: { title: "Admin e training AI", subtitle: "Ruoli, template e FAQ multilingue.", roles: "Permessi", training: "Database training", question: "Domanda", answer: "Risposta", category: "Categoria", save: "Salva" },
    common: { language: "Lingua", saved: "Salvato", alert: "Avviso", simulate: "Simula", remaining: "messaggi rimasti oggi" }
  },
  ja: {
    metaTitle: "Finance IA - AI金融アシスタント",
    brand: "Finance IA",
    tagline: "あなたのAI金融パートナー。",
    nav: { chat: "AIチャット", dashboard: "ダッシュボード", income: "副収入AI", goals: "目標", pricing: "料金", admin: "管理" },
    hero: { eyebrow: "AI金融SaaS", title: "会話でお金を整える。", subtitle: "プレミアムな分析、自然なコーチング、支出、借金、目標、副収入アイデアを一つに。", cta: "チャット開始", secondary: "ダッシュボード" },
    auth: { title: "安全なログイン", subtitle: "Google、メール、パスワード復旧、セッション管理に対応。", google: "Googleで続行", email: "メール", password: "パスワード", forgot: "パスワード復旧", signIn: "ログイン" },
    onboarding: { title: "最初の金融プロフィール", intro: "質問を通じてあなたの金融マップを作ります。", questions: ["月収はいくらですか？", "毎月の固定費は？", "借金はありますか？", "一番大切な目標は？", "緊急資金はいくら？", "仕事の種類は？", "気になる支出習慣は？"] },
    dashboard: { title: "金融コマンドセンター", subtitle: "チャットからリアルタイム分析。", balance: "現在残高", income: "月収", expenses: "月間支出", score: "金融スコア", categories: "支出カテゴリ", predictions: "予測", debts: "借金", notifications: "通知" },
    chat: { title: "Finance IAと話す", subtitle: "支出、収入、借金、目標を自然に入力。", placeholder: "例: 食費に50ドル使った", thinking: "Finance IAが考えています...", newChat: "新規チャット", search: "会話検索", delete: "削除", limitReached: "本日の上限に達しました。", upgrade: "アップグレード" },
    finance: { expenseDetected: "この支出を記録しました。", incomeDetected: "この収入を追加しました。", debtDetected: "借金の動きを追跡しました。", goalDetected: "目標を作成しました。", guidance: "まず必需品を守り、高金利の借金を減らし、少額貯金を自動化しましょう。" },
    incomeAi: { title: "副収入AI", subtitle: "国、時間、スキルに基づく現実的なアイデア。", country: "国", time: "使える時間", skills: "スキル", generate: "生成" },
    pricing: { title: "毎日の金融習慣のためのプラン", free: "無料", premium: "プレミアム", ultra: "ウルトラ", monthly: "月額", yearly: "年額", upgrade: "アップグレード" },
    admin: { title: "管理とAIトレーニング", subtitle: "権限、テンプレート、多言語FAQ。", roles: "権限", training: "学習データベース", question: "質問", answer: "回答", category: "カテゴリ", save: "保存" },
    common: { language: "言語", saved: "保存済み", alert: "警告", simulate: "シミュレーション", remaining: "本日の残りメッセージ" }
  },
  zh: {
    metaTitle: "Finance IA - AI财务助手",
    brand: "Finance IA",
    tagline: "你的AI财务伙伴。",
    nav: { chat: "AI聊天", dashboard: "仪表盘", income: "额外收入AI", goals: "目标", pricing: "价格", admin: "管理" },
    hero: { eyebrow: "AI财务SaaS", title: "用对话管理你的金钱。", subtitle: "高级仪表盘、人性化财务教练、支出自动化、债务控制、目标和真实收入建议。", cta: "开始聊天", secondary: "查看仪表盘" },
    auth: { title: "安全访问", subtitle: "支持Google、邮箱、密码恢复和会话管理。", google: "使用Google继续", email: "邮箱", password: "密码", forgot: "找回密码", signIn: "登录" },
    onboarding: { title: "初始财务档案", intro: "我会提出智能问题并创建你的财务地图。", questions: ["你的月收入是多少？", "每月固定支出有哪些？", "你有债务吗？", "最重要的目标是什么？", "应急储蓄有多少？", "你的工作类型？", "哪个消费习惯最困扰你？"] },
    dashboard: { title: "财务指挥中心", subtitle: "由自然语言聊天实时更新。", balance: "当前余额", income: "月收入", expenses: "月支出", score: "财务评分", categories: "支出类别", predictions: "预测", debts: "债务", notifications: "通知" },
    chat: { title: "和Finance IA聊天", subtitle: "自然输入支出、收入、债务或目标。", placeholder: "例如：我在食物上花了50美元", thinking: "Finance IA正在思考...", newChat: "新聊天", search: "搜索会话", delete: "删除", limitReached: "已达到每日限制。", upgrade: "升级" },
    finance: { expenseDetected: "我已记录这笔支出。", incomeDetected: "我已添加这笔收入。", debtDetected: "我已跟踪债务变化。", goalDetected: "目标已创建。", guidance: "先保护必要支出，降低高息债务，再自动化小额储蓄。" },
    incomeAi: { title: "额外收入AI", subtitle: "根据国家、时间和技能给出现实想法。", country: "国家", time: "可用时间", skills: "技能", generate: "生成想法" },
    pricing: { title: "为每日财务习惯设计的计划", free: "免费", premium: "高级", ultra: "Ultra", monthly: "月付", yearly: "年付", upgrade: "升级" },
    admin: { title: "管理与AI训练", subtitle: "角色、模板和多语言FAQ。", roles: "权限", training: "训练数据库", question: "问题", answer: "答案", category: "类别", save: "保存" },
    common: { language: "语言", saved: "已保存", alert: "提醒", simulate: "模拟", remaining: "今日剩余消息" }
  },
  ko: {
    metaTitle: "Finance IA - AI 금융 비서",
    brand: "Finance IA",
    tagline: "당신의 AI 금융 동반자.",
    nav: { chat: "AI 채팅", dashboard: "대시보드", income: "부수입 AI", goals: "목표", pricing: "요금", admin: "관리" },
    hero: { eyebrow: "AI 금융 SaaS", title: "대화로 돈을 정리하세요.", subtitle: "프리미엄 대시보드, 인간적인 코칭, 지출 자동화, 부채 관리, 목표와 현실적인 수입 아이디어.", cta: "채팅 시작", secondary: "대시보드 보기" },
    auth: { title: "안전한 접근", subtitle: "Google, 이메일, 비밀번호 복구와 세션 관리.", google: "Google로 계속", email: "이메일", password: "비밀번호", forgot: "비밀번호 복구", signIn: "로그인" },
    onboarding: { title: "첫 금융 프로필", intro: "질문을 통해 금융 지도를 만듭니다.", questions: ["월소득은 얼마인가요?", "고정 지출은 무엇인가요?", "부채가 있나요?", "가장 중요한 목표는?", "비상금은 얼마인가요?", "일의 형태는?", "걱정되는 소비 습관은?"] },
    dashboard: { title: "금융 커맨드 센터", subtitle: "자연어 메시지에서 업데이트되는 인사이트.", balance: "현재 잔액", income: "월소득", expenses: "월지출", score: "금융 점수", categories: "지출 카테고리", predictions: "예측", debts: "부채", notifications: "알림" },
    chat: { title: "Finance IA와 대화", subtitle: "지출, 수입, 부채, 목표를 자연스럽게 말하세요.", placeholder: "예: 음식에 50달러 썼어", thinking: "Finance IA가 생각 중...", newChat: "새 채팅", search: "대화 검색", delete: "삭제", limitReached: "일일 한도에 도달했습니다.", upgrade: "업그레이드" },
    finance: { expenseDetected: "이 지출을 기록했습니다.", incomeDetected: "이 수입을 추가했습니다.", debtDetected: "부채 변화를 추적했습니다.", goalDetected: "목표를 만들었습니다.", guidance: "필수 지출을 보호하고 고금리 부채를 줄인 뒤 소액 저축을 자동화하세요." },
    incomeAi: { title: "부수입 AI", subtitle: "국가, 시간, 기술에 맞춘 현실적인 아이디어.", country: "국가", time: "가능 시간", skills: "기술", generate: "아이디어 생성" },
    pricing: { title: "매일의 금융 습관을 위한 플랜", free: "무료", premium: "프리미엄", ultra: "울트라", monthly: "월간", yearly: "연간", upgrade: "업그레이드" },
    admin: { title: "관리 및 AI 훈련", subtitle: "역할, 템플릿, 다국어 FAQ.", roles: "권한", training: "훈련 데이터베이스", question: "질문", answer: "답변", category: "카테고리", save: "저장" },
    common: { language: "언어", saved: "저장됨", alert: "알림", simulate: "시뮬레이션", remaining: "오늘 남은 메시지" }
  },
  ar: {
    metaTitle: "Finance IA - مساعد مالي بالذكاء الاصطناعي",
    brand: "Finance IA",
    tagline: "رفيقك المالي الذكي.",
    nav: { chat: "دردشة ذكية", dashboard: "لوحة التحكم", income: "دخل إضافي AI", goals: "الأهداف", pricing: "الأسعار", admin: "الإدارة" },
    hero: { eyebrow: "منصة مالية ذكية", title: "نظم أموالك عبر المحادثة.", subtitle: "لوحة فاخرة، تدريب مالي إنساني، تتبع المصاريف، الديون، الأهداف وأفكار دخل واقعية.", cta: "ابدأ الدردشة", secondary: "عرض اللوحة" },
    auth: { title: "دخول آمن", subtitle: "Google والبريد واستعادة كلمة المرور وإدارة الجلسات.", google: "المتابعة عبر Google", email: "البريد", password: "كلمة المرور", forgot: "استعادة كلمة المرور", signIn: "دخول" },
    onboarding: { title: "الملف المالي الأول", intro: "سأطرح أسئلة ذكية وأبني خريطتك المالية.", questions: ["ما دخلك الشهري؟", "ما مصاريفك الثابتة؟", "هل لديك ديون؟", "ما هدفك الأهم؟", "كم لديك للطوارئ؟", "ما نوع عملك؟", "أي عادة إنفاق تقلقك؟"] },
    dashboard: { title: "مركز القيادة المالي", subtitle: "رؤى من المحادثات الطبيعية.", balance: "الرصيد الحالي", income: "الدخل الشهري", expenses: "المصاريف الشهرية", score: "النقاط المالية", categories: "فئات الإنفاق", predictions: "التوقعات", debts: "الديون", notifications: "الإشعارات" },
    chat: { title: "تحدث مع Finance IA", subtitle: "اكتب المصاريف أو الدخل أو الديون أو الأهداف.", placeholder: "مثال: أنفقت 50 دولارا على الطعام", thinking: "Finance IA يفكر...", newChat: "دردشة جديدة", search: "بحث المحادثات", delete: "حذف", limitReached: "تم بلوغ الحد اليومي.", upgrade: "ترقية" },
    finance: { expenseDetected: "سجلت هذا المصروف.", incomeDetected: "أضفت هذا الدخل.", debtDetected: "تابعت حركة الدين.", goalDetected: "تم إنشاء الهدف.", guidance: "احم الضروريات أولا، قلل الديون ذات الفائدة العالية، ثم ادخر مبلغا صغيرا تلقائيا." },
    incomeAi: { title: "دخل إضافي AI", subtitle: "أفكار واقعية حسب البلد والوقت والمهارات.", country: "البلد", time: "الوقت المتاح", skills: "المهارات", generate: "توليد أفكار" },
    pricing: { title: "خطط لعادات مالية يومية", free: "مجاني", premium: "Premium", ultra: "Ultra", monthly: "شهري", yearly: "سنوي", upgrade: "ترقية" },
    admin: { title: "الإدارة وتدريب الذكاء", subtitle: "أدوار وقوالب وأسئلة متعددة اللغات.", roles: "الصلاحيات", training: "قاعدة التدريب", question: "سؤال", answer: "إجابة", category: "فئة", save: "حفظ" },
    common: { language: "اللغة", saved: "محفوظ", alert: "تنبيه", simulate: "محاكاة", remaining: "رسائل متبقية اليوم" }
  },
  ru: {
    metaTitle: "Finance IA - финансовый AI-ассистент",
    brand: "Finance IA",
    tagline: "Ваш AI финансовый помощник.",
    nav: { chat: "AI чат", dashboard: "Панель", income: "Extra Income AI", goals: "Цели", pricing: "Тарифы", admin: "Админ" },
    hero: { eyebrow: "AI финансовый SaaS", title: "Управляйте деньгами через диалог.", subtitle: "Премиальная панель, человечный коучинг, расходы, долги, цели и реалистичные идеи дохода.", cta: "Начать чат", secondary: "Открыть панель" },
    auth: { title: "Безопасный вход", subtitle: "Google, email, восстановление пароля и сессии.", google: "Продолжить с Google", email: "Email", password: "Пароль", forgot: "Восстановить пароль", signIn: "Войти" },
    onboarding: { title: "Первый финансовый профиль", intro: "Я задам вопросы и создам вашу финансовую карту.", questions: ["Какой ваш месячный доход?", "Какие постоянные расходы?", "Есть ли долги?", "Какая главная цель?", "Сколько есть на экстренный фонд?", "Какой тип работы?", "Какая привычка расходов беспокоит?"] },
    dashboard: { title: "Финансовый центр", subtitle: "Инсайты из естественных сообщений.", balance: "Текущий баланс", income: "Месячный доход", expenses: "Месячные расходы", score: "Финансовый score", categories: "Категории", predictions: "Прогнозы", debts: "Долги", notifications: "Уведомления" },
    chat: { title: "Поговорите с Finance IA", subtitle: "Введите расходы, доход, долги или цели.", placeholder: "Например: я потратил 50 долларов на еду", thinking: "Finance IA думает...", newChat: "Новый чат", search: "Поиск диалогов", delete: "Удалить", limitReached: "Дневной лимит достигнут.", upgrade: "Улучшить" },
    finance: { expenseDetected: "Я записал этот расход.", incomeDetected: "Я добавил этот доход.", debtDetected: "Я отслеживаю изменение долга.", goalDetected: "Цель создана.", guidance: "Сначала защитите необходимое, снижайте дорогой долг и автоматизируйте небольшие сбережения." },
    incomeAi: { title: "Extra Income AI", subtitle: "Реалистичные идеи по стране, времени и навыкам.", country: "Страна", time: "Доступное время", skills: "Навыки", generate: "Сгенерировать" },
    pricing: { title: "Тарифы для ежедневных финансовых привычек", free: "Бесплатно", premium: "Premium", ultra: "Ultra", monthly: "Месяц", yearly: "Год", upgrade: "Улучшить" },
    admin: { title: "Админ и обучение AI", subtitle: "Роли, шаблоны и многоязычный FAQ.", roles: "Права", training: "База обучения", question: "Вопрос", answer: "Ответ", category: "Категория", save: "Сохранить" },
    common: { language: "Язык", saved: "Сохранено", alert: "Сигнал", simulate: "Симуляция", remaining: "сообщений осталось сегодня" }
  }
} as const;

export type Dictionary = (typeof dictionaries)["en"];
