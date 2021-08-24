import { Redirect, Route, Switch } from "react-router-dom";

import AllQuotes from "./pages/AllQuotes";
import QuoteDetails from "./pages/QuoteDetails";
import NewQuote from "./pages/NewQuotes";
import Layout from "./components/layout/Layout";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>
        <Route path="/quotes" exact>
          <p>ALL QUOTES</p>
          <AllQuotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <p>QUOTE DETAILS</p>
          <QuoteDetails />
        </Route>
        <Route path="/add-quote">
          <p>ADD A QUOTE</p>
          <NewQuote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
