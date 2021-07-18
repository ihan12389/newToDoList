// 라우터 기능을 담당하는 컴포넌트
import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "routes/Auth";
import Home from "routes/Home";

const AppRouter = ({ userObj }) => {
  return (
    <Router>
      <Switch>
        {Boolean(userObj) ? (
          <div>
            <Route exact path="/">
              <Home userObj={userObj} />
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
