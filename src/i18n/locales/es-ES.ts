import type { Locale } from "./en-US";

/** Español (es-ES) — escrito en español, no traducido palabra por palabra del inglés. */
export const esES: Locale = {
  langName: "Español",
  seo: {
    title: "TabRunner: Tú pones la meta. Él pilota tus pestañas.",
    description:
      "Un agente de IA que pilota tu navegador con el proveedor de IA que elijas, usando tus pestañas, sesiones y cuentas en las que ya has iniciado sesión. Solo navegadores Chromium. Sin servidor, sin cuenta, sin telemetría.",
  },
  notFound: {
    title: "Página no encontrada",
    body: "Esa dirección no existe en tabrunner.app. La página principal está aquí abajo: qué hace TabRunner y cómo instalarlo.",
  },
  nav: {
    features: "Funciones",
    install: "Instalar",
    privacy: "Privacidad",
    docs: "Docs",
    download: "Añadir a Chrome",
    github: "GitHub",
    languageLabel: "Idioma",
    sectionsLabel: "Secciones",
    skipToContent: "Saltar al contenido",
  },
  hero: {
    titleA: "Tú pones la meta.",
    titleB: "Él pilota tus pestañas.",
    sub: "Un agente de IA que pilota tu navegador con el proveedor de IA que elijas, usando tus pestañas, sesiones y cuentas en las que ya has iniciado sesión. Describe la tarea en el panel lateral: TabRunner lee las páginas, hace clic, escribe y navega hasta terminar el trabajo.",
    ctaPrimary: "Añadir a tu navegador",
    ctaFor: "Añadir a {{browser}}",
    ctaUnsupported:
      "TabRunner solo funciona en navegadores de escritorio basados en Chrome. Abre esta página en Chrome, Brave, Edge, Arc, Opera o Vivaldi para descargarlo.",
    ctaSecondary: "Cómo instalar",
    missionLabel: "Describe una tarea",
    missionGo: "Lanzar",
    placeholders: [
      "Pasa la factura de mi correo al informe de gastos…",
      "Rellena el formulario de visado con los datos de mi reserva…",
      "Copia los números de esta semana del panel de analytics a mi hoja…",
      "Busca mi número de seguimiento y pégalo en el formulario de la transportista…",
    ],
    demoHint:
      "Lanza una. Lo que pasa aquí es una bandada de cometas cruzando el cielo, y nada más. Para ejecutarla de verdad hace falta la extensión.",
    demoLaunched:
      "Esos cometas son la idea en miniatura. Con la extensión instalada, la tarea se ejecuta en tu navegador de verdad.",
    browsersLabel: "Funciona en",
    chromiumNote:
      "Solo Chromium. Firefox y Safari no tienen la API de entrada confiable. En vez de un botón que no hace nada, recibes una explicación.",
  },
  run: {
    demoBadge: "demo simulada",
    taskLabel: "Tarea",
    task: "Pasar la factura más reciente del correo al informe de gastos",
    planning: "Planificando…",
    planTitle: "Plan",
    plan: [
      "Abrir la bandeja de entrada",
      "Buscar la factura más reciente",
      "Abrir el informe de gastos",
      "Adjuntarla y rellenar los campos",
    ],
    tools: [
      { tool: "navigate", detail: "bandeja del webmail" },
      { tool: "click", detail: 'ref=e21 "factura.pdf"' },
      { tool: "snapshot", detail: "formulario de gastos, 6 campos" },
    ],
    composing: "Rellenando el informe de gastos…",
    done: "Hecho. Informe de gastos listo para revisar",
    elapsed: "transcurrido",
    tokens: "tokens",
    stopNote:
      "Esc detiene cualquier ejecución al instante, incluida esta demo si fuera una tarea real.",
  },
  features: {
    title: "La ventaja es tu navegador",
    sub: "La mayoría de los agentes de navegador se ejecutan en un navegador aislado y sin sesión iniciada. TabRunner se ejecuta en el tuyo, por eso puede actuar en los sitios donde ya has iniciado sesión.",
    providersMore: "+ cualquier endpoint compatible con OpenAI/Anthropic",
    items: [
      {
        title: "Usa el proveedor que quieras",
        body: "Son 15 preajustes para los 12 proveedores de abajo. Anthropic, OpenAI y Kimi aparecen dos veces: inicia sesión con el plan de Claude, ChatGPT o Kimi que ya pagas, o pega una clave de API. Además de cualquier endpoint que hable el formato de OpenAI o Anthropic. Sin lock-in y sin ningún servidor de por medio.",
      },
      {
        title: "Clics y teclas de verdad",
        body: "Los clics y las teclas pasan por el Chrome DevTools Protocol. Son eventos confiables de verdad (trusted events), no eventos sintéticos de JavaScript, que las pantallas de login y los campos de pago ignoran.",
      },
      {
        title: "Ve la página, no el HTML",
        body: "El modelo lee un árbol de accesibilidad compacto, nunca el HTML en bruto. Eso significa prompts más pequeños y refs estables. Las contraseñas y los números de tarjeta nunca salen de la página.",
      },
      {
        title: "Frenos que aguantan",
        body: "Toda acción con consecuencias (pagar, enviar, borrar) pide tu confirmación antes. Reintenta cuando el proveedor falla, un límite de pasos evita que la tarea se descontrole, y Detener detiene al instante.",
      },
      {
        title: "MCP en ambas direcciones",
        body: "Claude Code, Claude Desktop o cualquier cliente MCP le pasa una tarea a TabRunner y la sigue hasta la respuesta, en el mismo navegador, con las mismas sesiones y todo marcado en tu historial. Y al revés también: TabRunner se conecta a servidores MCP remotos cuyas herramientas se suman a cada ejecución, siempre pasando por los frenos, y los eventos de ejecución pueden llegar por POST a un webhook tuyo.",
      },
      {
        title: "Sin servidor. Ninguno en absoluto.",
        body: "Tu clave va directa de la extensión a tu proveedor. Los ajustes y el historial se quedan en chrome.storage, en tu dispositivo. Sin cuenta, sin telemetría, nada que se pueda filtrar.",
      },
    ],
  },
  route: {
    title: "El recorrido de una tarea, de principio a fin",
    you: "tú",
    or: "o",
    mcp: "un cliente MCP",
    extension: "tabrunner",
    provider: "tu proveedor",
    gate: "frenos",
    page: "la página",
    relay: "un servidor intermedio",
    legAsk: "la petición / el plan",
    legAct: "clics y teclas / la página en refs",
  },
  shots: {
    title: "El panel es el producto",
    sub: "No secuestra el navegador. Es un panel lateral que trabaja junto a la página en la que estás.",
    captions: [
      "El panel lateral, antes de empezar una tarea",
      "Una ejecución terminada: plan, acciones, resumen y la marca en la pestaña",
      "Proveedores: preajustes o cualquier endpoint compatible",
      "La píldora de estado: la tarea trabaja mientras sigues leyendo",
    ],
    note: "Capturas de la versión actual, generadas automáticamente, así que nunca se quedan desfasadas tras un rediseño.",
  },
  install: {
    title: "El plan de vuelo",
    sub: "Un clic en la Chrome Web Store y un minuto más para apuntarlo a un proveedor. Sin cuenta, sin nada que contratar.",
    badge: "se actualiza solo",
    storeTitle: "Instálalo desde la Chrome Web Store",
    steps: [
      "Añade TabRunner a tu navegador desde la ficha de la tienda. A partir de ahí las actualizaciones llegan solas.",
      "Fija el cometa en la barra de herramientas y haz clic para abrir el panel lateral.",
      "Elige un proveedor, inicia sesión con la suscripción que ya pagas o pega una clave de API y describe una tarea.",
    ],
    storeCta: "Añadir a Chrome",
    caveatsTitle: "Sin letra pequeña",
    caveats: [
      "Solo navegadores Chromium de escritorio: Chrome, Brave, Edge, Arc, Opera, Vivaldi. En Edge y Opera hay que permitir antes las extensiones de otras tiendas.",
      "La pantalla de instalación pide acceso amplio a tus pestañas. Ese acceso es el producto: es como el agente lee las páginas y escribe de verdad. Lo que hace con él está en la sección de abajo.",
      "El modelo lo pones tú: una suscripción de proveedor que ya pagas, o una clave de API. No hay cuenta de TabRunner ni plan gratuito incluido.",
      "¿Ya tienes instalada la versión descomprimida? Quítala antes. La de la tienda usa el mismo ID de extensión y Chrome no ejecuta las dos. Quitarla borra su almacenamiento: tus proveedores, sesiones y conversaciones no se conservan.",
    ],
    releaseNotes: "Notas de la versión",
    zipTitle: "¿Prefieres no usar la tienda?",
    zipSteps:
      "Descarga el ZIP y descomprímelo en una carpeta que vayas a conservar. Luego: chrome://extensions → Modo de desarrollador → Cargar descomprimida → selecciona esa carpeta. No puede convivir con la instalación de la tienda.",
    zipUpdateTitle: "Cómo actualizar",
    zipUpdateBody:
      "Extrae cada ZIP nuevo sobre esa misma carpeta, reemplazando los archivos, y pulsa ⟳ en chrome://extensions.",
    zipUpdateWarning:
      "Nunca quites la extensión para reinstalarla. Chrome borra su almacenamiento al salir, y tus proveedores, sesiones y conversaciones se van con ella.",
    downloadZip: "Descargar ZIP",
  },
  privacy: {
    title: "Sin estación en tierra",
    sub: "Un agente que pilota tu navegador con la sesión iniciada tiene que responder a la pregunta de los datos antes que a ninguna otra. Esta es la respuesta.",
    points: [
      "De entrada, tus datos van a dos destinos: la web en la que trabaja el agente y el proveedor de IA que hayas configurado. Cualquier otro destino, como Jev, un servidor MCP o un webhook, solo existe si lo añades tú.",
      "No existe ningún servidor de TabRunner, ni cuenta, ni analítica, ni llamadas a nadie que no hayas configurado tú.",
      "Los ajustes de los proveedores y el historial de conversaciones se quedan en chrome.storage, en tu dispositivo.",
    ],
    diagramBrowser: "Tu navegador",
    diagramProvider: "Tu proveedor de IA",
    diagramSites: "Los sitios que usas",
    diagramKeyFlow: "clave de API o inicio de sesión, enviados directamente",
    diagramTaskFlow: "clics y teclas",
    diagramServer: "servidor de TabRunner",
    diagramServerNone: "no existe",
    link: "Lee la política de privacidad completa",
  },
  docs: {
    seo: {
      title: "Docs de TabRunner: conecta Claude Code y resuelve problemas comunes",
      description:
        "Conecta Claude Code a TabRunner por MCP y encuentra respuestas sobre navegadores compatibles, tus datos, aprobaciones y cómo detener una ejecución.",
    },
    title: "Docs",
    sub: "Conecta Claude Code a TabRunner y resuelve las dudas más comunes.",
    installLink: "¿Aún no lo has instalado? Empieza aquí.",
    contentsLabel: "En esta página",
    copy: "Copiar",
    copied: "Copiado",
    mcp: {
      title: "Conectar Claude Code (MCP)",
      intro:
        "MCP permite que Claude Code le pase una tarea a TabRunner. TabRunner hace el trabajo en tu navegador, con tus sesiones iniciadas. Estos pasos son para Claude Code.",
      enable:
        "Activa el puente. En TabRunner, abre Configuración → MCP y activa la opción. Viene desactivada.",
      fetch:
        "Descarga el daemon. Es un solo archivo, y <bun>bun</bun> lo ejecuta tal cual. Si todavía no tienes bun, instálalo antes.",
      add: "Añádelo a Claude Code. Con <code>--scope user</code> funciona en cualquier carpeta. Sin eso, Claude Code lo añade solo para la carpeta actual.",
      check:
        "Comprueba la conexión. Pídele a Claude Code que ejecute la herramienta <code>health</code> de TabRunner. Dice si la extensión está conectada y qué arreglar si no lo está.",
      manual:
        "Todas las herramientas, opciones y el modo de control directo están en el <manual>manual completo de MCP</manual>.",
    },
    remove: {
      title: "Quitar o actualizar el servidor MCP",
      remove: "Para quitarlo, ejecuta:",
      file: "Eso solo anula el registro. El archivo descargado sigue en tu disco. Bórralo también si quieres que desaparezca:",
      update:
        "Para actualizar el daemon, vuelve a ejecutar el comando de descarga del paso 2. No cambia nada más.",
    },
    faq: {
      otherFolders: {
        q: "Claude Code no encuentra TabRunner en otra carpeta",
        a1: "Sin <code>--scope user</code>, Claude Code guarda el servidor solo para la carpeta donde lo añadiste. Añádelo otra vez, para todas las carpetas:",
        a2: "La copia de esa carpeta puede quedarse. Para quitarla, ejecuta esto dentro de esa carpeta:",
      },
      notConnected: {
        q: "La herramienta health dice que la extensión no está conectada",
        lead: "Revisa esto, en orden:",
        items: [
          "El puente está activado en TabRunner, en Configuración → MCP.",
          "El puerto coincide. Si cambiaste el puerto del daemon con <code>TABRUNNER_BRIDGE_PORT</code>, escribe el mismo número en Configuración → MCP. El predeterminado es 17836.",
          "Tu navegador está abierto, con TabRunner instalado y activado.",
          "Claude Code muestra el servidor. Ejecuta <code>claude mcp list</code>. Si tabrunner no aparece, añádelo otra vez y abre una sesión nueva.",
        ],
        tail: "El daemon se inicia junto con Claude Code, así que no hay nada que dejar en marcha.",
      },
      browsers: {
        q: "¿En qué navegadores funciona?",
        a: "Navegadores Chromium de escritorio: Chrome, Brave, Edge, Arc, Opera y Vivaldi. Firefox y Safari no tienen la API de entrada confiable, así que TabRunner no puede hacer clic ni escribir de verdad en ellos.",
      },
      account: {
        q: "¿Necesito una cuenta de TabRunner?",
        a: "No. No hay cuenta de TabRunner ni plan gratuito. Tú pones el modelo: inicia sesión con un plan de Claude, ChatGPT o Kimi que ya pagas, o pega una clave de API. Cualquier endpoint compatible con el formato de OpenAI o de Anthropic también sirve.",
      },
      data: {
        q: "¿A dónde van mis datos?",
        a: "A dos sitios: la web en la que trabaja el agente y el proveedor de IA que configuraste. Tu clave de API o tu inicio de sesión va directo de la extensión a ese proveedor. No hay servidor de TabRunner, ni telemetría, ni intermediario. Tu configuración y el historial de conversaciones se quedan en el almacenamiento del navegador, en tu dispositivo. Un servidor MCP o un webhook solo recibe datos si lo añades tú. La <privacy>política de privacidad</privacy> da los detalles.",
      },
      confirm: {
        q: "¿Paga, envía o borra sin preguntar?",
        a: "No. Apruebas el plan antes de que pase nada, y las acciones que pagan, envían o borran vuelven a ti para que las confirmes. Una excepción: cuando un cliente MCP hace clic por las páginas por su cuenta (control directo), es el cliente quien tiene que preguntarte antes. La comprobación propia de TabRunner no interviene ahí.",
      },
      stop: {
        q: "¿Cómo detengo una ejecución?",
        a: "Haz clic en Detener en el panel lateral. Cerrar la pestaña que controla también termina la ejecución. Desde un cliente MCP, llama a la herramienta <code>stop</code>.",
      },
      update: {
        q: "¿Cómo actualizo la extensión?",
        a: "Con la Chrome Web Store, las actualizaciones llegan solas. Si instalaste el ZIP, descomprime cada versión nueva sobre la misma carpeta y haz clic en el icono de recargar en <code>chrome://extensions</code>. Nunca quites la extensión para reinstalarla. Chrome borra su almacenamiento, y tus proveedores, sesiones y conversaciones se van con ella.",
      },
    },
  },
  legal: {
    back: "Volver a tabrunner.app",
    source: "Fuente oficial:",
  },
  footer: {
    tagline: "Tú pones la meta. Él pilota tus pestañas.",
    chromium: "Solo Chromium: Chrome, Brave, Edge, Arc, Opera, Vivaldi.",
    openSource: "Código abierto en GitHub",
    license: "Código abierto, licencia MIT.",
    productHeading: "Producto",
    projectHeading: "Proyecto",
    store: "Chrome Web Store",
    downloadZip: "Descargar ZIP",
    issues: "Issues",
    privacyLink: "Política de privacidad",
    termsLink: "Términos de uso",
    docs: "Docs",
    copyright: "© 2026 Gus",
  },
};
