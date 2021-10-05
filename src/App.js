import Header from "./containers/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";
import "./App.css";
import { Tab } from "bootstrap";
import Table from "./containers/Table";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          
        
        <Switch>
          <Route exact path="/" component={ProductListing} />
          <Route exact path="/product/:country" component={ProductDetails} />
          <Route>404 Not Found! </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
