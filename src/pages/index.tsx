import Head from 'next/head';
import Image from 'next/image';
import useSWR from 'swr';

import { useMemo } from 'react';
import MenuItems from '@/components/MenuItems';
import getMenu from './api/getMenu';

const menuFetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Home() {
  const { data: menuItems, error } = useSWR(`/api/getMenu`, menuFetcher);
  if (error) return `An error has occurred: ${error}`;
  if (!menuItems) return `Loading...`;
  console.log(menuItems);
  return (
    <div>
      <Head>
        <title>TypeScript starter for Next.js</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="layout_layoutContainer">
        <MenuItems menu={menuItems} />
      </main>

      <footer className="footer_footer">
        <p className="footer_madeBy">
          Сделано с помощью{` `}
          <a
            href="https://t.me/netslayer"
            target="_blank"
            className="footer_link"
            rel="noreferrer"
          >
            Netslayer
          </a>
        </p>
      </footer>
    </div>
  );
}
