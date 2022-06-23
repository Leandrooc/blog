import React, { useState } from 'react';
import api from './axios/index.js';

function App() {
  const [request, setRequest] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  const login = async (emailAndPasswordObject) => {
    try {
      const { data: { token } } = await api.post('/login', emailAndPasswordObject)
      localStorage.setItem('token', token);
      setRequest("OK");
    } catch (e) {
      setRequest(e.response.data.message);
    }
  }

  const getUsers = async () => {
    const users = await api.get('/user', {
      headers: {
        Authorization: localStorage.getItem('token')
      }
    });
    setUsers(users.data);
  }

  return (
    <main>
      Email <input type="text" value={ email } onChange={ ({ target: { value }}) => setEmail(value) }  /> < br/>
      Senha <input type="text" value={ password } onChange={ ({ target: { value }}) => setPassword(value) }  /> < br/>

      <button onClick={ () => login(
    {
      "email": email,
      "password": password
    }) 
    } >
      Login
      </button>
      <h2>{ request }</h2>

      <button onClick={ () => getUsers() } >Get Users</button>

      <ul>
        {
          users.map((user) => 
            <li key={ user.id } >
              {
                `Id - ${user.id},
                 Name => ${user.displayName}`
              }
              <img width="50px" height="50px" src={ user.image } alt={ `foto de ${user.displayName}`} />
            </li>
          )
        }
      </ul>

    </main>
  );
}

export default App;
