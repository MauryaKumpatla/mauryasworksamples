import PageShell from '../../components/PageShell';
import Slideshow from '../../components/Slideshow';

export default function CapitanesViz() {
  return (
    <PageShell title="Mexico City Capitanes" backHref="/data-visualizations" wide>
      <Slideshow images={['/CapitanesVis1.png']} />
    </PageShell>
  );
}
