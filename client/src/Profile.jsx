import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";

function Profile() {
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let result = await axios.get("http://localhost:3000/data");
    setResult(result.data);
  };

  return (
    <div>
      <ul>
        <p>below is the result</p>
        {result.map((item) => (
          <li key={item.id}>
            {item.id}
            {item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
