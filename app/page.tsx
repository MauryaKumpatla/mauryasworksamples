"use client";

import Link from 'next/link';

export default function Home() {
  const titleFont = "var(--font-supria), sans-serif";

  const buttons: { label: string; href?: string; external?: boolean }[] = [
    { label: 'Player Analysis', href: '/player-analysis' },
    { label: 'Team Fit Analysis', href: '/team-fit-analysis' },
    { label: 'Data Visualizations', href: '/data-visualizations' },
    { label: 'Informal Research & Development', href: '/research-development' },
    { label: 'High School Substack (G10-11)', href: 'https://theflarescreen.substack.com/', external: true },
  ];

  const buttonStyle: React.CSSProperties = {
    fontFamily: titleFont,
    fontWeight: 700,
    fontSize: 'clamp(15px, 1.4vw, 19px)',
    letterSpacing: '-0.01em',
    color: '#161616',
    background: '#f1f0ee',
    border: '1.5px solid rgba(22, 22, 22, 0.22)',
    borderRadius: 0,
    padding: '2.2vh 2vw',
    cursor: 'pointer',
    transition: 'opacity 0.15s ease',
    display: 'block',
    width: '100%',
    textAlign: 'center',
    textDecoration: 'none',
  };

  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#f1f0ee',
      backgroundImage: 'url(/noise.png)',
      backgroundSize: '300px',
      color: '#161616',
      textAlign: 'center',
      padding: '6vh 6vw',
    }}>
      <h1 style={{
        fontFamily: titleFont,
        fontWeight: 700,
        fontSize: 'clamp(36px, 7vw, 80px)',
        lineHeight: 0.95,
        letterSpacing: '-0.02em',
        color: '#161616',
        margin: '0 0 5vh',
      }}>
        Maurya&apos;s Work Samples
      </h1>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '2vh',
        width: '100%',
        maxWidth: '480px',
      }}>
        {buttons.map(({ label, href, external }) =>
          external && href ? (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={buttonStyle}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              {label}
            </a>
          ) : href ? (
            <Link
              key={label}
              href={href}
              style={buttonStyle}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              {label}
            </Link>
          ) : (
            <button
              key={label}
              style={buttonStyle}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              {label}
            </button>
          )
        )}
      </div>
    </main>
  );
}
