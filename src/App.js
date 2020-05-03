import React, {component} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Header'
import ArchiveNav from './Navigation'
import "./App.css";
import AddCustomer from "./components/AddCustomer";
import Customer from "./components/Customer";
import CustomersList from "./components/CustomersList";

function App() {
  return (
      <div className="" style={{marginLeft: "20px"}} >
      <Header />
        <ArchiveNav />
        <div className=" row" style={{textAlign: "center"}}>
          <Router>
            <div>
              <ul className="nav nav-pills page-menu">
              <li><Link to={"/customers"} className="">
                    Article Table
                  </Link></li>
                <li><Link to={"/customers"} className="">
                    Articles
                  </Link></li>
                  <li><Link to={"/add"} className="">New Article</Link></li>
              </ul>
              </div>
              <br/>
              <div className="appContent" style={{textAlign: "center"}}>
                <Switch>
                  <Route path="/add" component={AddCustomer} />
                  <Route path="/customers/:id" component={Customer} />
                  <Route path="/customers" component={CustomersList} />
                  <Route path="/" component={CustomersList} />
                </Switch>
            </div>
        </Router>
        </div>
    </div>
  );
}

export default App;
