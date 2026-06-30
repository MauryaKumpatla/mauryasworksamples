"use client";

import Link from 'next/link';

const titleFont = "var(--font-supria), sans-serif";

const sections: { heading: string; boxes: { label: string; href: string }[] }[] = [
  { heading: 'AMR Agency', boxes: [{ label: 'AMR Agency Visualizations', href: '/2/data-visualizations/amr-agency' }] },
  { heading: 'Mexico City Capitanes', boxes: [{ label: 'Capitanes Visualizations', href: '/2/data-visualizations/capitanes' }] },
  { heading: 'Personal', boxes: [{ label: 'Personal Visualizations', href: '/2/data-visualizations/personal' }] },
];

export default function DataVisualizations2() {
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
      <Link href="/2" style={{
        fontFamily: titleFont, fontWeight: 500, fontSize: 'clamp(13px, 1vw, 15px)',
        color: '#555', textDecoration: 'none', alignSelf: 'flex-start', marginBottom: '4vh',
      }}>
        ← Back
      </Link>

      <h1 style={{
        fontFamily: titleFont, fontWeight: 700, fontSize: 'clamp(32px, 6vw, 64px)',
        lineHeight: 0.95, letterSpacing: '-0.02em', textAlign: 'center', margin: '0 0 6vh',
      }}>
        Data Visualizations
      </h1>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '5vh', width: '100%', maxWidth: '560px' }}>
        {sections.map(({ heading, boxes }) => (
          <section key={heading}>
            <h2 style={{
              fontFamily: titleFont, fontWeight: 700, fontSize: 'clamp(16px, 1.6vw, 22px)',
              letterSpacing: '0.04em', textAlign: 'center', margin: '0 0 2.5vh',
            }}>
              - {heading} -
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2vh' }}>
              {boxes.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  style={{
                    fontFamily: titleFont, fontWeight: 700, fontSize: 'clamp(15px, 1.4vw, 19px)',
                    letterSpacing: '-0.01em', color: '#161616', background: '#f1f0ee',
                    border: '1.5px solid rgba(22, 22, 22, 0.22)', borderRadius: 0,
                    padding: '2.2vh 2vw', cursor: 'pointer', transition: 'opacity 0.15s ease',
                    display: 'block', textAlign: 'center', textDecoration: 'none',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  {label}
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
