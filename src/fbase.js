// firebase의 기능 객체를 생성
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDqhAbpmAJ_DCPeIXPhg1c-paZV-EuxWpk",
  authDomain: "todolist-6597a.firebaseapp.com",
  projectId: "todolist-6597a",
  storageBucket: "todolist-6597a.appspot.com",
  messagingSenderId: "296773831836",
  appId: "1:296773831836:web:8c197e9acd68c464583159",
  measurementId: "G-WDLLK9G6NR",
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;
export const authService = firebase.auth();
export const dbService = firebase.firestore();
