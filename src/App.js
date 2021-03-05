import SearchBar from './search';
import React, { useState, useEffect } from "react";
import Axios from "axios";
import './App.scss';

function App() {
  const [datas, setDatas] = useState([]);
  const { search } = window.location;
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');


  const fetchData = async () => {
    const { data } = await Axios.get(
      "https://jsonplaceholder.typicode.com/users/"
    );
    const datas = data;
    setDatas(datas);
    console.log(datas);
  };

  useEffect(() => {
    fetchData();
  }, []);


  const filterDatas = (datas, query) => {
    if (!query) {
      return datas;
    }

    return datas.filter((data) => {
      const dataName = data.name.toLowerCase();
      const userName = data.username.toLowerCase();
      const fullName = dataName + userName;
      return fullName.includes(query);
    });
  };

  const filteredDatas = filterDatas(datas, query);

  return (
    <div>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      <ul>
        {filteredDatas.map((datas) => (
          <li key={datas.id}>{datas.name}({datas.username}) </li>
        ))}
      </ul>
    </div>
  );
}

export default App;