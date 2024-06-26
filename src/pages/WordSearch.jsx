//imports
import React, { useState } from "react";
import axios from "axios";

//State variables for word input, word data, loading state, and error handling
function WordSearch() {
  const [word, setWord] = useState("");
  const [wordData, setWordData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //funct to fetch data using axios from an external API -https://dictionaryapi.dev/
  const fetchData = async () => {
    setLoading(true);
    setError(null); // Reset error state
    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      setWordData(response.data); //setting the word data with response from api
    } catch (error) {
      console.error("Request failed:", error); //error if it fails
      setError("Request failed. Please try again.");
    } finally {
      setLoading(false); //loading state is set to false by default
    }
  };

  //funct to manage form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); //prevent form default behaviour or reloading entire page
    if (word !== "") {
      fetchData();
    }
  };
  
  //funct to reset state
  const handleRefresh = () => {
    setWord("");
    setWordData(null);
    setError(null);
  };

  //form specifics
  return (
    <div className="dictionary">
      <h1>Look up Word Definition</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a word"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button className="dict-button" onClick={handleSubmit}>Search</button>
        <button className="dict-button" type="button" onClick={handleRefresh}>Refresh</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {wordData && (
        <div>
          <h2>{wordData[0].word}</h2> <br />
          <p>Phonetic: {wordData[0].phonetic}</p>
          <br />
          <p>Origin: {wordData[0].origin}</p>
          <p>Meanings:</p>
          <br />
          <ul>
            {wordData[0].meanings.map((meaning, index) => (
              <li key={index}>
                <p>Part of Speech: {meaning.partOfSpeech}</p>
                <br />
                <p>Definition: {meaning.definitions[0].definition}</p>{" "}
                <br />
                {meaning.definitions[0].example && (
                  <p>Example: {meaning.definitions[0].example}</p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default WordSearch;
//----------------------------------------END CODE-------------------------------------//