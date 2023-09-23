import React from 'react';
import { useQuery, gql } from '@apollo/client';
import LoginForm from './LoginForm';
import Home from './Home/Home';
import Loading from './Loading/Loading';
import ScreenError from './ScreenError/ScreenError';
import { useAdmin } from './context/AdminContext';

function App() {
  const { isLoged } = useAdmin();

  const { loading, data, error } = useQuery(gql`
  query{
    testConnection
  }
`);
  // eslint-disable-next-line no-console
  console.log(data ? data.testConnection : 'Loading');
  if (error) return <ScreenError errorCode={error.code} msgError={error.message} />;
  if (loading) return <Loading />;

  return (
    <div>
      {isLoged() ? <Home /> : <LoginForm />}
    </div>
  );
}

export default App;
