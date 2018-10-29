import Rebase from "re-base";
import firebase from "firebase";

export const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC8ZnoxnKQPD43YTsgAKyWQdWvPQ5rbujM",
  authDomain: "spaceninja-book-list.firebaseapp.com",
  databaseURL: "https://spaceninja-book-list.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export default base;
