import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PicturePage from "./PicturePage";
import { AppProvider, Frame } from "@shopify/polaris";
import enTranslations from "@shopify/polaris/locales/en.json";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider i18n={enTranslations}>
      <Frame>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/:date" element={<PicturePage />}></Route>
          </Routes>
        </BrowserRouter>
        <footer>
          Shopify Front-end Developer Intern Challenge - Summer 2022
          <br />
          <a href="https://github.com/suzanne-lee/spacestagram" target="_blank">
            Suzanne Lee
          </a>
        </footer>
      </Frame>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
