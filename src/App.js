import { useEffect, useState } from "react";
import axios from "axios";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from "react-loader-spinner";
import "./App.css";
import { MediaCard } from "./MediaCard";
import { ErrorCard } from "./ErrorCard";
import "@shopify/polaris/build/esm/styles.css";

const dayjs = require("dayjs");

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [mediaItems, setMediaItems] = useState([]);
  const [hasError, setHasError] = useState(false);

  const now = dayjs();
  const today = now.format("YYYY-MM-DD");
  const _25DaysAgo = now.subtract(24, "day").format("YYYY-MM-DD");

  const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${_25DaysAgo}&end_date=${today}&thumbs=true`;

  function onResponse(response) {
    response.data.reverse();
    setMediaItems(response.data);
  }

  function onError(e) {
    setHasError(true);
  }

  useEffect(() => {
    axios.get(url).then(onResponse, onError);
  }, [url]);

  const errorCard = hasError ? (
    <ErrorCard message="Something went wrong. Try again later!" />
  ) : null;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Spacetagram:</h1>
        <h3>Image-sharing from the final frontier</h3>
        <p>Brought to you by NASA's Astronomy Photo of the Day (APOD) API</p>
      </header>
      {mediaItems.length === 0 && !hasError ? (
        <div className="loader">
          <TailSpin
            color="#96bf48"
            arialLabel="loading"
            width="100"
            height="100"
          />
        </div>
      ) : undefined}
      <div>
        {mediaItems.map((mediaItem) => {
          return <MediaCard mediaItem={mediaItem} key={mediaItem.date} />;
        })}
      </div>
      {errorCard}
    </div>
  );
}

export default App;
