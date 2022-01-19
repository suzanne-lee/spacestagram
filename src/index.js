import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import PicturePage from "./PicturePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
          <p>
            Shopify Front-end Developer Intern Challenge - Summer 2022
            <br />✨
            <a
              href="https://github.com/suzanne-lee/spacestagram"
              target="_blank"
              rel="noreferrer"
            >
              Suzanne Lee
            </a>
            ✨
          </p>
        </footer>
      </Frame>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
