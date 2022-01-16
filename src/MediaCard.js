import { Page, Card, Button } from "@shopify/polaris";
import "./MediaCard.css";
import { Icon } from "@shopify/polaris";
import { HeartMajor } from "@shopify/polaris-icons";
import { useState } from "react";

export function MediaCard(props) {
  let [liked, setLiked] = useState(false);

  const src =
    props.mediaItem.media_type == "image"
      ? props.mediaItem.url
      : props.mediaItem.thumbnail_url;

  function handleLike(e) {
    e.preventDefault();
    if (liked) {
      setLiked(false);
    } else {
      setLiked(true);
    }
  }

  return (
    <Card>
      <img
        alt=""
        width="100%"
        height="300px"
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        src={src}
      />
      <div className="text-container">
        <h1>{props.mediaItem.title}</h1>
        <div className="date">{props.mediaItem.date}</div>
        <div className="description">{props.mediaItem.explanation}</div>
        <div className="icon-container">
          <button onClick={handleLike}>
            <Icon source={HeartMajor} color={liked ? "critical" : "subdued"} />
          </button>
        </div>
      </div>
    </Card>
  );
}
