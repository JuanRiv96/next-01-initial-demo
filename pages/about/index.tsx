import Link from 'next/link';
import { MainLayout } from '@/components/layouts/MainLayout';
import { DarkLayout } from '../../components/layouts/DarkLayout';
import type { ReactElement } from 'react';


export default function AboutPage() {
  return (
    <>
       <div className={'description'}>
          <p>
            Get started by editing&nbsp;
            <code className={'code'}>pages/about.tsx</code>
          </p>
        </div>

        <h1>About Page</h1>

        <div className={'center'}>
          <h2>
            Ir a <Link href="/">Home</Link>
          </h2>
        </div>
    </>
  )
}

AboutPage.getLayout = function ( page: ReactElement ) {
  return(
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}