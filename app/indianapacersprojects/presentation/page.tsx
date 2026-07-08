'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function PacersPresentation() {
  const titleFont = "var(--font-supria), sans-serif";
  const bodyFont = "var(--font-supria-regular), sans-serif";
  const [isFullscreen, setIsFullscreen] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const sectionHeader: React.CSSProperties = {
    fontFamily: titleFont,
    fontWeight: 700,
    fontSize: 'clamp(20px, 2.5vw, 34px)',
    margin: '4vh 0 2vh',
    letterSpacing: '-0.01em',
    textAlign: 'center',
  };

  const enterFullscreen = () => setIsFullscreen(true);
  const exitFullscreen = () => setIsFullscreen(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setIsFullscreen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

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

        <p>Though I finished the base version of this presentation a few days ago, I figured I&rsquo;d maximize my time available and create a better product. Through this, the interactive version of this presentation was born. It includes multiple hyperlinks on two slides &mdash; the De&rsquo;Anthony Melton and DaRon Holmes II slides &mdash; that amplify the research and analysis within each slide. The features and overall presentation obviously look better on a desktop, but are still optimized for mobile viewing. I hope you enjoy!</p>

        <h2 style={sectionHeader}>Presentation</h2>

        {/* ── Presentation embed with fullscreen controls ── */}
        <div style={{ margin: '0 auto 1.6em', maxWidth: '1100px' }}>
          {/* Fullscreen overlay — iframe fills screen */}
          {isFullscreen && (
            <div
              style={{
                position: 'fixed',
                inset: 0,
                background: '#000',
                zIndex: 1000,
              }}
            >
              <iframe
                src="/pacers-presentation.html"
                title="Pacers Player Targets Deck"
                style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
              />
            </div>
          )}

          {/* ESC button rendered outside iframe container so it's never covered */}
          {isFullscreen && (
            <button
              onClick={exitFullscreen}
              style={{
                position: 'fixed',
                top: '16px',
                right: '20px',
                background: '#161616',
                border: '1.5px solid rgba(255,255,255,0.5)',
                color: '#ffffff',
                fontFamily: titleFont,
                fontSize: '13px',
                letterSpacing: '0.08em',
                padding: '8px 20px',
                borderRadius: '4px',
                cursor: 'pointer',
                zIndex: 2000,
                transition: 'background 0.15s ease',
                boxShadow: '0 2px 12px rgba(0,0,0,0.6)',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#333')}
              onMouseLeave={e => (e.currentTarget.style.background = '#161616')}
            >
              ESC / EXIT
            </button>
          )}

          {/* Normal embed with fullscreen button */}
          <div style={{ lineHeight: 0 }}>
            <iframe
              ref={iframeRef}
              src="/pacers-presentation.html"
              title="Pacers Player Targets Deck"
              style={{ width: '100%', aspectRatio: '16 / 9', display: 'block', border: 'none', background: 'transparent' }}
              loading="lazy"
              allowFullScreen
            />
          </div>
          <div style={{ textAlign: 'right', marginTop: '10px' }}>
            <button
              onClick={enterFullscreen}
              title="Enter fullscreen"
              style={{
                background: 'rgba(22,22,22,0.08)',
                border: '1.5px solid rgba(22,22,22,0.22)',
                color: '#161616',
                fontFamily: titleFont,
                fontSize: '12px',
                letterSpacing: '0.08em',
                padding: '6px 14px',
                borderRadius: '4px',
                cursor: 'pointer',
                transition: 'background 0.15s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(22,22,22,0.15)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'rgba(22,22,22,0.08)')}
            >
              ⛶ FULL SCREEN
            </button>
          </div>
        </div>


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
