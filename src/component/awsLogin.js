// import { Amplify } from 'aws-amplify';

// import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
// import config from './amplifyconfiguration.json';
import  axios  from 'axios';
import { useEffect, useState } from 'react';
// Amplify.configure(config);

 function AWSLogin() {
  const [message, setMessage] = useState()
  useEffect(()=>{
    async function fetchData(){
      const data = await axios.get('http://44.215.124.44:3000/')
      setMessage(data.data.message)
    }
    fetchData()
  },[])
 
  return (
    <>
      <h1>{message} </h1>
      <button >Sign out</button>
    </>
  );
}

export default AWSLogin;