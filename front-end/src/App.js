import React,{useEffect, useState} from 'react'
import api from './api/api'
export default function App() {
  const [users, setUsers] = useState({name: 'my name is gurel. what`s your?'})
  const [name, setName] = useState('')
  useEffect(() => {
    const fetchData = async () => {
      const {data} = await api.get('/users')
      setUsers(data)
    }
    fetchData()
  },[users.name])

  const sendData = async () => {
    const trimName = name.trim()
    if (trimName.length > 0){
      const {data} = await api.post('/create', {name: name})
      console.log(data);
      setUsers(data)
    }

  }
  return (
    <div>
          <input 
            type="text"
            placeholder="send your name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <button type="submit" onClick={sendData}>send</button>
          <p>{name}</p>
          <h1>{users.name}</h1>
    </div>
  );
}