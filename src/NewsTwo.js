import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './News.css'; 

const NewsTwo = () => {
  const [articles, setArticles] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [intervalId, setIntervalId] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const apiKey = 'aebd4f291e374e5cbf7fb31dcfc6a00b';
    const url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`;
    

    axios.get(url)
      .then(response => {
        console.log('Fetched articles:', response.data.articles); // Debugging
        setArticles(shuffleArray(response.data.articles));
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error);
        setLoading(false);
      });

    const id = setInterval(() => {
      if (!isHovered) { // Check if not hovered
        setCurrentIndex(prevIndex => (prevIndex + 1) % articles.length);
      }
    }, 11000);

    setIntervalId(id);

    return () => clearInterval(id);
  }, [articles.length, isHovered]);

  const shuffleArray = (array) => {
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const prevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + articles.length) % articles.length);
  };

  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % articles.length);
  };

  // Handler to start or stop the slideshow on hover
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    console.log('Current index:', currentIndex); // Debugging
  }, [currentIndex]);

  return (
    <div 
      className="news-container" 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      <h1>Tech</h1>
      {loading && <p>News 2 Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {articles.length === 0 && !loading && !error && <p>No articles found.</p>}
      {articles.length > 0 && !loading && !error && (
        <div className="slideshow-container">
          <button className="nav-button prev" onClick={prevSlide}>‹</button>
          <div className="slide">
            <h2>{articles[currentIndex]?.title || 'No title available'}</h2>
            <p><strong>Author:</strong> {articles[currentIndex]?.author || 'Unknown'}</p>
            <p>{articles[currentIndex]?.description || 'No description available.'}</p>
          </div>
          <button className="nav-button next" onClick={nextSlide}>›</button>
        </div>
      )}
    </div>
  );
};

export default NewsTwo;
