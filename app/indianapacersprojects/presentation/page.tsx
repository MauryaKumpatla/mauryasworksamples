'use client';

export default function PacersPresentation() {
  const titleFont = "var(--font-supria), sans-serif";
  const bodyFont = "var(--font-supria-regular), sans-serif";

  const sectionHeader: React.CSSProperties = {
    fontFamily: titleFont,
    fontWeight: 700,
    fontSize: 'clamp(20px, 2.5vw, 34px)',
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
      {/* ── Title ── */}
      <div style={{ padding: '8vh 6vw 2vh', textAlign: 'center' }}>
        <h1 style={{
          fontFamily: titleFont,
          fontWeight: 700,
          fontSize: 'clamp(36px, 7vw, 80px)',
          lineHeight: 0.95,
          letterSpacing: '-0.02em',
          color: '#161616',
          margin: 0,
        }}>
          Assignment #1: Presentation
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

        <p>Though I finished the base version of this presentation a few days ago, I figured I&rsquo;d maximize my time available and create a better product. Through this, the interactive version of this presentation was born. It includes multiple hyperlinks on two slides &mdash; the De&rsquo;Anthony Melton and DaRon Holmes II slides &mdash; that I believe amplify the research and analysis within each slide. The features and overall presentation obviously look better on a desktop, but are still optimized for mobile viewing in either portrait or landscape mode. I hope you enjoy!</p>

        <h2 style={sectionHeader}>Presentation</h2>

        <div style={{ margin: '0 auto 1.6em', maxWidth: '1100px', lineHeight: 0 }}>
          <iframe
            src="/pacers-presentation.html"
            title="Pacers Player Targets Deck"
            style={{ width: '100%', aspectRatio: '16 / 9', display: 'block', border: 'none', background: 'transparent' }}
            loading="lazy"
            allowFullScreen
          />
        </div>

        <div style={{ width: '60px', height: '3px', background: '#c0bdb8', margin: '5vh auto' }} />
        <p style={{ fontSize: '0.8em', color: '#888', textAlign: 'center' }}>All rights reserved &copy; AMR Agency</p>

      </article>

      <style>{`
        p { margin: 0 0 1.6em 0; }
        strong { font-family: var(--font-supria), sans-serif; font-weight: 700; }
      `}</style>
    </main>
  );
}
