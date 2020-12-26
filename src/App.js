import React, { useState } from 'react';
import Axios from 'axios';
import './App.css';
import List from './component/List';
import Pagination from './component/Pagination';
import Information from './component/Information';
import { Route } from 'react-router-dom';
const App = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(3);
  const fetchData = () => {
    Axios.get('https://api.spoonacular.com/recipes/complexSearch?number=20&apiKey=8a356e1eb8b7433e8c353974801a3aa2').then(
      (res) => {
        setData(res.data.results)
      }
    ).catch(
      (err) => {
        console.log(err)
      }
    )
  }

  React.useEffect(() => {
    fetchData();
  }, [])

  const handlePageChange = (key) => {
    setCurrentPage(key)
  }
  // Get current posts
  const indexOfLastRecipie = currentPage * dataPerPage;
  const indexOfFirstRecipie = indexOfLastRecipie - dataPerPage;
  const currentRecipie = data.slice(indexOfFirstRecipie, indexOfLastRecipie);
  return (
    <div className="body">
      <div className="container">
        <Route exact path='/'>
          <h1 style={{ textAlign: 'center' }}>List of Recipies</h1>
          <List data={currentRecipie} />
          <Pagination dataPerPage={dataPerPage} totalData={data.length} handlePageChange={handlePageChange} />
        </Route>
        <Route path="/recipie/:id">
          <Information />
        </Route>
      </div>
    </div>
  );
}

export default App;
