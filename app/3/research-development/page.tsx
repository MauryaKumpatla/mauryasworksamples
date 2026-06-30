import PageShell from '../../components/PageShell';
import TweetEmbed from '../../components/TweetEmbed';
import { sortTweetsOldestFirst } from '../../lib/tweets';

const tweets = sortTweetsOldestFirst([
  'https://x.com/TheFlarescreen/status/2059033318486647095',
  'https://x.com/TheFlarescreen/status/2064196741147279715',
]);

export default function ResearchDevelopment3() {
  return (
    <PageShell title="Informal Research & Development" backHref="/3">
      {tweets.map(url => (
        <TweetEmbed key={url} url={url} />
      ))}
    </PageShell>
  );
}
