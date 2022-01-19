import { Card } from "@shopify/polaris";
import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PicturePage() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const params = useParams();
  let [mediaItem, setMediaItem] = useState([]);
  let [hasError, setHasError] = useState(false);

  let url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${params.date}&thumbs=true`;

  const src =
    mediaItem.media_type === "image" ? mediaItem.url : mediaItem.thumbnail_url;

  function fxn(response) {
    setMediaItem(response.data);
  }

  function onError(e) {
    // console.error("e", Object.keys(e));
    // console.error("e", e.response);

    setHasError(true);
  }

  const mediaCard = !hasError ? (
    <React.Fragment>
      <Card>
        <div className="text-container">
          <h1>{mediaItem.title}</h1>
          <div className="date">{mediaItem.date}</div>
          <div className="description">{mediaItem.explanation}</div>
        </div>
      </Card>
      <img
        width="80%"
        style={{
          objectFit: "cover",
          objectPosition: "center",
          marginLeft: "10%",
          marginRight: "10%",
          paddingBottom: "3%",
        }}
        src={src}
        alt={mediaItem.title}
      />
    </React.Fragment>
  ) : null;

  const errorCard = hasError ? (
    <Card>
      <div className="text-container">
        <h1>Oops!</h1>
        <div className="description">
          We couldn't load the image for the given date.
        </div>
      </div>
    </Card>
  ) : null;

  useEffect(() => {
    axios.get(url).then(fxn, onError);
  }, [url]);

  return (
    <main style={{ padding: "1rem 0" }}>
      <Link
        to="/"
        style={{
          display: "block",
          marginLeft: "10%",
          marginTop: "5%",
          marginBottom: "3%",
        }}
      >
        &lt;&lt; Spacestagram Main Page
      </Link>
      {mediaCard}
      {errorCard}
    </main>
  );
}
