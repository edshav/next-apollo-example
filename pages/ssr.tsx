import Link from 'next/link';
import { Continents } from '../components/Continents';
import { CONTINENTS } from '../gql/CONTINENTS';
import { initializeApollo, addApolloState } from '../lib/apolloClient';

const SSRPage = () => (
  <div>
    <nav>
      <span>SSR Page</span>
      &nbsp;&nbsp;&nbsp;
      <Link href="/">
        <a>Home Page</a>
      </Link>
      &nbsp;&nbsp;&nbsp;
      <Link href="/csr">
        <a>CSR Page</a>
      </Link>
    </nav>
    <Continents />
  </div>
);

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: CONTINENTS,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
}

export default SSRPage;
