import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import CardList from './CardList.js';
import SearchBar from './SearchBar.js';
import Pagination from './Pagination.js';


const apiKey = '9eddd39329744673ae4decd80dbb8d7f';
const apiUrl = `https://newsapi.org/v2/everything?q=apple&from=2024-08-02&to=2024-08-02&sortBy=popularity&apiKey=${apiKey}`;

function App() {
  
  const [news, setNews] = useState([]);
  const [searchFilter, setSearchFilter] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(10);

  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        setNews(response.data.articles);
        setSearchFilter(response.data.articles);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  

  const handleSearch = (event) => {
    event.preventDefault();
    const searchTerm = event.target.elements.search.value.toLowerCase();
    const filteredNews = news.filter(article => article.title.toLowerCase().includes(searchTerm));
    setSearchFilter(filteredNews);
    const queryString = searchTerm.trim().length > 0 ? `?search=${searchTerm}` : '';
    window.history.replaceState(null, null, queryString);
  };

  

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = searchFilter.slice(indexOfFirstArticle, indexOfLastArticle);

  return (
    <div className="App">
      <SearchBar handleSearch={handleSearch} />
      <CardList news={currentArticles} />
      <Pagination
        articlesPerPage={articlesPerPage}
        totalArticles={searchFilter.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
