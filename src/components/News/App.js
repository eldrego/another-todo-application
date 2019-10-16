import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import NewsItem from './NewsItem';
import CountySelect from './CountySelect';

const App = () => {
  const [news, setNews] = useState([]);
  const [country, setCountry] = useState('ng');
  const [url, setUrl] = useState(
    `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.REACT_APP_APIKEY}`
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await Axios(url);
        setNews(result.data.articles);
      } catch (error) {
        alert(error);
      }
    };
    fetchData();
  }, [url]);

  const changeCountry = () => {
    setUrl(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.REACT_APP_APIKEY}`);
  };

  const handleChange = (event) => {
    event.preventDefault();
    setCountry(event.target.value);
  };

  return (
    <div className="container">
      News Headlines - Select Country
      <CountySelect
        handleChange={handleChange}
        changeCountry={changeCountry}
        country={country}
      />
      <div className="row mt-4">
        {news.map((newsItem) => {
          return (
            <NewsItem key={newsItem.url} news={newsItem} />
          );
        })}
      </div>
      <small>
        News feed gotten via
        <a
          className="link-reference"
          href="https://newsapi.org"
          target="_blank"
          rel="noopener noreferrer">
          NewsAPI
        </a>
      </small>
    </div>
  );
};

export default App;
