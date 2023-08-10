import Link from 'next/link';
import { MainLayout } from '@/components/layouts/MainLayout';


export default function PricingPage() {
  return (
    <MainLayout>
      <div className={'description'}>
          <p>
            Get started by editing&nbsp;
            <code className={'code'}>pages/pricing.tsx</code>
          </p>
        </div>

        <h1> Pricing Page</h1>

        <div className={'center'}>
          <h2>
            Ir a <Link href="/">Home</Link>
          </h2>
        </div>
    </MainLayout>
  )
}