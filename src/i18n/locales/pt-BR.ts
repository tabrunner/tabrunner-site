import type { Locale } from "./en-US";

/** Português (Brasil) — escrito em pt-BR, não traduzido do inglês palavra por palavra. */
export const ptBR: Locale = {
  langName: "Português (Brasil)",
  nav: {
    features: "Recursos",
    install: "Instalar",
    privacy: "Privacidade",
    download: "Instalar no Chrome",
    github: "GitHub",
    languageLabel: "Idioma",
    sectionsLabel: "Seções",
    skipToContent: "Pular para o conteúdo",
  },
  hero: {
    titleA: "Você dá o objetivo.",
    titleB: "Ele pilota as abas.",
    sub: "Um agente de IA que pilota o seu navegador — o seu mesmo, com as suas abas, as suas sessões e as contas em que você já está logado — usando o provedor de IA que você escolher. Descreva a tarefa no painel lateral: o TabRunner lê as páginas, clica, digita e navega até terminar o serviço.",
    ctaPrimary: "Instalar no seu navegador",
    ctaFor: "Instalar no {{browser}}",
    ctaUnsupported:
      "O TabRunner só funciona em navegadores de desktop baseados no Chrome — abra esta página no Chrome, Brave, Edge, Arc, Opera ou Vivaldi para baixar.",
    ctaSecondary: "Como instalar",
    missionLabel: "Descreva uma tarefa",
    missionGo: "Lançar",
    placeholders: [
      "Pegue a nota fiscal no meu e-mail e lance no relatório de despesas…",
      "Preencha o formulário de visto com os dados da minha reserva…",
      "Copie os números desta semana do painel de analytics para a minha planilha…",
      "Ache o meu código de rastreio e cole no formulário da transportadora…",
    ],
    demoHint:
      "Lance uma — o que acontece aqui é um bando de cometas cruzando o céu, e mais nada. Para rodar de verdade, precisa da extensão.",
    demoLaunched:
      "Esses cometas são a ideia em miniatura. Com a extensão instalada, a tarefa roda no seu navegador mesmo.",
    browsersLabel: "Funciona em",
    chromiumNote:
      "Só Chromium. Firefox e Safari não têm a API de entrada confiável — em vez de um botão que não funciona, você recebe uma explicação.",
  },
  run: {
    demoBadge: "demo simulada",
    taskLabel: "Tarefa",
    task: "Pegar a nota fiscal mais recente do e-mail e lançar no relatório de despesas",
    planning: "Planejando…",
    planTitle: "Plano",
    plan: [
      "Abrir a caixa de entrada",
      "Achar a nota fiscal mais recente",
      "Abrir o relatório de despesas",
      "Anexar e preencher os campos",
    ],
    tools: [
      { tool: "navigate", detail: "caixa de entrada do webmail" },
      { tool: "click", detail: 'ref=e21 "nota-fiscal.pdf"' },
      { tool: "snapshot", detail: "formulário de despesas, 6 campos" },
    ],
    composing: "Preenchendo o relatório de despesas…",
    done: "Concluído — relatório de despesas pronto para revisão",
    elapsed: "decorrido",
    tokens: "tokens",
    stopNote: "O Esc interrompe qualquer execução na hora — inclusive esta, se ela fosse real.",
  },
  features: {
    title: "A vantagem é o seu navegador",
    sub: "A maioria dos agentes de navegador roda num navegador isolado e sem nenhum login. O TabRunner roda no seu — por isso ele consegue agir nos sites em que você já está logado.",
    providersMore: "+ qualquer endpoint compatível com OpenAI/Anthropic",
    items: [
      {
        title: "Use o provedor que quiser",
        body: "São 15 presets para os 12 provedores abaixo — Anthropic, OpenAI e Kimi aparecem duas vezes: faça login com o plano do Claude, do ChatGPT ou da Kimi que você já paga, ou cole uma chave de API. Além de qualquer endpoint que fale o formato da OpenAI ou da Anthropic. Sem lock-in e sem servidor no meio do caminho.",
      },
      {
        title: "Cliques e teclas de verdade",
        body: "Os cliques e as teclas passam pelo Chrome DevTools Protocol — são eventos confiáveis de verdade (trusted events), não eventos sintéticos de JavaScript, que telas de login e campos de pagamento ignoram.",
      },
      {
        title: "Enxerga a página, não o HTML",
        body: "O modelo lê uma árvore de acessibilidade compacta, nunca o HTML bruto — prompts menores, refs estáveis e senhas ou números de cartão que nunca saem da página.",
      },
      {
        title: "Travas que seguram",
        body: "Toda ação com consequência — pagar, enviar, excluir — pede a sua confirmação antes. Ele tenta de novo quando o provedor falha, um limite de passos evita que a tarefa saia do controle, e o Parar para na hora.",
      },
      {
        title: "MCP nos dois sentidos",
        body: "Claude Code, Claude Desktop ou qualquer cliente MCP passa uma tarefa para o TabRunner e acompanha até a resposta — mesmo navegador, mesmos logins, tudo marcado no seu histórico. E no sentido contrário também: o TabRunner se conecta a servidores MCP remotos cujas ferramentas entram em toda execução — sempre passando pelas travas — e eventos de execução podem ir por POST para um webhook seu.",
      },
      {
        title: "Sem servidor. Nenhum mesmo.",
        body: "A sua chave vai direto da extensão para o provedor. As configurações e o histórico ficam no chrome.storage, no seu dispositivo. Sem cadastro, sem telemetria, nada que possa vazar.",
      },
    ],
  },
  route: {
    title: "O trajeto de uma tarefa — do começo ao fim",
    you: "você",
    or: "ou",
    mcp: "um cliente MCP",
    extension: "tabrunner",
    provider: "seu provedor",
    gate: "travas",
    page: "a página",
    relay: "um servidor intermediário",
    legAsk: "o pedido / o plano",
    legAct: "cliques e teclas / a página em refs",
  },
  shots: {
    title: "O painel é o produto",
    sub: "Ele não toma conta do navegador — é um painel lateral que trabalha ao lado da página em que você está.",
    captions: [
      "O painel lateral, antes de começar uma tarefa",
      "Uma execução concluída: plano, ações, resumo — e a marca na aba",
      "Provedores: presets ou qualquer endpoint compatível",
      "A pílula de status: a tarefa trabalha enquanto você continua lendo",
    ],
    note: "Capturas da versão atual — geradas automaticamente, então nunca ficam desatualizadas depois de um redesign.",
  },
  install: {
    title: "O plano de voo",
    sub: "Um clique na Chrome Web Store e mais um minuto para apontar para um provedor. Sem cadastro, sem nada para assinar.",
    badge: "atualiza sozinho",
    storeTitle: "Instale pela Chrome Web Store",
    steps: [
      "Instale o TabRunner no seu navegador pela página da loja — dali em diante as atualizações chegam sozinhas.",
      "Fixe o cometa na barra de ferramentas e clique nele para abrir o painel lateral.",
      "Escolha um provedor — faça login com a assinatura que você já paga, ou cole uma chave de API — e descreva uma tarefa.",
    ],
    storeCta: "Instalar no Chrome",
    caveatsTitle: "Sem letras miúdas",
    caveats: [
      "Só navegadores Chromium de desktop — Chrome, Brave, Edge, Arc, Opera, Vivaldi. No Edge e no Opera é preciso permitir extensões de outras lojas antes.",
      "A tela de instalação pede acesso amplo às suas abas. Esse acesso é o produto — é assim que o agente lê as páginas e digita de verdade. O que ele faz com isso está na seção logo abaixo.",
      "O modelo é por sua conta: uma assinatura de provedor que você já paga, ou uma chave de API. Não existe conta TabRunner nem plano gratuito incluído.",
      "Já está com a versão descompactada instalada? Remova antes — a da loja usa o mesmo ID de extensão e o Chrome não roda as duas. Remover apaga o armazenamento dela: seus provedores, logins e conversas não vão junto.",
    ],
    releaseNotes: "Notas da versão",
    zipTitle: "Prefere não usar a loja?",
    zipSteps:
      "Baixe o ZIP e descompacte numa pasta que você vá manter. Depois: chrome://extensions → Modo do desenvolvedor → Carregar sem compactação → selecione essa pasta. Ela não pode conviver com a instalação da loja.",
    zipUpdateTitle: "Como atualizar",
    zipUpdateBody:
      "Extraia cada ZIP novo por cima dessa mesma pasta, substituindo os arquivos, e clique em ⟳ na página chrome://extensions.",
    zipUpdateWarning:
      "Nunca remova a extensão para instalar de novo — o Chrome apaga o armazenamento dela na saída, e seus provedores, logins e conversas vão junto.",
    downloadZip: "Baixar ZIP",
  },
  privacy: {
    title: "Sem estação em terra",
    sub: "Um agente que pilota o seu navegador logado precisa responder à pergunta sobre os dados antes de qualquer outra. A resposta é esta.",
    points: [
      "Os seus dados vão para exatamente dois lugares: o site em que o agente está trabalhando e o provedor de IA que você configurou.",
      "Não existe servidor do TabRunner, nem cadastro, nem analytics, nem chamada para terceiros.",
      "As configurações dos provedores e o histórico das conversas ficam no chrome.storage, no seu dispositivo.",
    ],
    diagramBrowser: "Seu navegador",
    diagramProvider: "Seu provedor de IA",
    diagramSites: "Os sites que você usa",
    diagramKeyFlow: "chave de API ou login — direto",
    diagramTaskFlow: "cliques e teclas",
    diagramServer: "servidor do TabRunner",
    diagramServerNone: "não existe",
    link: "Leia a política de privacidade completa",
  },
  legal: {
    back: "Voltar para tabrunner.app",
    source: "Fonte oficial:",
  },
  footer: {
    tagline: "Você dá o objetivo. Ele pilota as abas.",
    chromium: "Só Chromium — Chrome, Brave, Edge, Arc, Opera, Vivaldi.",
    openSource: "Código aberto no GitHub",
    license: "Código aberto, licença MIT.",
    productHeading: "Produto",
    projectHeading: "Projeto",
    store: "Chrome Web Store",
    downloadZip: "Baixar ZIP",
    issues: "Issues",
    privacyLink: "Política de privacidade",
    termsLink: "Termos de uso",
    mcpDocs: "Docs do MCP",
    copyright: "© 2026 Gus",
  },
};
