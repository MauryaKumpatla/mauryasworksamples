"use client";

import { useState } from 'react';

const titleFont = "var(--font-supria), sans-serif";

export default function Slideshow({ images }: { images: string[] }) {
  const [i, setI] = useState(0);
  const n = images.length;
  const go = (d: number) => setI(prev => (prev + d + n) % n);

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
      <div style={{ display: 'flex', alignItems: 'center', gap: '2vw', width: '100%', justifyContent: 'center' }}>
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
        <a href={images[i]} target="_blank" rel="noopener noreferrer" style={{ flex: 1, maxWidth: '80%', display: 'block' }}>
          <img
            src={images[i]}
            alt={`Slide ${i + 1}`}
            style={{ width: '100%', height: 'auto', display: 'block', border: '1.5px solid rgba(22,22,22,0.22)' }}
          />
        </a>

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
    </div>
  );
}
