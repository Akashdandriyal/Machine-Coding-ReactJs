import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestionsCache, setSuggestionsCache] = useState({});

  useEffect(() => {
    const timeoutId = setTimeout(getSuggestions, 300);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchText]);

  const getSuggestions = async () => {
    if (searchText === "") {
      setSuggestions([]);
      return;
    }

    if (suggestionsCache[searchText]) {
      setSuggestions(suggestionsCache[searchText]);
      return;
    }

    try {
      const result = await axios.get(
        `https://dummyjson.com/recipes/search?q=${searchText}`
      );
      setSuggestions(result.data?.recipes);
      setSuggestionsCache((prev) => ({
        ...prev,
        [searchText]: result.data?.recipes,
      }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="heading">Autocomplete Search Bar</h1>
      <div className="container">
        <input
          type="text"
          placeholder="Search..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        {showSuggestions && (
          <div className="suggestions-container">
            {suggestions.map((suggestion, index) => (
              <span className="suggestion" key={index}>
                {suggestion.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
