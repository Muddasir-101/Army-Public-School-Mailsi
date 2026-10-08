import type { ReactNode } from "react";

type IconName =
  | "bell" | "search" | "play" | "file" | "bookmark" | "chart" | "clock"
  | "user" | "chevron" | "check" | "lock" | "eye" | "grid" | "target"
  | "accessible" | "external" | "download" | "book";

const paths: Record<IconName, ReactNode> = {
  bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M10 21h4" /></>,
  search: <><circle cx="11" cy="11" r="7" /><path d="m20 20-4-4" /></>,
  play: <><circle cx="12" cy="12" r="9" /><path d="m10 8 6 4-6 4z" /></>,
  file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M8 13h8M8 17h8" /></>,
  bookmark: <path d="M6 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18l-6-4-6 4z" />,
  chart: <><path d="M5 20v-5M12 20V9M19 20V4" /><path d="M3 20h18" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  chevron: <path d="m9 18 6-6-6-6" />,
  check: <path d="m5 12 4 4L19 6" />,
  lock: <><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 4v3" /></>,
  eye: <><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Z" /><circle cx="12" cy="12" r="3" /></>,
  grid: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
  target: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /><path d="m14 10 7-7" /></>,
  accessible: <><circle cx="12" cy="4" r="2" /><path d="M4 8h16M12 8v5m0 0-4 8m4-8 4 8M7 12l5 2 5-2" /></>,
  external: <><path d="M14 3h7v7M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></>,
  download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" /></>,
  book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" /></>,
};

function Icon({ name, filled = false, size = 18 }: { name: IconName; filled?: boolean; size?: number }) {
  return (
    <svg aria-hidden="true" className={filled ? "icon icon-filled" : "icon"} width={size} height={size} viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" focusable="false">
      {paths[name]}
    </svg>
  );
}

function BrandMark({ small = false }: { small?: boolean }) {
  return (
    <svg aria-hidden="true" className={small ? "brand-mark brand-mark-small" : "brand-mark"} viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="46" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="50" cy="50" r="40" stroke="currentColor" />
      <path d="M50 74V36c-9-12-20-11-26-9v37c11-3 19 1 26 10Z" fill="#0F9D58" />
      <path d="M50 74V36c9-12 20-11 26-9v37c-11-3-19 1-26 10Z" fill="#0B7A3D" />
      <path d="M50 36v39M24 29c7-3 15-1 22 5m30-5c-7-3-15-1-22 5M29 70c8-2 15 0 21 6m21-6c-8-2-15 0-21 6" stroke="white" strokeWidth="1.4" />
    </svg>
  );
}

function SectionTitle({ number, children }: { number: string; children: ReactNode }) {
  return <h2 className="section-title"><span>{number}</span>{children}</h2>;
}

const primary = [
  ["Primary 600", "#0B7A3D"], ["Primary 500", "#0F9D58"], ["Primary 400", "#40B97A"],
  ["Primary 300", "#7ED3A5"], ["Primary 200", "#A6E6C9"], ["Primary 100", "#EAF8F0"],
];
const neutral = [
  ["Neutral 900", "#0F172A"], ["Neutral 700", "#334155"], ["Neutral 500", "#64748B"],
  ["Neutral 300", "#CBD5E1"], ["Neutral 200", "#E2E8F0"], ["Neutral 100", "#F1F5F9"],
  ["Neutral 50", "#FAFAFC"], ["White", "#FFFFFF"],
];
const scale = [
  ["Display 1", "Playfair Display", "48 / 56", "Bold", "Page titles", "display-one"],
  ["Display 2", "Playfair Display", "36 / 44", "Bold", "Section titles", "display-two"],
  ["Heading 1", "Inter", "28 / 36", "Semi Bold", "Card titles", "heading-one"],
  ["Heading 2", "Inter", "22 / 30", "Semi Bold", "Sub section", "heading-two"],
  ["Heading 3", "Inter", "18 / 26", "Medium", "Small titles", "heading-three"],
  ["Body Large", "Inter", "16 / 24", "Regular", "Body copy", "body-large"],
  ["Body", "Inter", "14 / 20", "Regular", "Supporting text", "body-sample"],
  ["Small", "Inter", "12 / 16", "Regular", "Captions, meta", "small-sample"],
];

