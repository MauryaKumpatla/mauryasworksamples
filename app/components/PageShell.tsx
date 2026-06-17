"use client";

import Link from 'next/link';

const titleFont = "var(--font-supria), sans-serif";

export default function PageShell({
  title,
  backHref = '/',
  children,
}: {
  title: string;
  backHref?: string;
  children: React.ReactNode;
}) {
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
      <Link href={backHref} style={{
        fontFamily: titleFont, fontWeight: 500, fontSize: 'clamp(13px, 1vw, 15px)',
        color: '#555', textDecoration: 'none', alignSelf: 'flex-start', marginBottom: '4vh',
      }}>
        ← Back
      </Link>

      <h1 style={{
        fontFamily: titleFont, fontWeight: 700, fontSize: 'clamp(32px, 6vw, 64px)',
        lineHeight: 0.95, letterSpacing: '-0.02em', textAlign: 'center', margin: '0 0 6vh',
      }}>
        {title}
      </h1>

      <div style={{ width: '100%', maxWidth: '680px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5vh' }}>
        {children}
      </div>
    </main>
  );
}
