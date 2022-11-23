import React, { useEffect, useState } from "react";
const axios = require('axios');

const Axios = () => {
    const [data, setData] = useState(null);

    useEffect(()=>{
            axios.get("http://localhost:9000/articles").then((res)=>{
                console.log(res.data);
                setData(res.data.message); 
            });
    }, []);
  return (
    <div>
      <h1>bgb</h1>
      <h1>bgb</h1>
    </div>
  );
};

export default Axios;