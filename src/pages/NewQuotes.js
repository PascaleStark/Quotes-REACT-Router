import React from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";

const NewQuote = () => {
  const history = useHistory();
  const addQuoteHandler = (data) => {
    console.log(data);
    history.push("/quotes");
  };
  return (
    <React.Fragment>
      <h1>Add a Quote</h1>
      <QuoteForm onAddQuote={addQuoteHandler} />
    </React.Fragment>
  );
};

export default NewQuote;
