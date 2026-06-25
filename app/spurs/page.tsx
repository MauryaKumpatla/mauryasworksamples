"use client";

import Link from 'next/link';

const titleFont = "var(--font-supria), sans-serif";

const sections = [
  {
    heading: 'Sent',
    boxes: [
      { label: 'Data Visualization', href: 'https://www.amragency.guide/dataviz2' },
      { label: 'Team Fit Writeup', href: 'https://www.amragency.guide/tarrissanantoniowriteup' },
    ],
  },
  {
    heading: 'Unsent',
    boxes: [
      { label: "In Defense of Tarris Reed's Defensive Intelligence", href: 'https://www.amragency.guide/tarrissanantoniowriteup2' },
    ],
  },
];

export default function Spurs() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: '#f1f0ee',
      backgroundImage: 'url(/noise.png)',
      backgroundSize: '300px',
      color: '#161616',
      padding: '8vh 6vw',
    }}>
      <h1 style={{
        fontFamily: titleFont,
        fontWeight: 700,
        fontSize: 'clamp(32px, 6vw, 64px)',
        lineHeight: 0.95,
        letterSpacing: '-0.02em',
        textAlign: 'center',
        margin: '0 0 6vh',
      }}>
        Tarris Reed - San Antonio Spurs
      </h1>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '5vh',
        width: '100%',
        maxWidth: '560px',
      }}>
        {sections.map(({ heading, boxes }) => (
          <section key={heading}>
            <h2 style={{
              fontFamily: titleFont,
              fontWeight: 700,
              fontSize: 'clamp(16px, 1.6vw, 22px)',
              letterSpacing: '0.04em',
              textAlign: 'center',
              color: '#161616',
              margin: '0 0 2.5vh',
            }}>
              - {heading} -
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2vh' }}>
              {boxes.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
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
                    textAlign: 'center',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  {label}
                </a>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
