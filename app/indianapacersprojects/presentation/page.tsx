'use client';

import { useState, useRef } from 'react';

export default function PacersPresentation() {
  const titleFont = "var(--font-supria), sans-serif";
  const bodyFont = "var(--font-supria-regular), sans-serif";
  const [isFullscreen, setIsFullscreen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const sectionHeader: React.CSSProperties = {
    fontFamily: titleFont,
    fontWeight: 700,
    fontSize: 'clamp(20px, 2.5vw, 34px)',
    margin: '4vh 0 2vh',
    letterSpacing: '-0.01em',
    textAlign: 'center',
  };

  const enterFullscreen = () => {
    const el = containerRef.current;
    if (!el) return;
    if (el.requestFullscreen) {
      el.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => setIsFullscreen(true));
    } else {
      setIsFullscreen(true);
    }
  };

  const exitFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => setIsFullscreen(false));
    } else {
      setIsFullscreen(false);
    }
  };

  const handleFullscreenChange = () => {
    if (!document.fullscreenElement) setIsFullscreen(false);
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

        <p>Though I finished the base version of this presentation a few days ago, I figured I&rsquo;d maximize my time available and create a better product. Through this, the interactive version of this presentation was born. It includes multiple hyperlinks on two slides &mdash; the De&rsquo;Anthony Melton and DaRon Holmes II slides &mdash; that amplify the research and analysis within each slide. The features and overall presentation obviously look better on a desktop, but are still optimized for mobile viewing in either portrait or landscape mode. I hope you enjoy!</p>

        <h2 style={sectionHeader}>Presentation</h2>

        {/* ── Presentation embed with fullscreen controls ── */}
        <div style={{ margin: '0 auto 1.6em', maxWidth: '1100px' }}>
          {/* Fullscreen overlay */}
          {isFullscreen && (
            <div
              style={{
                position: 'fixed',
                inset: 0,
                background: '#000',
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column',
              }}
              onFullscreenChange={handleFullscreenChange as any}
            >
              <button
                onClick={exitFullscreen}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '20px',
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.25)',
                  color: '#fff',
                  fontFamily: titleFont,
                  fontSize: '13px',
                  letterSpacing: '0.08em',
                  padding: '7px 18px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  backdropFilter: 'blur(6px)',
                  zIndex: 1001,
                  transition: 'background 0.15s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
              >
                ESC / EXIT
              </button>
              <iframe
                src="/pacers-presentation.html"
                title="Pacers Player Targets Deck"
                style={{ width: '100%', height: '100%', border: 'none' }}
                allowFullScreen
              />
            </div>
          )}

          {/* Normal embed with fullscreen button */}
          <div ref={containerRef} style={{ position: 'relative', lineHeight: 0 }}>
            <iframe
              ref={iframeRef}
              src="/pacers-presentation.html"
              title="Pacers Player Targets Deck"
              style={{ width: '100%', aspectRatio: '16 / 9', display: 'block', border: 'none', background: 'transparent' }}
              loading="lazy"
              allowFullScreen
            />
            <button
              onClick={enterFullscreen}
              title="Enter fullscreen"
              style={{
                position: 'absolute',
                bottom: '12px',
                right: '12px',
                background: 'rgba(0,0,0,0.55)',
                border: '1px solid rgba(255,255,255,0.25)',
                color: '#fff',
                fontFamily: titleFont,
                fontSize: '12px',
                letterSpacing: '0.08em',
                padding: '6px 14px',
                borderRadius: '4px',
                cursor: 'pointer',
                backdropFilter: 'blur(4px)',
                transition: 'background 0.15s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.75)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(0,0,0,0.55)')}
            >
              ⛶ FULL SCREEN
            </button>
          </div>
        </div>

        <div style={{ width: '60px', height: '3px', background: '#c0bdb8', margin: '5vh auto' }} />
        <p style={{ fontSize: '0.8em', color: '#888', textAlign: 'center' }}>All rights reserved &copy; AMR Agency</p>

      </article>

      <style>{`
        p { margin: 0 0 1.6em 0; }
        strong { font-family: var(--font-supria), sans-serif; font-weight: 700; }
        @media (max-width: 768px) {
          button[title="Enter fullscreen"] {
            bottom: 8px;
            right: 8px;
            font-size: 11px;
            padding: 5px 11px;
          }
        }
      `}</style>
    </main>
  );
}
