import { Fragment } from 'react';
import { useSelector } from 'react-redux';


import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';

function App() {
  const isAuthe = useSelector(state => state.auth.isAuth);

  return (
    <Fragment>
      <Header />
      {!isAuthe && < Auth />}
      {isAuthe && < UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
