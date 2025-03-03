import merge from 'lodash.merge';
import type { Metadata } from 'next';

type MetadataGenerator = Omit<Metadata, 'description' | 'title'> & {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

const applicationName = 'Hayden Bleasel';
const author: Metadata['authors'] = {
  name: applicationName,
  url: 'https://haydenbleasel.com/',
};
const publisher = applicationName;
const twitterHandle = '@haydenbleasel';

const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

if (!baseUrl) {
  throw new Error('VERCEL_PROJECT_PRODUCTION_URL is not defined');
}

export const createMetadata = ({
  title,
  description,
  path,
  image,
  ...props
}: MetadataGenerator): Metadata => {
  const parsedTitle = `${title} | ${applicationName}`;

  const defaultMetadata: Metadata = {
    title: parsedTitle,
    description,
    applicationName,
    authors: [author],
    creator: author.name,
    metadataBase: new URL(baseUrl),
    formatDetection: {
      telephone: false,
    },
    appleWebApp: {
      capable: true,
      statusBarStyle: 'default',
      title: parsedTitle,
    },
    openGraph: {
      title: parsedTitle,
      description,
      type: 'website',
      siteName: applicationName,
      locale: 'en_US',
      url: new URL(path ?? '/', baseUrl).toString(),
    },
    publisher,
    twitter: {
      card: 'summary_large_image',
      creator: twitterHandle,
    },
  };

  const metadata: Metadata = merge(defaultMetadata, props);

  if (image && metadata.openGraph) {
    metadata.openGraph.images = [
      {
        url: image,
        width: 1200,
        height: 630,
        alt: title,
      },
    ];
  }

  return metadata;
};
