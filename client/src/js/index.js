// index.js
import { Workbox } from "workbox-window";
import Editor from "./editor";
import "./database";
import "../css/style.css";

const main = document.querySelector("#main");
main.innerHTML = "";

const loadSpinner = () => {
  const spinner = document.createElement("div");
  spinner.classList.add("spinner");
  spinner.innerHTML = `
    <div class="loading-container">
      <div class="loading-spinner"></div>
    </div>
  `;
  main.appendChild(spinner);
};

const editor = new Editor();

if (!editor) {
  loadSpinner();
}

/// Check if service workers are supported
// if ("serviceWorker" in navigator) {
//   // Register workbox service worker
//   const workboxSW = new Workbox("/src-sw.js"); // Ensure the path is correct
//   workboxSW.register();
// } else {
//   console.error("Service workers are not supported in this browser.");
// }

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/src-sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
