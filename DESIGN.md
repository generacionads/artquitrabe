---
name: Art-Quitrabe
description: Estudio de reformas integrales en Madrid — calidad arquitectónica sin ostentación
colors:
  primary: "#184690"
  primary-dark: "#0F2D5E"
  primary-mid: "#2055A8"
  dark: "#0D0D14"
  dark-surface: "#14141E"
  white: "#FFFFFF"
  surface: "#F8F8F8"
  ink: "#0D0D14"
  ink-muted: "#4A4A52"
  ink-subtle: "#8A8A94"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "clamp(46px, 6vw, 88px)"
    fontWeight: 800
    lineHeight: 0.97
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "clamp(28px, 3vw, 48px)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "10px"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "0.15em"
rounded:
  none: "0px"
  sm: "2px"
  md: "4px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "64px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "10px 22px"
  button-primary-hover:
    backgroundColor: "{colors.primary-dark}"
    textColor: "{colors.white}"
  button-cta:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "16px 32px"
  button-dark:
    backgroundColor: "{colors.dark}"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "14px 28px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "14px 32px"
  button-ghost-on-dark:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    rounded: "{rounded.sm}"
    padding: "14px 32px"
---

# Design System: Art-Quitrabe

## 1. Overview

**Creative North Star: "El Estudio de Arquitectura"**

