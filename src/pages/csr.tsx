import getConfig from 'next/config';

import Link from 'next/link';

import FooDisplay from 'components/EnvDisplay';

const CSR = () => {
  const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

  const fooValue =
    serverRuntimeConfig?.FOO || publicRuntimeConfig?.FOO || 'No FOO Defined!';
  const barValue =
    serverRuntimeConfig?.BAR || publicRuntimeConfig?.BAR || 'No BAR Defined!';

  return (
    <div>
      <h1>CSR PAGE</h1>
      <FooDisplay fooValue={fooValue} barValue={barValue} />
      <div>
        <Link href="/">To SSR Page</Link>
      </div>
    </div>
  );
};

export default CSR;
