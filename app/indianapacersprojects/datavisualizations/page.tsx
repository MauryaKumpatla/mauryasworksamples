'use client';

import Link from 'next/link';

export default function DataVisualizations() {
  const titleFont = "var(--font-supria), sans-serif";
  const bodyFont = "var(--font-supria-regular), sans-serif";

  const sectionHeader: React.CSSProperties = {
    fontFamily: titleFont,
    fontWeight: 700,
    fontSize: 'clamp(24px, 3vw, 42px)',
    margin: '4vh 0 2vh',
    letterSpacing: '-0.01em',
    textAlign: 'center',
  };

  return (
    <main style={{
      minHeight: '100vh',
      background: '#f1f0ee',
      backgroundImage: 'url(/noise.png)',
      backgroundSize: '300px',
      color: '#161616',
    }}>
      {/* ── Back button ── */}
      <div style={{ padding: '4vh 6vw 0' }}>
        <Link
          href="/indianapacersprojects"
          style={{
            fontFamily: titleFont,
            fontWeight: 700,
            fontSize: '13px',
            letterSpacing: '0.06em',
            color: '#161616',
            textDecoration: 'none',
            opacity: 0.5,
            display: 'inline-block',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '0.5')}
        >
          ← BACK
        </Link>
      </div>

      {/* ── Title ── */}
      <div style={{ padding: '4vh 6vw 2vh', textAlign: 'center' }}>
        <h1 style={{
          fontFamily: titleFont,
          fontWeight: 700,
          fontSize: 'clamp(36px, 7vw, 80px)',
          lineHeight: 0.95,
          letterSpacing: '-0.02em',
          color: '#161616',
          margin: 0,
        }}>
          Assignment #2: Data Visualizations
        </h1>
      </div>

      {/* ── Article body ── */}
      <article style={{
        padding: '2vh 8vw 8vh',
        maxWidth: '1400px',
        margin: '0 auto',
        fontFamily: bodyFont,
        fontWeight: 400,
        fontSize: 'clamp(15px, 1.15vw, 18px)',
        lineHeight: 1.75,
        letterSpacing: '0em',
        color: '#222',
      }}>

        <h2 style={sectionHeader}>Effective Field-Goal Rate</h2>

        <div style={{ margin: '0 auto 1.6em', maxWidth: '900px', lineHeight: 0 }}>
          <iframe
            src="/pacers-efg-pct.html"
            title="Effective Field-Goal Rate"
            style={{ width: '100%', aspectRatio: '1 / 1', display: 'block', border: 'none', background: 'transparent' }}
            loading="lazy"
          />
        </div>

        <h2 style={sectionHeader}>Offensive Rebound Rate</h2>

        <div style={{ margin: '0 auto 1.6em', maxWidth: '900px', lineHeight: 0 }}>
          <iframe
            src="/pacers-oreb-pct.html"
            title="Offensive Rebound Rate"
            style={{ width: '100%', aspectRatio: '1 / 1', display: 'block', border: 'none', background: 'transparent' }}
            loading="lazy"
          />
        </div>

        <h2 style={sectionHeader}>Turnover Rate</h2>

        <div style={{ margin: '0 auto 1.6em', maxWidth: '900px', lineHeight: 0 }}>
          <iframe
            src="/pacers-tov-pct.html"
            title="Turnover Rate"
            style={{ width: '100%', aspectRatio: '1 / 1', display: 'block', border: 'none', background: 'transparent' }}
            loading="lazy"
          />
        </div>

        <h2 style={sectionHeader}>Free Throw Rate</h2>

        <div style={{ margin: '0 auto 1.6em', maxWidth: '900px', lineHeight: 0 }}>
          <iframe
            src="/pacers-ftm-rate.html"
            title="Free Throw Rate"
            style={{ width: '100%', aspectRatio: '1 / 1', display: 'block', border: 'none', background: 'transparent' }}
            loading="lazy"
          />
        </div>

        <h2 style={sectionHeader}>Conclusion</h2>

        <p>Among the four factors, effective field-goal rate (eFG%) was the most important to both the Indiana Pacers&rsquo; successes and failures. Their 92% win rate when they were above league average in eFG% and their opponent was below league average in eFG% is higher than any combination across all four factors. Additionally, their 20% win rate when they were below league average in eFG% and their opponent was above league average in eFG% is lower than any combination across all four factors.</p>

        <p>The overwhelming influence that eFG% has on winning basketball games lines up with Dean Oliver &mdash; the creator of basketball&rsquo;s four factors &mdash; and his initial research. Oliver found that shooting had a 40% contribution to wins, turnovers 25%, rebounding 20%, and free throws 15%.</p>


      </article>

      <style>{`
        p { margin: 0 0 1.6em 0; }
        strong { font-family: var(--font-supria), sans-serif; font-weight: 700; }
      `}</style>
    </main>
  );
}
