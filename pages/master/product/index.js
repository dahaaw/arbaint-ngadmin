import Layout from '@organism/Layout';
import Link from 'next/link';
import React from 'react';

export default function Product() {
  return (
      <Layout>
          <button className='border'>
              <Link href="/master/product/add">add</Link>
            </button>
      </Layout>
  );
}