import PageShell from '../components/PageShell';
import TweetEmbed from '../components/TweetEmbed';

const tweets = [
  'https://x.com/TheFlarescreen/status/2059033318486647095',
  'https://x.com/TheFlarescreen/status/2064196741147279715',
];

export default function ResearchDevelopment() {
  return (
    <PageShell title="Informal Research & Development">
      {tweets.map(url => (
        <TweetEmbed key={url} url={url} />
      ))}
    </PageShell>
  );
}
