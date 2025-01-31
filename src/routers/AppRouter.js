import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import {
  AddRecipeView,
  Nav,
  HomeView,
  RecipeOverview,
  RecipesView,
  ScrollToTop,
  ShoppingListView,
  ComingSoon,
  FavoritesView,
  AccountView,
  StorageHandler,
  LoginView,
  LoginRequiredView,
} from "../config/C4";

const checkLoggedIn = (callback) => {
  const user = StorageHandler.get("user");
  if (user) callback(true);
  else callback(false);
};

const AppRouter = () => {
  const [loggedIn, setLoggedIn] = useState(null);

  useEffect(() => {
    if (loggedIn === null) checkLoggedIn(setLoggedIn);
  }, [loggedIn]);

  return (
    <Router>
      <ScrollToTop />
      {loggedIn && <Nav />}
      <div className={loggedIn ? "viewContainer" : ""}>
        <Switch>
          {loggedIn ? (
            <>
              <Route path="/" exact component={HomeView} />
              <Route path="/recepten" exact component={RecipesView} />
              <Route path="/recept-toevoegen" exact component={AddRecipeView} />
              <Route path="/recept/:id" exact component={RecipeOverview} />
              <Route
                path="/boodschappenlijstjes"
                exact
                component={ShoppingListView}
              />
              <Route path="/onlangs-toegevoegd" exact component={ComingSoon} />
              <Route path="/uitproberen" exact component={ComingSoon} />
              <Route path="/favorieten" exact component={FavoritesView} />
              <Route path="/account" exact component={AccountView} />
            </>
          ) : (
            <>
              <Route path="/" exact component={LoginView} />
              {window.location.pathname !== '/' && (<Route path="*" component={LoginRequiredView} />)}
            </>
          )}
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
