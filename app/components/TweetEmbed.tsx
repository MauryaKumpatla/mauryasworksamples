"use client";

import { useEffect, useRef } from 'react';
import { tweetId } from '../lib/tweets';

declare global {
  interface Window {
    twttr?: { widgets: { load: (el?: HTMLElement) => void } };
  }
}

const SCRIPT_SRC = 'https://platform.twitter.com/widgets.js';

function ensureScript(): Promise<void> {
  return new Promise(resolve => {
    if (window.twttr?.widgets) {
      resolve();
      return;
    }
    let s = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_SRC}"]`);
    if (!s) {
      s = document.createElement('script');
      s.src = SCRIPT_SRC;
      s.async = true;
      document.body.appendChild(s);
    }
    s.addEventListener('load', () => resolve());
    // Fallback in case it was already loading
    const check = setInterval(() => {
      if (window.twttr?.widgets) {
        clearInterval(check);
        resolve();
      }
    }, 200);
  });
}

export default function TweetEmbed({ url }: { url: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const id = tweetId(url);
    if (!id || !ref.current) return;
    const container = ref.current;
    container.innerHTML = '';
    let cancelled = false;
    ensureScript().then(() => {
      if (cancelled || !window.twttr) return;
      // createTweet is the cleanest API but not always typed; fall back to widgets.load
      const anyTwttr = window.twttr as unknown as {
        widgets: { createTweet?: (id: string, el: HTMLElement, opts?: object) => Promise<unknown>; load: (el?: HTMLElement) => void };
      };
      if (anyTwttr.widgets.createTweet) {
        anyTwttr.widgets.createTweet(id, container, { align: 'center' });
      } else {
        anyTwttr.widgets.load(container);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [url]);

  return <div ref={ref} style={{ width: '100%', display: 'flex', justifyContent: 'center', minHeight: '200px' }} />;
}
