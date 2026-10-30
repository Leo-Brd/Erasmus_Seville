const paths = {
  home: (<><path d="M3 11l9-7 9 7" /><path d="M5 10v10h14V10" /><path d="M10 20v-6h4v6" /></>),
  food: (<><path d="M7 3v8M5 3v5a2 2 0 0 0 4 0V3M7 11v10" /><path d="M17 3c-2 2-3 5-3 8h3v10" /></>),
  school: (<><path d="M2 9l10-5 10 5-10 5z" /><path d="M6 11v5c3 2.5 9 2.5 12 0v-5" /><path d="M22 9v6" /></>),
  people: (<><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20c0-3.5 2.5-6 6-6s6 2.5 6 6" /><path d="M15.5 14.5c3 0 5.5 1.5 5.5 5.5" /></>),
  ball: (<><circle cx="12" cy="12" r="9" /><path d="M12 3v18M3 12h18" /><path d="M5.5 5.5c4 3 9 3 13 0M5.5 18.5c4-3 9-3 13 0" /></>),
  ticket: (<><path d="M3 7h18v3a2 2 0 0 0 0 4v3H3v-3a2 2 0 0 0 0-4z" /><path d="M14 7v10" strokeDasharray="2 2" /></>),
  bus: (<><rect x="4" y="3" width="16" height="14" rx="3" /><path d="M4 11h16" /><circle cx="8" cy="14" r=".6" /><circle cx="16" cy="14" r=".6" /><path d="M6 17v3M18 17v3" /></>),
  speech: (<><path d="M4 5h16v11H10l-5 4v-4H4z" /><path d="M8 9h8M8 12h5" /></>),
  coin: (<><circle cx="12" cy="12" r="9" /><path d="M15 9.5c-.5-1-1.5-1.5-3-1.5-1.8 0-3 1-3 2.3 0 3 6 1.5 6 4.4 0 1.3-1.2 2.3-3 2.3-1.5 0-2.7-.6-3.2-1.7M12 5.5V7M12 17v1.5" /></>),
  weather: (<><circle cx="9" cy="9" r="3.5" /><path d="M9 2.5V4M2.5 9H4M4.4 4.4l1 1M13.6 4.4l-1 1" /><path d="M8 20h9a3.5 3.5 0 0 0 .5-7 5 5 0 0 0-9.5 1A3 3 0 0 0 8 20z" /></>),
  tower: (<><path d="M9 21V9l3-5 3 5v12" /><path d="M7 21h10M12 4V2M10.5 13h3M10.5 17h3" /></>),
  glass: (<><path d="M5 4h14l-7 9z" /><path d="M12 13v7M8 20h8" /></>),
  suitcase: (<><rect x="4" y="7" width="16" height="13" rx="2" /><path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M4 13h16" /></>),
  church: (<><path d="M12 2v5M10 4h4" /><path d="M6 21V12l6-5 6 5v9z" /><path d="M10 21v-5a2 2 0 0 1 4 0v5" /></>),
  tree: (<><circle cx="12" cy="9" r="6" /><path d="M12 15v6M9 21h6" /></>),
  cup: (<><path d="M4 8h13v6a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z" /><path d="M17 10h2a2 2 0 0 1 0 4h-2" /><path d="M8 3v2M12 3v2" /></>),
  bag: (<><path d="M5 8h14l-1 12H6z" /><path d="M9 8V6a3 3 0 0 1 6 0v2" /></>),
  star: (<path d="M12 3l2.6 5.6 6.4.7-4.5 4.2 1.2 6.2L12 16.7 6.3 19.7l1.2-6.2L3 9.3l6.4-.7z" />),
  pin: (<><path d="M12 21s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z" /><circle cx="12" cy="9" r="2.5" /></>),
  map: (<><path d="M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z" /><path d="M9 4v14M15 6v14" /></>),
  calendar: (<><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></>),
  chat: (<><path d="M4 5h16v11H10l-5 4v-4H4z" /></>),
  guitar: (<><path d="M14 10l6-6M17 3l4 4" /><path d="M13.5 10.5c-2-2-5-1.5-6.5.5-1 1.3-1 2-2.5 2.5C3 14 2.5 16.5 4 18.5s4.5 2.5 6 .5c.5-1.5 1.2-1.5 2.5-2.5 2-1.5 2.5-4.5 1-6z" /><circle cx="8.5" cy="15.5" r="1" /></>),
  clapper: (<><path d="M3 9h18v11H3z" /><path d="M3 9l1.5-4.5 15 3L19 9" /><path d="M8 5.5L7 9M13 6.5L12 10M18 7.5L17 11" /></>),
  lights: (<><path d="M3 5c4 4 14 4 18 0" /><path d="M7 8.5v3M12 9.5v3M17 8.5v3" /><circle cx="7" cy="14" r="2" /><circle cx="12" cy="15" r="2" /><circle cx="17" cy="14" r="2" /></>),
  bell: (<><path d="M6 17v-6a6 6 0 0 1 12 0v6l2 2H4z" /><path d="M10 21h4" /></>),
  crown: (<><path d="M3 8l4 4 5-7 5 7 4-4-2 11H5z" /></>),
  flag: (<><path d="M5 21V3" /><path d="M5 4h14l-3 4 3 4H5" /></>),
  mask: (<><path d="M3 6c5-2 13-2 18 0 0 7-3 12-9 12S3 13 3 6z" /><path d="M7 10c1-1 2.5-1 3.5 0M13.5 10c1-1 2.5-1 3.5 0" /><path d="M9 14c1.5 1.5 4.5 1.5 6 0" /></>),
  candle: (<><path d="M12 2c2 2 2 4 0 5-2-1-2-3 0-5z" /><rect x="9" y="9" width="6" height="12" rx="1" /><path d="M6 21h12" /></>),
  tent: (<><path d="M3 20l9-15 9 15z" /><path d="M12 5v15" /><path d="M9 20l3-7 3 7" /></>),
  cross: (<><path d="M12 3v14M6 9h12" /><circle cx="12" cy="9" r="2" /><circle cx="7" cy="20" r="1.5" /><circle cx="12" cy="20" r="1.5" /><circle cx="17" cy="20" r="1.5" /></>),
  wheel: (<><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="2" /><path d="M12 3v7M12 14v7M3 12h7M14 12h7M5.6 5.6l5 5M13.4 13.4l5 5M18.4 5.6l-5 5M10.6 13.4l-5 5" /></>),
  monstrance: (<><circle cx="12" cy="9" r="3.5" /><path d="M12 2v2M12 14v2M5 9H3M21 9h-2M7 4l1.2 1.2M17 4l-1.2 1.2M7 14l1.2-1.2M17 14l-1.2-1.2" /><path d="M12 16v3M8 21h8M9 19h6" /></>),
  firework: (<><path d="M12 3v5M12 16v5M3 12h5M16 12h5M5.6 5.6l3.5 3.5M14.9 14.9l3.5 3.5M18.4 5.6l-3.5 3.5M9.1 14.9l-3.5 3.5" /></>),
  camera: (<><path d="M4 8h3l2-3h6l2 3h3v11H4z" /><circle cx="12" cy="13" r="3.5" /></>),
  menu: (<path d="M4 7h16M4 12h16M4 17h16" />),
  close: (<path d="M6 6l12 12M18 6L6 18" />),
  plus: (<path d="M12 5v14M5 12h14" />),
  chevron: (<path d="M6 9l6 6 6-6" />),
  instagram: (<><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" /></>),
  globe: (<><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></>),
  check: (<path d="M5 12l5 5 9-10" />),
}

export default function Icon({ name, size = 24, className = '', title }) {
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      role={title ? 'img' : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {paths[name] ?? paths.star}
    </svg>
  )
}
