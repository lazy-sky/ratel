import { useEffect, useState } from 'react';

import Link from 'next/link';

import { env } from 'utils/env';

import EnvDisplay from 'components/EnvDisplay';

const CSR = () => {
  const [foo, setFoo] = useState('');
  const [bar, setBar] = useState('');

  useEffect(() => {
    setFoo(env.FOO);
    setBar(env.BAR);
  }, []);

  return (
    <div>
      <h1>CSR PAGE</h1>
      <EnvDisplay fooValue={foo} barValue={bar} />
      <div>
        <Link href="/">To SSR Page</Link>
      </div>
    </div>
  );
};

export default CSR;
