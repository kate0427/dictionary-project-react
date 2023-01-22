import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexelsAPIKey = `WJcmpZQSSmYN9qV0kRWJZl0fEironnrMXZg0RakE6UuWEYzvGy74akks`;
    let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsAPIKey}` };
    axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className=" container Dictionary">
      <section>
        <form onSubmit={search}>
          {" "}
          <div className="row">
            <div className="col-sm text-center">
              <input
                className="searchbar"
                type="search"
                onChange={handleKeywordChange}
                placeholder="Type the word..."
                style={{ width: "80%" }}
              ></input>
            </div>
            <div className="col-sm text-center">
              <input
                type="submit"
                className="searchbutton "
                value="Search🔍"
                style={{ width: "50%" }}
              ></input>
            </div>{" "}
          </div>
        </form>
      </section>
      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
