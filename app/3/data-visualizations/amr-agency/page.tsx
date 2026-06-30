import PageShell from '../../../components/PageShell';
import Slideshow from '../../../components/Slideshow';

export default function AmrAgencyViz3() {
  return (
    <PageShell title="AMR Agency" backHref="/3/data-visualizations" wide>
      <Slideshow images={['/Tobiason_Vis_1.png', '/TarrisDataVis2.png']} />
    </PageShell>
  );
}
