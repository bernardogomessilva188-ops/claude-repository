/**
 * Ícones em SVG inline.
 *
 * Nada de biblioteca de ícones: são poucos ícones, e inline eles não custam
 * nenhuma requisição extra nem KB de JavaScript no bundle.
 * Todos herdam a cor do texto (`currentColor`) e o tamanho via classe.
 */

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
}

export function IconDroplet(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3.2 6.8 9.6a6.6 6.6 0 1 0 10.4 0L12 3.2Z" />
      <path d="M9.4 13.6a2.9 2.9 0 0 0 2.9 2.9" />
    </svg>
  )
}

export function IconRazor(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 3v6a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3V3" />
      <path d="M8 12v9" />
      <path d="M14.5 7h5.5" />
      <path d="M15.5 11h4.5" />
      <path d="M16.5 15h3.5" />
    </svg>
  )
}

export function IconDumbbell(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3.5 9v6" />
      <path d="M6.5 7v10" />
      <path d="M17.5 7v10" />
      <path d="M20.5 9v6" />
      <path d="M6.5 12h11" />
    </svg>
  )
}

export function IconBrain(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 5.5a3 3 0 0 0-5.7-1.3A2.8 2.8 0 0 0 4 9a3 3 0 0 0 .7 4.8A3 3 0 0 0 7 19a3 3 0 0 0 5 1.4Z" />
      <path d="M12 5.5A3 3 0 0 1 17.7 4.2 2.8 2.8 0 0 1 20 9a3 3 0 0 1-.7 4.8A3 3 0 0 1 17 19a3 3 0 0 1-5 1.4Z" />
      <path d="M12 5.5v14.9" />
    </svg>
  )
}

export function IconShirt(props) {
  return (
    <svg {...base} {...props}>
      <path d="M8.5 3.5 5 5.2 3.2 9.4l3 1.4V20a1 1 0 0 0 1 1h9.6a1 1 0 0 0 1-1v-9.2l3-1.4L19 5.2l-3.5-1.7a3.6 3.6 0 0 1-7 0Z" />
    </svg>
  )
}

export function IconCalendarCheck(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.2" y="5" width="17.6" height="16" rx="2.2" />
      <path d="M3.2 10h17.6" />
      <path d="M8 3v4M16 3v4" />
      <path d="m9 15.4 2 2 4-4" />
    </svg>
  )
}

export function IconCheck(props) {
  return (
    <svg {...base} {...props}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  )
}

export function IconArrowRight(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 12h16" />
      <path d="m14 6 6 6-6 6" />
    </svg>
  )
}

export function IconShield(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.8 4.5 6v6c0 4.6 3.1 8 7.5 9.2 4.4-1.2 7.5-4.6 7.5-9.2V6L12 2.8Z" />
      <path d="m8.8 12 2.2 2.2 4.2-4.4" />
    </svg>
  )
}

export function IconStar(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="m12 2.8 2.7 5.9 6.4.7-4.8 4.3 1.3 6.3L12 16.8l-5.6 3.2 1.3-6.3L2.9 9.4l6.4-.7L12 2.8Z" />
    </svg>
  )
}

export function IconPlus(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

export function IconMenu(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  )
}

export function IconClose(props) {
  return (
    <svg {...base} {...props}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  )
}

export function IconClock(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.3l3.2 2" />
    </svg>
  )
}

export function IconLock(props) {
  return (
    <svg {...base} {...props}>
      <rect x="4.5" y="10" width="15" height="10.5" rx="2" />
      <path d="M8 10V7.5a4 4 0 0 1 8 0V10" />
    </svg>
  )
}

export function IconBolt(props) {
  return (
    <svg {...base} {...props}>
      <path d="M13.2 2.5 4.8 13.2h6L10 21.5l9-10.8h-6.4l.6-8.2Z" />
    </svg>
  )
}

export function IconInstagram(props) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" />
    </svg>
  )
}

export function IconTiktok(props) {
  return (
    <svg {...base} {...props}>
      <path d="M14.2 3v10.9a3.6 3.6 0 1 1-3.6-3.6" />
      <path d="M14.2 3c.4 2.6 2 4.2 4.6 4.4" />
    </svg>
  )
}

export function IconYoutube(props) {
  return (
    <svg {...base} {...props}>
      <rect x="2.8" y="5.5" width="18.4" height="13" rx="4" />
      <path d="m10.4 9.5 4.6 2.5-4.6 2.5V9.5Z" />
    </svg>
  )
}
