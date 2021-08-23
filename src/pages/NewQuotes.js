import React from "react";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const addQuoteHandler = (data) => {
    console.log(data);
  };
  return (
    <React.Fragment>
      <h1>Add a Quote</h1>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </React.Fragment>
  );
};

export default NewQuote;
