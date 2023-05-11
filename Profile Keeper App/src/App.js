import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import Userslist from './components/Users/UsersList';

function App() {
  const [userList, setUserList] = useState([]);

  function addUserHandle(uName, uAge) {
    setUserList((preValue) => {
      return [...preValue,
      { name: uName, age: uAge, id: Math.random().toString() }
      ];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHandle} />
      <Userslist users={userList} />
    </div>
  );
}

export default App;
