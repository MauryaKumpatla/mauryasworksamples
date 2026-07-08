'use client';

import Link from 'next/link';

export default function MockSQLQueries() {
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

  const queries = [
    {
      label: 'Mock SQL Query #1',
      code: `SELECT
    p.full_name,
    AVG(ps.pts) AS avg_points
FROM Player_Stats ps
LEFT JOIN Players p ON ps.player_id = p.player_id
WHERE ps.season = 2024
    AND ps.game_type = 'regular'
    AND ps.minutes < 500
GROUP BY p.full_name
ORDER BY avg_points DESC;`,
    },
    {
      label: 'Mock SQL Query #2',
      code: `WITH playoff_games AS (
    SELECT
        winner AS team_id,
        COUNT(game_id) AS total_games
    FROM Games
    WHERE season = 2024
        AND game_type = 'playoffs'
    GROUP BY winner
)
SELECT
    t.team_full_name,
    pg.total_games
FROM playoff_games pg
LEFT JOIN Teams t ON pg.team_id = t.team_id
ORDER BY pg.total_games DESC;`,
    },
    {
      label: 'Mock SQL Query #3',
      code: `SELECT
    p.full_name,
    (po.fga / po.minutes) * 36 AS fga_per_36
FROM Player_Stats po
LEFT JOIN Players p ON po.player_id = p.player_id
LEFT JOIN Player_Stats rs ON po.player_id = rs.player_id
    AND rs.season = 2024
    AND rs.game_type = 'regular'
WHERE po.season = 2024
    AND po.game_type = 'playoffs'
    AND rs.games_started < (rs.games_played * 0.5)
ORDER BY fga_per_36 DESC
LIMIT 10;`,
    },
    {
      label: 'Mock SQL Query #4',
      code: `SELECT
    t.team_full_name,
    AVG(CASE WHEN g.winner = t.team_id THEN g.point_difference ELSE NULL END) -
    AVG(CASE WHEN g.winner != t.team_id THEN g.point_difference ELSE NULL END) AS win_loss_diff
FROM Games g
LEFT JOIN Teams t ON t.team_id = g.home_team_id OR t.team_id = g.away_team_id
WHERE g.season = 2024
    AND g.game_type = 'regular'
GROUP BY t.team_full_name
ORDER BY win_loss_diff DESC
LIMIT 5;`,
    },
  ];

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
          Assignment #3: Mock SQL Queries
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
        color: '#222',
      }}>
        {queries.map(({ label, code }) => (
          <div key={label}>
            <h2 style={sectionHeader}>{label}</h2>
            <div style={{
              margin: '0 auto 3vh',
              maxWidth: '900px',
              background: '#1e1e1e',
              borderRadius: '6px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
            }}>
              <pre style={{
                margin: 0,
                padding: '1.4em 1.6em',
                overflowX: 'auto',
                fontFamily: '"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace',
                fontSize: 'clamp(12px, 1vw, 14px)',
                lineHeight: 1.7,
                color: '#d4d4d4',
                whiteSpace: 'pre',
              }}>
                <code>{code}</code>
              </pre>
            </div>
          </div>
        ))}

        <div style={{ width: '60px', height: '3px', background: '#c0bdb8', margin: '5vh auto' }} />
        <p style={{ fontSize: '0.8em', color: '#888', textAlign: 'center', margin: 0 }}>All rights reserved &copy; AMR Agency</p>
      </article>

      <style>{`
        strong { font-family: var(--font-supria), sans-serif; font-weight: 700; }
      `}</style>
    </main>
  );
}
