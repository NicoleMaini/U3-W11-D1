import { configureStore } from "@reduxjs/toolkit";
import changeState from "../reducers"; // qui importiamo il nostro oggetto stato e la funzione per configurarlo

const store = configureStore({
  reducer: changeState,
});

export default store; // qui esportiamo il nostro stato in modo che sia accessibile
