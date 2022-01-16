import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import "@shopify/polaris/build/esm/styles.css";
import { MediaCard } from "./MediaCard";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from "react-loader-spinner";

let dayjs = require("dayjs");

function App() {
  let [mediaItems, setMediaItems] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;
  let now = dayjs();

  //  let now = new Date();
  let today = now.format("YYYY-MM-DD");
  console.log(today);

  //let yesterday = now.subtract(1, "day");
  //console.log(yesterday.format("YYYY-MM-DD"));

  let _25DaysAgo = now.subtract(24, "day").format("YYYY-MM-DD");
  console.log(_25DaysAgo);

  let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&start_date=${_25DaysAgo}&end_date=${today}&thumbs=true`;

  function fxn(response) {
    console.log(response);
    // response.data[0].date;
    // response.data[0].explanation;
    // response.data[0].hdurl;
    // response.data[0].title;
    response.data.reverse();
    setMediaItems(response.data);
  }

  function onError(e) {
    console.error("e", Object.keys(e));
    console.error("e", e.response);
  }

  useEffect(() => {
    axios.get(url).then(fxn, onError);
  }, [url]);

  /*
  useEffect(() => {
    axios.get(urlYesterday).then(fxn);
  }, []);*/

  return (
    <div className="App">
      <header className="App-header">
        <h1>Spacetagram:</h1>
        <h3>Image-sharing from the final frontier</h3>
        <p>Brought to you by NASA's Astronomy Photo of the Day (APOD) API</p>
      </header>
      {mediaItems.length === 0 ? (
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
    </div>
  );
}

export default App;
