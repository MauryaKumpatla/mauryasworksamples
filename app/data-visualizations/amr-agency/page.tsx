import PageShell from '../../components/PageShell';
import Slideshow from '../../components/Slideshow';

export default function AmrAgencyViz() {
  return (
    <PageShell title="AMR Agency" backHref="/data-visualizations">
      <Slideshow images={['/Tobiason_Vis_1.png', '/TarrisDataVis2.png']} />
    </PageShell>
  );
}
