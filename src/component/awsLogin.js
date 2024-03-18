// import { Amplify } from 'aws-amplify';

// import { withAuthenticator } from '@aws-amplify/ui-react';
// import config from './amplifyconfiguration.json';
import  axios  from 'axios';
import { useEffect, useState } from 'react';
// Amplify.configure(config);

 function AWSLogin() {
  const [message, setMessage] = useState()
  useEffect(()=>{
    async function fetchData(){
      const data = await axios.get('https://vvxjz6rz-3000.inc1.devtunnels.ms/')
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

// app.get('/', cors({
//   origin: 'https://master.d2ly27nu4njq4.amplifyapp.com/',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }), (req, res, next) => {
//   next()
// }, (req,res)=>{
//   return res.status(200).json({message:"Hello from server!"})
// } );