function IntroPanel() {
  return (
    <section className="panel intro-panel">
      <div className="brand-lockup"><BrandMark /><p className="brand-name">Army Public<br />Schools &amp; Colleges<br /><span>(APSACS)</span></p></div>
      <p className="intro-copy">A unified design language for Army Public Schools &amp; Colleges System, clean, modern and focused on clarity, consistency and intuitive learning experiences.</p>
      <p className="version">VERSION 1.0 <span>•</span> MAY 2025</p>
    </section>
  );
}

function ColorsPanel() {
  return (
    <section className="panel colors-panel">
      <SectionTitle number="01">Colors</SectionTitle>
      <p className="group-label">Primary</p>
      <div className="swatch-grid">{primary.map(([name, hex]) => <div className="swatch" key={name}><div className="swatch-color" style={{ backgroundColor: hex }} /><span className="swatch-name">{name}</span><code>{hex}</code></div>)}</div>
      <p className="group-label neutral-label">Neutral</p>
      <div className="swatch-grid">{neutral.map(([name, hex]) => <div className="swatch" key={name}><div className="swatch-color" style={{ backgroundColor: hex }} /><span className="swatch-name">{name}</span><code>{hex}</code></div>)}</div>
    </section>
  );
}

function TypographyPanel() {
  return (
    <section className="panel typography-panel">
      <SectionTitle number="02">Typography</SectionTitle>
      <div className="font-sample"><span className="font-glyph display-font">Ag</span><div><h3 className="playfair-name">Playfair Display</h3><p>Elegant <i /> Readable <i /> Timeless</p></div></div>
      <div className="font-sample"><span className="font-glyph sans-glyph">Ag</span><div><h3 className="inter-name">Inter</h3><p>Clean <i /> Modern <i /> Highly legible</p></div></div>
    </section>
  );
}

function TypeScalePanel() {
  return (
    <section className="panel type-scale-panel">
      <SectionTitle number="03">Type Scale</SectionTitle>
      <div className="type-table" role="table" aria-label="Typography scale">
        <div className="type-table-row type-table-head" role="row"><span role="columnheader">Style</span><span role="columnheader">Font</span><span role="columnheader">Size / Line Height</span><span role="columnheader">Weight</span><span role="columnheader">Use</span></div>
        {scale.map(([style, font, size, weight, use, className]) => <div className="type-table-row" role="row" key={style}><span className={className} role="cell">{style}</span><span role="cell">{font}</span><span role="cell">{size}</span><span role="cell">{weight}</span><span role="cell">{use}</span></div>)}
      </div>
    </section>
  );
}

function SpacingPanel() {
  return (
    <section className="panel spacing-panel">
      <SectionTitle number="04">Spacing System</SectionTitle>
      <p className="group-label">Base unit: 4px</p>
      <div className="spacing-grid">{[4, 8, 12, 16, 24, 32, 40, 48, 64].map((n) => <div className="spacing-item" key={n}><div className="spacing-sample" style={{ width: n, height: n }} /><strong>{n}</strong><span>({n / 16}rem)</span></div>)}</div>
    </section>
  );
}

function RadiusPanel() {
  const values = [["4px", "(xs)", "radius-xs"], ["8px", "(sm)", "radius-sm"], ["12px", "(md)", "radius-md"], ["16px", "(lg)", "radius-lg"], ["24px", "(xl)", "radius-xl"], ["Full", "(circle)", "radius-full"]];
  const shadows = ["0 1px 2px 0", "0 4px 12px -2px", "0 12px 24px -4px", "0 20px 40px -8px"];
  const shadowAlphas = ["0.05", "0.08", "0.12", "0.16"];
  return (
    <section className="panel radius-panel">
      <SectionTitle number="05">Radius &amp; Shadows</SectionTitle>
      <p className="group-label">Radius</p>
      <div className="radius-grid">{values.map(([name, note, shape]) => <div className="radius-item" key={name}><div className={`radius-sample ${shape}`} /><span>{name}</span><small>{note}</small></div>)}</div>
      <p className="group-label shadows-label">Shadows</p>
      <div className="shadow-grid">{["Sm", "Md", "Lg", "Xl"].map((name, i) => <div className={`shadow-sample shadow-${i + 1}`} key={name}><strong>{name}</strong><span>{shadows[i]}</span><small>rgba(0, 0, 0, {shadowAlphas[i]})</small></div>)}</div>
    </section>
  );
}

