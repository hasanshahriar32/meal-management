import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: 'Next.js Blog Starter Kit',
    description: 'Clone and deploy your own Next.js portfolio in minutes.',
    image: 'https://assets.vercel.com/image/upload/q_auto/front/vercel/dps.png'
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourname" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Head>
          <script
            src="https://giscus.app/client.js"
            data-repo="hasanshahriar32/mealman"
            data-repo-id="R_kgDONIa5xg"
            data-category-id="DIC_kwDONIa5xs4ClHoR"
            data-mapping="pathname"
            data-strict="0"
            data-reactions-enabled="1"
            data-input-position="top"
            data-theme="light"
            data-lang="en"
            crossOrigin="anonymous"
            async
          ></script>
        </Head>
      </body>
    </Html>
  );
}
