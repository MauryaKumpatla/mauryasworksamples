import PageShell from '../../../components/PageShell';
import Slideshow from '../../../components/Slideshow';

export default function AmrAgencyViz2() {
  return (
    <PageShell title="AMR Agency" backHref="/2/data-visualizations" wide>
      <Slideshow images={['/Tobiason_Vis_1.png', '/TarrisDataVis2.png']} />
    </PageShell>
  );
}
