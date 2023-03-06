import { DefaultSeoProps } from "next-seo";

const NEXT_SEO_DEFAULT: DefaultSeoProps = {

    title: 'NextJS + Emotion Boilerplate',
    description: 'This is a boilerplate for NextJS + Emotion',

    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://test.com/',
      title: 'Open Graph Title',
      description: 'Open Graph Description',
      images: [
        {
          url: 'https://test.com/opengraph-image.png',
          width: 800,
          height: 600,
          alt: 'Og Image Alt',
          type: 'image/png',
        },
      ],
      siteName: 'SiteName',
    },

    twitter: {
      handle: '@handle',
      site: '@site',
      cardType: 'summary_large_image',
    },

  };

export default NEXT_SEO_DEFAULT;
