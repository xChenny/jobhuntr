// libraries
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// styles
import "./styles/App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

// components
import Navbar from "./components/navbar";

// views
import ErrorPage from "./views/error/Error";
import HomePage from "./views/home/Home";
import DashboardPage from "./views/dash";
import AppliedPage from "./views/apps";
import InterviewsPage from "./views/interviews";
import OffersPage from "./views/offers";
import OpportunitiesPage from "./views/opportunity";
import ComparePage from "./views/compare/Compare";

// add icons to fa library
library.add(faTimes);

const App = () => (
  <Router>
    <div className="App">
      <Route path="/" component={Navbar} />
      <Route exact path="/" component={HomePage} />
      <Route path="/error" component={ErrorPage} />
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/applied" component={AppliedPage} />
      <Route path="/interviews" component={InterviewsPage} />
      <Route path="/offers" component={OffersPage} />
      <Route path="/opportunities" component={OpportunitiesPage} />
      <Route path="/compare" component={ComparePage} />
    </div>
  </Router>
);

export default App;
