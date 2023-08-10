import Link from 'next/link';
import { MainLayout } from '@/components/layouts/MainLayout';


export default function ContactPage() {
  return (
    <MainLayout>
      <div className={'description'}>
          <p>
            Get started by editing&nbsp;
            <code className={'code'}>pages/contact.tsx</code>
          </p>
        </div>

        <h1> Contact Page</h1>

        <div className={'center'}>
          <h2>
            Ir a <Link href="/">Home</Link>
          </h2>
        </div>
    </MainLayout>
  )
}