import Head from 'next/head';

import Link from 'next/link';

import { env } from 'utils/env';

import FooDisplay from 'components/EnvDisplay';

interface IHomeProps {
  fooValue: string;
  barValue: string;
}

export default function Home({ fooValue, barValue }: IHomeProps) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <h1>SSR PAGE</h1>
        <FooDisplay fooValue={fooValue} barValue={barValue} />
        <div>
          <Link href="/csr">To CSR Page</Link>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      fooValue: env.FOO,
      barValue: env.BAR,
    },
  };
}
