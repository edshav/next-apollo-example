import Link from 'next/link';
import { Continents } from '../components/Continents';

const CSRPage = () => (
  <div>
    <nav>
      <span>CSR Page</span>
      &nbsp;&nbsp;&nbsp;
      <Link href="/">
        <a>Home Page</a>
      </Link>
      &nbsp;&nbsp;&nbsp;
      <Link href="/ssr">
        <a>SSR Page</a>
      </Link>
    </nav>
    <Continents />
  </div>
);

export default CSRPage;
