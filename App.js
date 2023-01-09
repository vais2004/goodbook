import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  history: [
    { name: "The Discovery of India", rating: "4/5" },
    { name: "The Argumentative Indian", rating: "3.6/5" }
  ],

  comic: [
    {
      name: "Maus",
      rating: "5/5"
    },
    {
      name: "Saga",
      rating: "4.8/5"
    }
  ],
  javascript: [
    { name: "Eloquent JavaScript, 3rd Edition", rating: "4/5" },
    { name: "JavaScript: The Definitive Guide", rating: "3.4/5" }
  ],

  religion: [
    {
      name: "hindu mythology",
      rating: "5/5"
    },
    {
      name: "Bhagwat Gita",
      rating: "4.6/5"
    }
  ],
  business: [
    {
      name: "zero to one",
      rating: "3.5/5"
    },
    {
      name: "rich dad poor dad",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 📚GOODBOOKS📚 </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        my favorite books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
