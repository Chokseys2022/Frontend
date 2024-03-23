import React, { useState, useEffect } from "react";
import axios from 'axios';

function WordSearch() {
  const [word, setWord] = useState("");
  const [wordData, setWordData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError(null); // Reset error state
    try {
      const response = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      setWordData(response.data);
    } catch (error) {
      console.error('Request failed:', error);
      setError('Request failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (word !== "") {
      fetchData();
    }
  };

  return (
    <div className="dictionary">
      <h1>Word Information</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Enter a word" 
          value={word} 
          onChange={(e) => setWord(e.target.value)} 
        />
        <button className="dict-button" type="submit">Search</button>
      </form>
  
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {wordData && (
        <div>
          <h2>{wordData[0].word}</h2>
          <p>Phonetic: {wordData[0].phonetic}</p>
          <p>Origin: {wordData[0].origin}</p>
          <p>Meanings:</p>
          <ul>
            {wordData[0].meanings.map((meaning, index) => (
              <li key={index}>
                <p>Part of Speech: {meaning.partOfSpeech}</p>
                <p>Definition: {meaning.definitions[0].definition}</p>
                {meaning.definitions[0].example && (
                  <p>Example: {meaning.definitions[0].example}</p>
                )}
              </li>
            ))}
          </ul>
         
        </div>
      )}
    </div>
  );}
  

export default WordSearch;
