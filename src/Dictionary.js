import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    //documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
    </div>
  );
}
