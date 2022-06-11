import Link from 'next/link';
import { Continents } from '../components/Continents';
import { CONTINENTS } from '../gql/CONTINENTS';
import { initializeApollo, addApolloState } from '../lib/apolloClient';

const SSRPage = () => (
  <div>
    <Link href="/">
      <a>Home Page</a>
    </Link>

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
