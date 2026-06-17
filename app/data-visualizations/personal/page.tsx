import PageShell from '../../components/PageShell';
import TweetEmbed from '../../components/TweetEmbed';

const tweets = [
  'https://x.com/TheFlarescreen/status/1996203335343595525',
  'https://x.com/TheFlarescreen/status/2027738080656920754',
  'https://x.com/TheFlarescreen/status/2064099971411140615',
  'https://x.com/TheFlarescreen/status/1981759315464847743',
  'https://x.com/TheFlarescreen/status/1981759385300042094',
  'https://x.com/TheFlarescreen/status/1892257434057466330',
];

export default function PersonalViz() {
  return (
    <PageShell title="Personal" backHref="/data-visualizations">
      {tweets.map(url => (
        <TweetEmbed key={url} url={url} />
      ))}
    </PageShell>
  );
}
