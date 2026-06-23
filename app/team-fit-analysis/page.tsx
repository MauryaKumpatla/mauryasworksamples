import AnalysisPage from '../components/AnalysisPage';

export default function TeamFitAnalysis() {
  return (
    <AnalysisPage
      title="Team Fit Analysis"
      sections={[
        {
          heading: 'AMR Agency',
          boxes: [
            {
              label: 'Tarris Reed - Boston',
              href: 'https://www.amragency.guide/tarrisbostonvideo',
            },
            {
              label: 'Tarris Reed - Memphis',
              href: 'https://www.amragency.guide/tarrismemphiswriteup',
            },
            {
              label: 'Tarris Reed - San Antonio',
              href: 'https://www.amragency.guide/tarrissanantoniowriteup',
            },
          ],
        },
        {
          heading: 'Personal',
          boxes: [
            {
              label: 'Isaiah Hartenstein - Oklahoma City Thunder',
              href: 'https://theswishtheory.com/nba/2024/10/inserting-some-hart-into-the-thunder/',
            },
          ],
        },
      ]}
    />
  );
}
