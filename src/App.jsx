// libraries
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// styles
import "./styles/App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

// views
import ErrorPage from "./views/error/Error";
import HomePage from "./views/home/Home";
import DashboardPage from "./views/dash/Dash";
import AppliedPage from "./views/apps";
import InterviewsPage from "./views/interviews/Interviews";
import OffersPage from "./views/offers/Offers";
import OpportunitiesPage from "./views/opportunity/Opportunities";

// add icons to fa library
library.add(faTimes);

const App = () => (
  <Router>
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route path="/error" component={ErrorPage} />
      <Route path="/dashboard" component={DashboardPage} />
      <Route path="/applied" component={AppliedPage} />
      <Route path="/interviews" component={InterviewsPage} />
      <Route path="/offers" component={OffersPage} />
      <Route path="/opportunities" component={OpportunitiesPage} />
    </div>
  </Router>
);

export default App;
