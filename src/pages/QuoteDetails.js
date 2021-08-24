import React from "react";
import {
  useParams,
  Route,
  Link,
  useRouteMatch,
  useLocation,
} from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: "q1", author: "Pascale", text: "Learning React is Awesome!" },
  { id: "q2", author: "Dani", text: "Learning Symfony is Awesome!" },
  {
    id: "q3",
    author: "Johnathan",
    text: "Learning Multiplication is Awesome!",
  },
];

const QuoteDetails = () => {
  const match = useRouteMatch();
  // const location = useLocation();
  // console.log(location);
  console.log(match);
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>No quote found!</p>;
  }
  return (
    <React.Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path}>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </React.Fragment>
  );
};

export default QuoteDetails;
