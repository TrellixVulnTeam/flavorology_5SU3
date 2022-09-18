import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {
  AddRecipeView,
  Nav,
  HomeView,
  RecipeOverview,
  RecipesView,
  ScrollToTop,
  ShoppingListView,
  ComingSoon,
  FavoritesView
} from "../config/C4";

const AppRouter = () => {
  return (
    <Router>
      <ScrollToTop />
      <Nav />
      <div className="viewContainer">
        <Switch>
          <Route path="/" exact component={HomeView} />
          <Route path="/recepten" exact component={RecipesView} />
          <Route path="/recept-toevoegen" exact component={AddRecipeView} />
          <Route path="/recept/:id" exact component={RecipeOverview} />
          <Route path="/boodschappenlijstjes" exact component={ShoppingListView} />
          <Route path="/onlangs-toegevoegd" exact component={ComingSoon} />
          <Route path="/uitproberen" exact component={ComingSoon} />
          <Route path="/favorieten" exact component={FavoritesView} />
          <Route path="/account" exact component={ComingSoon} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
