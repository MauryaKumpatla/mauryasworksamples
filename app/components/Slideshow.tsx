"use client";

import { useEffect, useState } from 'react';

const titleFont = "var(--font-supria), sans-serif";

export default function Slideshow({ images }: { images: string[] }) {
  const [i, setI] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const n = images.length;
  const go = (d: number) => setI(prev => (prev + d + n) % n);

  // ESC closes the lightbox; arrow keys page through slides
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxOpen(false);
      else if (e.key === 'ArrowLeft') go(-1);
      else if (e.key === 'ArrowRight') go(1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [n]);

  const arrowStyle: React.CSSProperties = {
    fontFamily: titleFont,
    fontWeight: 700,
    fontSize: '28px',
    lineHeight: 1,
    color: '#161616',
    background: '#f1f0ee',
    border: '1.5px solid rgba(22, 22, 22, 0.22)',
    borderRadius: 0,
    width: '52px',
    height: '52px',
    cursor: 'pointer',
    flexShrink: 0,
    transition: 'opacity 0.15s ease',
  };

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2.5vh' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5vw', width: '100%', justifyContent: 'center' }}>
        {n > 1 && (
          <button
            aria-label="Previous"
            style={arrowStyle}
            onClick={() => go(-1)}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            ‹
          </button>
        )}

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[i]}
          alt={`Slide ${i + 1}`}
          onClick={() => setLightboxOpen(true)}
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            outline: '1.5px solid rgba(22, 22, 22, 0.22)',
            outlineOffset: '-1.5px',
            cursor: 'zoom-in',
            transition: 'opacity 0.15s ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
        />

        {n > 1 && (
          <button
            aria-label="Next"
            style={arrowStyle}
            onClick={() => go(1)}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.6')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            ›
          </button>
        )}
      </div>

      {n > 1 && (
        <div style={{ display: 'flex', gap: '10px' }}>
          {images.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => setI(idx)}
              style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                border: '1.5px solid rgba(22,22,22,0.5)',
                background: idx === i ? '#161616' : 'transparent',
                cursor: 'pointer',
                padding: 0,
              }}
            />
          ))}
        </div>
      )}

      {/* ── Lightbox (matches dataviz1) ── */}
      {lightboxOpen && (
        <div
          onClick={() => setLightboxOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(10, 10, 10, 0.92)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '3vh 3vw',
            cursor: 'zoom-out',
          }}
        >
          <button
            onClick={e => { e.stopPropagation(); setLightboxOpen(false); }}
            style={{
              position: 'absolute',
              top: '20px',
              right: '24px',
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
              transition: 'background 0.15s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
            onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
          >
            ESC / CLOSE
          </button>

          {n > 1 && (
            <>
              <button
                aria-label="Previous"
                onClick={e => { e.stopPropagation(); go(-1); }}
                style={{ ...lightboxArrow, left: '2vw' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
              >
                ‹
              </button>
              <button
                aria-label="Next"
                onClick={e => { e.stopPropagation(); go(1); }}
                style={{ ...lightboxArrow, right: '2vw' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
              >
                ›
              </button>
            </>
          )}

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={images[i]}
            alt={`Slide ${i + 1} — Full View`}
            onClick={e => e.stopPropagation()}
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
              objectFit: 'contain',
              outline: '1.5px solid rgba(255,255,255,0.15)',
              outlineOffset: '-1.5px',
              cursor: 'default',
            }}
          />
        </div>
      )}
    </div>
  );
}

const lightboxArrow: React.CSSProperties = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  background: 'rgba(255,255,255,0.1)',
  border: '1px solid rgba(255,255,255,0.25)',
  color: '#fff',
  fontFamily: titleFont,
  fontWeight: 700,
  fontSize: '32px',
  lineHeight: 1,
  width: '52px',
  height: '64px',
  borderRadius: '4px',
  cursor: 'pointer',
  backdropFilter: 'blur(6px)',
  transition: 'background 0.15s ease',
  zIndex: 1001,
};
