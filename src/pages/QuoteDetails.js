import React, { useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const QuoteDetails = () => {
  const {
    sendRequest,
    error,
    status,
    data: loadedQuote,
  } = useHttp(getSingleQuote, true);

  const match = useRouteMatch();
  // const location = useLocation();
  // console.log(location);
  console.log(match);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    sendRequest(params.quoteId);
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <div className="centered focused">{error}</div>;
  }

  if (!loadedQuote.text) {
    return <p>No quote found!</p>;
  }
  return (
    <React.Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
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
