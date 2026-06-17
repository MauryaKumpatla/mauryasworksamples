/** Extracts the numeric status id from an x.com / twitter.com URL. */
export function tweetId(url: string): string | null {
  const m = url.match(/status\/(\d+)/);
  return m ? m[1] : null;
}

/**
 * Sorts tweet URLs oldest-first by their snowflake status id (ids encode
 * creation time, so a numerically smaller id is an older tweet). BigInt
 * comparison avoids precision loss on the 19-digit ids.
 */
export function sortTweetsOldestFirst(urls: string[]): string[] {
  return [...urls].sort((a, b) => {
    const ia = BigInt(tweetId(a) ?? '0');
    const ib = BigInt(tweetId(b) ?? '0');
    return ia < ib ? -1 : ia > ib ? 1 : 0;
  });
}
