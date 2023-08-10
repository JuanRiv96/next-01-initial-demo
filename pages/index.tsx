import Link from 'next/link';
import { MainLayout } from '@/components/layouts/MainLayout';


export default function Home() {
  return (
    <MainLayout>
      {/* Al tener las clases en el CSS global puedo aplicar los estilos con "" o usando {''} */}
      <div className= "description"> 
          <p>
            Get started by editing&nbsp;
            <code className={'code'}>pages/index.tsx</code>
          </p>
        </div>

        <h1>Home Page</h1>

        <div className={'center'}>
          <h2>
            Ir a <Link href="/about">About</Link>
          </h2>
        </div>
    </MainLayout>
  )
}