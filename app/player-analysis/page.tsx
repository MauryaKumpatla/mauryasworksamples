import AnalysisPage from '../components/AnalysisPage';

export default function PlayerAnalysis() {
  return (
    <AnalysisPage
      title="Player Analysis"
      sections={[
        {
          heading: 'AMR Agency',
          boxes: [
            {
              label: 'Anthony Robinson II Player Write-Up',
              href: 'https://amragencyllc.com/a98a9c4d27283beb/',
            },
          ],
        },
        {
          heading: 'Personal',
          boxes: [
            {
              label: 'Dailyn Swain Scouting Report - Condensed',
              href: 'https://docs.google.com/document/d/1zYJ0PGnFYe5mAF4kX9-pbKW7Vo_WoInVe-cEYNqbUaw/edit?usp=sharing',
            },
            {
              label: 'Dailyn Swain Scouting Report - Extended',
              href: 'https://docs.google.com/document/d/1_G_zxjYSP80T5Tpma894XPJaNJAIF43FGhFMhAUjxG4/edit?usp=sharing',
            },
          ],
        },
      ]}
    />
  );
}
