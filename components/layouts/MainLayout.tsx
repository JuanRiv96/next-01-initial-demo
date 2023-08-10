import { FC, PropsWithChildren } from 'react';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from './MainLayout.module.css';
import { Navbar } from '../Navbar';

const inter = Inter({ subsets: ['latin'] })

export const MainLayout: FC<PropsWithChildren> = ({ children } ) => {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>

        <Navbar/>
      
        { children }

      </main>
    </div>
  )
}