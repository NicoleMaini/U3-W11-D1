import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouritesReducer from "../reducers/favouritesReducer"; // qui importiamo il nostro oggetto stato e la funzione per configurarlo
import companiesReduces from "../reducers/companiesReducer";

const unifiefReducer = combineReducers({
  favourites: favouritesReducer,
  companies: companiesReduces,
});

const store = configureStore({ reducer: unifiefReducer });

export default store; // qui esportiamo il nostro stato in modo che sia accessibile
