import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Pascale", text: "Learning React is Awesome!" },
  { id: "q2", author: "Dani", text: "Learning Symfony is Awesome!" },
  {
    id: "q3",
    author: "Johnathan",
    text: "Learning Multiplication is Awesome!",
  },
];

const AllQuotes = () => {
  return (
    <React.Fragment>
      <h1>All Quotes</h1>
      <QuoteList quotes={DUMMY_QUOTES} />
    </React.Fragment>
  );
};

export default AllQuotes;