const iconNames: IconName[] = ["bell", "search", "play", "file", "bookmark", "chart", "clock", "user", "chevron"];
function IconsPanel() {
  return (
    <section className="panel icons-panel">
      <SectionTitle number="06">Icons</SectionTitle>
      <p className="group-label">Outline Style</p><div className="icon-row">{iconNames.map((name) => <Icon name={name} key={name} />)}</div>
      <p className="group-label filled-label">Filled Style</p><div className="icon-row">{iconNames.map((name) => <Icon name={name} filled key={name} />)}</div>
      <p className="group-label icon-spec-label">Icon Specs</p><ul className="compact-list"><li>24×24px grid</li><li>2px stroke width (outline)</li><li>Rounded line caps</li><li>Consistent optical balance</li></ul>
    </section>
  );
}

function ButtonsPanel() {
  const variants = ["Primary", "Secondary", "Tertiary", "Text"];
  return (
    <section className="panel buttons-panel">
      <SectionTitle number="07">Buttons</SectionTitle>
      <div className="button-matrix"><span />{variants.map((label) => <span className="variant-heading" key={label}>{label}</span>)}
        <span className="state-label">Default</span><button className="button button-primary" type="button">Get Started</button><button className="button button-secondary" type="button">Explore Courses</button><button className="button button-tertiary" type="button">View Lesson <Icon name="external" size={14} /></button><button className="button button-text" type="button">Watch Video <Icon name="play" size={14} /></button>
        <span className="state-label">Hover</span><button className="button button-primary button-hover" type="button">Get Started</button><button className="button button-secondary button-hover" type="button">Explore Courses</button><button className="button button-tertiary button-hover" type="button">View Lesson <Icon name="external" size={14} /></button><button className="button button-text button-hover" type="button">Watch Video <Icon name="play" size={14} /></button>
        <span className="state-label">Disabled</span><button className="button button-primary" type="button" disabled>Get Started</button><button className="button button-secondary" type="button" disabled>Explore Courses</button><button className="button button-tertiary" type="button" disabled>View Lesson <Icon name="external" size={14} /></button><button className="button button-text" type="button" disabled>Watch Video <Icon name="play" size={14} /></button>
      </div>
      <p className="group-label button-spec-label">Button Specs</p><ul className="compact-list button-specs"><li>Height: 44px (default)</li><li>Padding: 0 16px (xs), 0 12px (md)</li><li>Radius: 12px</li><li>Font: Inter Medium (14–16px)</li></ul>
    </section>
  );
}

function InputsPanel() {
  return (
    <section className="panel inputs-panel">
      <SectionTitle number="08">Inputs</SectionTitle>
      <label className="group-label input-label" htmlFor="sample-search">Search / Text Input</label>
      <div className="search-field"><Icon name="search" /><input id="sample-search" type="search" placeholder="Search anything..." /><kbd>⌘ K</kbd></div>
      <label className="group-label select-label" htmlFor="sample-sort">Select</label>
      <select id="sample-sort" defaultValue="relevant"><option value="relevant">Most Relevant</option><option value="recent">Recently Added</option></select>
      <p className="group-label field-spec-label">Field Specs</p><ul className="compact-list"><li>Height: 44px</li><li>Radius: 12px</li><li>Border: 1px solid #D1FAE5</li><li>Padding: 0 16px</li><li>Focus: Border color #0F9D58</li></ul>
    </section>
  );
}

function BadgesPanel() {
  return <section className="panel badges-panel"><SectionTitle number="09">Badges / Tags</SectionTitle><div className="badge-grid">{[["Video", "VIDEO"], ["Lesson", "LESSON"], ["Popular", "POPULAR"]].map(([label, tag]) => <div className="badge-example" key={label}><span>{label}</span><strong>{tag}</strong></div>)}</div></section>;
}

function StatusPanel() {
  const items: [IconName, string, string][] = [["clock", "In Progress", "status-progress"], ["check", "Completed", "status-completed"], ["play", "Now Playing", "status-playing"], ["lock", "Locked", "status-locked"]];
  return <section className="panel status-panel"><SectionTitle number="10">Status / Indicators</SectionTitle><div className="status-row">{items.map(([icon, label, className]) => <span className={`status-item ${className}`} key={label}><Icon name={icon} size={16} />{label}</span>)}</div></section>;
}

function ProgressPanel() {
  return <section className="panel progress-panel"><SectionTitle number="11">Progress Bar</SectionTitle><div className="progress-content"><div className="progress-track" role="progressbar" aria-label="Course progress" aria-valuenow={55} aria-valuemin={0} aria-valuemax={100}><span /></div><span>35% complete</span></div></section>;
}

