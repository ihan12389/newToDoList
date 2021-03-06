// 라우터 기능을 담당하는 컴포넌트
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";
import Profile from "routes/Profile";
import Navigation from "components/Navigation";

const AppRouter = ({ userObj, refreshUser }) => {
  const num = Math.ceil((Math.random().toFixed(2) * 100) % 20) + 1;
  var sectionStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/img/${num}.jpg)`,
  };

  return (
    <Router>
      <Switch>
        {Boolean(userObj) ? (
          <div className="routerContainer" style={sectionStyle}>
            <Navigation />
            <Route exact path="/">
              <Home userObj={userObj} />
            </Route>
            <Route exact path="/profile">
              <Profile userObj={userObj} refreshUser={refreshUser} />
            </Route>
          </div>
        ) : (
          <Route exact path="/">
            <Auth />
          </Route>
        )}
      </Switch>
    </Router>
  );
};

export default AppRouter;
