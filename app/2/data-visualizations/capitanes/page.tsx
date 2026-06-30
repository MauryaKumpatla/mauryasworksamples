import PageShell from '../../../components/PageShell';
import Slideshow from '../../../components/Slideshow';

export default function CapitanesViz2() {
  return (
    <PageShell title="Mexico City Capitanes" backHref="/2/data-visualizations" wide>
      <Slideshow images={['/CapitanesVis1.png']} />
    </PageShell>
  );
}