function CardsPanel() {
  return (
    <section className="panel cards-panel">
      <SectionTitle number="12">Cards</SectionTitle>
      <div className="cards-grid">
        <article className="learning-card course-card"><div className="course-card-top"><div className="next-mark">N</div><div><h3>Next.js for Production</h3><p>Build scalable, high-performance web applications with Next.js.</p></div></div><div className="card-meta"><span><Icon name="chart" size={14} /> Intermediate</span><span><Icon name="clock" size={14} /> 18h 24m</span><span><Icon name="book" size={14} /> 12 modules</span></div></article>
        <article className="learning-card detail-card"><span className="badge">VIDEO</span><h3>Data Fetching in Server Components</h3><p>Learn how to fetch data on the server using async/await and Next.js best practices.</p><div className="card-footer"><span>Lesson 5.1 <i /> 12:45</span><span className="watch-link"><Icon name="play" size={14} /> Watch from 12:45</span></div></article>
        <article className="learning-card detail-card"><span className="badge">LESSON</span><h3>Data Fetching &amp; Caching</h3><p>Explore different data fetching methods in Next.js and how to cache and revalidate data for optimal performance.</p><div className="card-footer"><span>Module 5</span><span className="watch-link">View lesson <Icon name="external" size={13} /></span></div></article>
        <article className="learning-card detail-card"><span className="resource-tag">Resource</span><h3>Caching and Revalidation Guide</h3><p>Design dive into Next.js caching strategies.</p><div className="card-footer"><span>PDF <i /> 1.2 MB</span><span className="download-icon" aria-label="Download resource"><Icon name="download" size={16} /></span></div></article>
      </div>
    </section>
  );
}

function NavigationPanel() {
  return (
    <section className="panel navigation-panel">
      <SectionTitle number="13">Navigation</SectionTitle>
      <div className="navigation-examples">
        <div className="brand-nav"><BrandMark small /><strong>APSACS</strong></div>
        <nav className="main-nav" aria-label="Example primary navigation"><a href="#cards" className="nav-active">Courses</a><a href="#progress">My Learning</a></nav>
        <nav className="breadcrumbs" aria-label="Example breadcrumb"><a href="#cards">All Courses</a><Icon name="chevron" size={12} /><a href="#cards">Next.js for Production</a><Icon name="chevron" size={12} /><span>Data Fetching &amp; Caching</span></nav>
        <nav className="pagination" aria-label="Example pagination"><button type="button" aria-label="Previous page"><Icon name="chevron" size={15} /></button>{[1, 2, 3].map((n) => <button className={n === 1 ? "page-current" : ""} type="button" key={n} aria-current={n === 1 ? "page" : undefined}>{n}</button>)}<span>…</span><button type="button">8</button><button type="button" aria-label="Next page"><Icon name="chevron" size={15} /></button></nav>
      </div>
    </section>
  );
}

const principles: [IconName, string, string][] = [
  ["eye", "Clarity First", "Every element should communicate clearly."],
  ["grid", "Consistency", "Use components and patterns consistently across the platform."],
  ["target", "Focus & Calm", "Remove noise and help learners focus on what matters."],
  ["accessible", "Accessible", "Design with accessibility and inclusivity in mind."],
];

function PrinciplesPanel() {
  return <section className="panel principles-panel"><SectionTitle number="14">Principles</SectionTitle><div className="principles-grid">{principles.map(([icon, title, text]) => <article className="principle" key={title}><Icon name={icon} size={28} /><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>;
}

export default function DesignSystemShowcase() {
  return (
    <main className="design-page">
      <div className="design-board">
        <div className="top-grid"><IntroPanel /><ColorsPanel /></div>
        <div className="type-grid"><TypographyPanel /><TypeScalePanel /></div>
        <div className="layout-grid"><SpacingPanel /><RadiusPanel /></div>
        <div className="component-grid"><IconsPanel /><ButtonsPanel /><InputsPanel /></div>
        <div className="status-grid" id="progress"><BadgesPanel /><StatusPanel /><ProgressPanel /></div>
        <div id="cards"><CardsPanel /></div>
        <NavigationPanel />
        <PrinciplesPanel />
        <footer className="board-footer"><span>APSACS DESIGN SYSTEM</span><span>CLARITY · CONSISTENCY · ACCESSIBILITY</span></footer>
      </div>
    </main>
  );
}
