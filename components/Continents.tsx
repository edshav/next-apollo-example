import { useQuery } from '@apollo/client';
import { CONTINENTS } from '../gql/CONTINENTS';

export function Continents(): JSX.Element {
  const { data, loading, networkStatus } = useQuery(CONTINENTS, {
    notifyOnNetworkStatusChange: true,
    fetchPolicy: 'cache-and-network',
    onError: (error) => {
      console.log(error);
    },
  });

  console.log(networkStatus);

  if (!data && loading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {data.continents.map((continent: { code: string; name: string }) => (
        <li key={continent.code}>{continent.name}</li>
      ))}
    </ul>
  );
}
