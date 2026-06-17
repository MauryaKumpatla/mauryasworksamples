import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const supria = localFont({
  src: [
    {
      path: '../public/fonts/SupriaSansCond-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/SupriaSansCond-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/SupriaSansCond-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-supria',
  display: 'block',
});

const supriaCondMedium = localFont({
  src: '../public/fonts/HvDTrial_SupriaSans-CondMedium.otf',
  variable: '--font-supria-cond-medium',
  display: 'block',
});

const supriaRegular = localFont({
  src: '../public/fonts/HvDTrial_SupriaSans-Regular.otf',
  variable: '--font-supria-regular',
  display: 'block',
});

export const metadata: Metadata = {
  title: "Maurya's Work Samples",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${supria.variable} ${supriaCondMedium.variable} ${supriaRegular.variable}`}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