El diseño de Art-Quitrabe funciona como el despacho de un buen arquitecto: sin ornamento gratuito, con jerarquía precisa, donde cada elemento tiene razón de estar. La calidad se percibe en la resolución de los detalles, no en la acumulación de efectos. El azul marino profundo (Primary #184690) impone autoridad sin frialdad; el blanco verdadero (#FFFFFF) aporta claridad arquitectónica; el casi-negro (#0D0D14) ancla las secciones de mayor peso editorial.

El sistema rechaza la calidez-por-defecto de los estudios de reformas genéricos (beige, fotos de stock, dorado ostentoso) y también el maximalismo tecnológico (gradientes neón, glassmorphism, cuadrículas de tarjetas idénticas). En cambio, construye confianza mediante proporción, espacio en blanco, y tipografía con criterio. La densidad varía entre secciones: abierta y monumental en el hero, técnica y precisa en las listas de servicios.

La voz visual es la de un profesional que no necesita convencer con decoración: la calidad del trabajo habla desde las imágenes, y el diseño las enmarca sin competir con ellas.

**Key Characteristics:**
- Blanco arquitectónico verdadero como base — no beige, no crema, no papel
- Navy profundo como único acento de marca; su rareza en pantalla es la estrategia
- Tipografía a 800 weight en displays, con tracking negativo: impacto sin ornamento
- Secciones oscuras (#0D0D14) para momentos editoriales de mayor densidad
- Bordes mínimos (2px, `rounded-sm`): sin ángulos redondeados que suavicen la imagen
- Espaciado generoso en white space; sin relleno innecesario de las áreas vacías

## 2. Colors: La Paleta Arquitectónica

Dos polos (navy y casi-negro) sobre fondos blancos y grises casi neutros. Sin acento cálido secundario: el cobre/dorado anterior se elimina por completo.

### Primary
- **Azul Marino Profundo** (`#184690`): El color de marca. Aparece en botones primarios de CTA, en elementos de enfoque (links activos, estados de focus), y en detalles de acento estructural (líneas decorativas cortas). Nunca como fondo de sección completa.
- **Navy Oscuro** (`#0F2D5E`): Estado hover/active del primario. Solo en transiciones de estado; nunca como valor estático visible.
- **Navy Medio** (`#2055A8`): Uso muy limitado: links sobre fondo blanco, estados focus-visible en inputs.

### Neutral
- **Casi-Negro** (`#0D0D14`): Fondo de secciones oscuras (hero overlay, Why Us, Contact, Footer). También color de texto principal sobre fondos blancos.
- **Dark Surface** (`#14141E`): Superficies dentro de secciones oscuras — para crear capas sin un contraste excesivo.
- **Blanco Arquitectónico** (`#FFFFFF`): Fondo de secciones claras (vivienda section, FAQ, proceso). Base del sistema.
- **Gris Superficie** (`#F8F8F8`): Cards y módulos dentro de secciones blancas. Diferenciación mínima de superficie.
- **Tinta Principal** (`#0D0D14`): Texto body sobre fondos blancos/grises. Mismo valor que el dark bg: coherencia total.
- **Tinta Secundaria** (`#4A4A52`): Texto descriptivo, subtítulos, captions. Cuerpo de párrafos secundarios.
- **Tinta Sutil** (`#8A8A94`): Placeholders, estados disabled, texto muted. Verificar contraste AA en cada uso.

### Named Rules
**La Regla del Único Acento.** El primario `#184690` aparece en ≤10% de cualquier pantalla. CTA principal, un detalle de acento, un elemento de navegación activo. Su rareza es precisamente lo que lo hace trabajar. Si aparece en tres sitios distintos de la misma sección, uno sobra.

**La Regla del Blanco Real.** El fondo claro es `#FFFFFF` o `#F8F8F8` — nunca beige, crema, arena, ni cualquier tono cálido. Si la "calidez" es necesaria, entra por la fotografía y el cobre de los proyectos reales, no por el fondo.

## 3. Typography

**Display Font:** Plus Jakarta Sans (system-ui, sans-serif)
**Body Font:** Plus Jakarta Sans (misma familia, distintos pesos)

**Carácter:** Sistema mono-familiar con diferenciación por peso — de 800 en displays a 400 en body. La consistencia de familia produce cohesión; el rango de peso (800→400) produce jerarquía suficiente sin necesidad de una segunda familia. Plus Jakarta Sans tiene proporciones geométricas con humanismo en las terminaciones: funciona bien tanto en titulares grandes como en UI compacta.

### Hierarchy
- **Display** (800, `clamp(46px, 6vw, 88px)`, line-height 0.97, tracking -0.02em): Exclusivamente para el H1 del hero. Una sola instancia por página. `text-wrap: balance` aplicado.
- **Headline** (700, `clamp(28px, 3vw, 48px)`, line-height 1.1, tracking -0.02em): Títulos de sección (H2). Introduce cada bloque editorial principal. `text-wrap: balance` aplicado.
- **Title** (700, 17px, line-height 1.3): H3 dentro de secciones. Cabeceras de cards de servicio, pasos de proceso.
- **Body** (400–500, 15–16px, line-height 1.65): Texto descriptivo, párrafos de apoyo. Máximo 65ch de longitud. Color `ink-muted` (#4A4A52) sobre fondos claros.
- **Label** (600, 10px, tracking 0.15em, ALL-CAPS): Etiquetas de sección ("PARA PROPIETARIOS", "METODOLOGÍA"). Uso muy selectivo — máximo una por sección visible, no como eyebrow automático de cada bloque.

### Named Rules
**La Regla del Solo Display.** `clamp(46px, 6vw, 88px)` a weight 800 aparece una única vez por página: el H1. Duplicar esa escala en otras secciones destruye la jerarquía y devalúa el impacto del hero.

**La Regla del Label Escaso.** El label en versalitas (`text-[10px] tracking-[0.15em] uppercase`) es un dispositivo de orientación, no de decoración. Si cada sección tiene uno idéntico, pierde función. Usar con criterio o prescindir de él: es preferible no tenerlo a tenerlo en cada bloque.

## 4. Elevation

Sistema plano por defecto con profundidad por tono y borde, no por sombra. Las secciones oscuras (#0D0D14) y claras (#FFFFFF) ya producen contraste estructural suficiente. No se usan `box-shadow` decorativos en condición de reposo.

**Flat-By-Default.** Las superficies están en el mismo plano hasta que una interacción las mueve. Borders de 1px en `#0D0D14/10` separan cards sobre fondo blanco. Sobre fondos oscuros, los borders son en `#FFFFFF/10`.

**Hover como único escalado.** Un borde en navy (#184690) al hacer hover sobre una card, o una escala de imagen (scale-105) en thumbnails: el movimiento señala interactividad, no decora la condición de reposo.

### Named Rules
**La Regla Sin Sombra.** Si se puede resolver con borde o color de fondo, se resuelve con borde o color de fondo. Sombras solo en contextos de superposición real (dropdown, modal, toast) — donde el elemento literalmente flota sobre otro.

## 5. Components

### Buttons

Shape: esquinas mínimas (2px, `rounded-sm`). Nunca `rounded-full` ni `rounded-lg`. El ángulo recto es parte del lenguaje arquitectónico del sistema.

- **Primary CTA** (navy #184690, text white, padding 16px 32px): Acción principal de conversión. Máximo uno por sección visible. En fondos oscuros, añadir `outline: 2px solid rgba(255,255,255,0.25)` para separación visual del dark bg sin romper el color.
- **Dark Button** (bg #0D0D14, text white, padding 14px 28px): Acción secundaria de peso sobre fondos claros. Navegar a una sección, abrir un formulario.
- **Ghost** (fondo transparent, borde `rgba(255,255,255,0.25)`, text white): Solo sobre fondos oscuros. Acción alternativa junto al CTA principal.
- **Hover:** Todos los botones sólidos oscurecen 10% su color de fondo. Transition `150ms ease-out`.
- **Focus-visible:** `outline: 2px solid #184690; outline-offset: 3px` sobre fondos claros. `outline: 2px solid #FFFFFF; outline-offset: 3px` sobre fondos oscuros.

### Cards / Containers

- **Corner Style:** 2px (`rounded-sm`). Sin radio mayor.
- **Background (sobre fondo blanco):** `#F8F8F8`. Borde `1px solid rgba(13,13,20,0.10)`.
- **Background (sobre fondo oscuro):** `rgba(255,255,255,0.05)`. Borde `1px solid rgba(255,255,255,0.08)`.
- **Hover state:** borde en `#184690` a 40% opacidad. `transition: border-color 200ms ease-out`.
- **Shadow:** ninguna en reposo.
- **Internal Padding:** 20px (`p-5`). No inferior.
- **Nested cards:** prohibido. Una card dentro de otra siempre es un problema de arquitectura de información.

### Inputs / Fields

- **Style:** fondo `rgba(255,255,255,0.05)` sobre secciones oscuras; fondo `#FFFFFF` con borde `1px solid rgba(13,13,20,0.15)` sobre secciones claras.
- **Radius:** 2px (`rounded-sm`).
- **Focus:** `border-color: #184690` a 60% opacidad; transición `150ms ease-out`. Sin glow ni shadow adicional.
- **Placeholder:** color `#8A8A94`. Contraste ≥4.5:1 verificado contra fondo.
- **Error:** borde `#B91C1C`; mensaje de error en body 13px bajo el campo.
- **Disabled:** opacidad 0.5; cursor `not-allowed`.

### Navigation

- **Style:** fija en top, `position: fixed`. Fondo transparent sobre hero (sección oscura); transición a `#0D0D14/95 backdrop-blur-sm` al hacer scroll >80px.
- **Logo:** imagen con `filter: brightness(0) invert(1)` sobre secciones oscuras; adaptar si el fondo claro es el canvas del nav.
- **Links:** 14px, weight 500, `rgba(255,255,255,0.80)`. Hover a `#FFFFFF`. Transición `150ms`.
- **CTA:** botón primary navy (ver Buttons). Único en el nav; no usar botón dark en nav.
- **Mobile:** hamburger con tres barras (`h-0.5`). El menú desplegable usa `#0D0D14/98` como fondo.

### Image Overlay Cards (Services Overview)

Componente propio: imagen de fondo con gradiente oscuro `to top`, texto sobre el overlay. Las proporciones mínimas de imagen son 480px de altura. El `hover` produce `scale(1.05)` en la imagen con `transition: transform 700ms ease-out`. El texto no se mueve. Esta es la tarjeta de más peso visual del sistema y aparece en la sección de resumen de servicios.

### FAQ Accordion

Fondo de sección `#FFFFFF` o `#F8F8F8`. Divisores `1px solid rgba(13,13,20,0.10)`. La pregunta es en body-title (16px, 600). El `+` es en display (22px, weight 300, color primario navy). Al abrir, el `+` rota 45° (`transition: transform 200ms ease-out`). La respuesta aparece con height animation si el framework lo permite; sin animación, fade-in por opacidad.

## 6. Do's and Don'ts

### Do:
- **Do** usar `#FFFFFF` o `#F8F8F8` como fondo claro. Nunca beige, crema, arena, ni warmth-tinted neutrals. La calidez entra solo por imagen y fotografía.
- **Do** reservar `#184690` para CTAs principales y detalles de acento. Máximo dos o tres apariciones en cualquier viewport visible.
- **Do** verificar contraste ≥4.5:1 en todo texto de cuerpo. El navy sobre blanco da 8.7:1 ✓; el `ink-muted` (#4A4A52) sobre blanco da 6.8:1 ✓; el `ink-subtle` (#8A8A94) da 3.3:1 — solo aceptable en texto ≥18px o bold ≥14px.
- **Do** usar `text-wrap: balance` en H1–H3 para evitar líneas viudas en titulares.
- **Do** añadir `outline: 2px solid rgba(255,255,255,0.25)` a botones navy sobre fondos oscuros para asegurar separación visual sin cambiar el color.
- **Do** usar el label en versalitas (10px, tracking 0.15em) con criterio: máximo uno por sección, solo cuando orienta realmente al usuario.
- **Do** dejar los bordes en 2px `rounded-sm`. El ángulo casi-recto comunica precisión técnica.

### Don't:
- **Don't** usar beige, crema, #F4F1EB, #FDFAF5 ni ninguna variante warm-tinted como fondo de sección. Este fue el sistema anterior; el nuevo es blanco real.
- **Don't** usar `#C08A56` (el dorado anterior) en ningún contexto. Ha sido reemplazado por navy. El gold-on-dark como acento de marca queda eliminado del sistema.
- **Don't** poner eyebrows de versalitas en cada sección por defecto. Es el patrón de scaffolding de IA más saturado de 2024–2025. Si cada sección tiene uno, ninguno funciona.
- **Don't** numerar elementos (01, 02, 03) salvo cuando el orden es semánticamente importante (un proceso de 4 pasos reales, por ejemplo). Números decorativos en grids de features o en cards de servicios son scaffolding automático.
- **Don't** hacer gradientes de texto (`background-clip: text`). Prohibido en cualquier contexto.
- **Don't** usar `border-left > 1px` como stripe de acento en cards o callouts. Es un patrón de diseño genérico sin criterio.
- **Don't** aplicar sombras decorativas en reposo. Solo en superposición real (dropdowns, modals).
- **Don't** usar tarjetas idénticas en grid para mostrar features de servicio. Variar la densidad, orientación o peso visual entre secciones.
- **Don't** hacer que el sitio parezca una empresa constructora genérica (fondos blancos sin criterio, fotos de stock), lujo ostentoso (serif dramático, dorado masivo), startup SaaS (neon, glassmorphism), ni catálogo de gran superficie (colorido, masivo, orientado a precio). Estos son los cuatro anti-perfiles explícitos del brief.
