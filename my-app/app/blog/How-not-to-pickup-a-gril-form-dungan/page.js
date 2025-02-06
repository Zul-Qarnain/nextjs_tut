import React from 'react';
import Script from 'next/script';

const Page = () => {
  return (
    <>
      <h1>My Page</h1>

      {/* Correct way to use Next.js Script component */}
      <Script src="/source.js" strategy="lazyOnload" />
    </>
  );
}

export default Page;
