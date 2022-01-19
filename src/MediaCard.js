import React from "react";
import { Link } from "react-router-dom";
import ShareButton from "./ShareButton";
import LikeButton from "./LikeButton";
import "./MediaCard.css";
import { Card } from "@shopify/polaris";

export function MediaCard(props) {
  const src =
    props.mediaItem.media_type === "image"
      ? props.mediaItem.url
      : props.mediaItem.thumbnail_url;

  return (
    <div>
      <Card>
        <Link to={"/" + props.mediaItem.date}>
          <img
            width="100%"
            height="300px"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            src={src}
            alt={props.mediaItem.title}
          />
        </Link>
        <div className="text-container">
          <h1>{props.mediaItem.title}</h1>
          <p className="date">{props.mediaItem.date}</p>
          <p className="description">{props.mediaItem.explanation}</p>
          <div className="icon-container">
            <ShareButton
              mediaItem={props.mediaItem}
              key={props.mediaItem.date}
            />
            <LikeButton />
          </div>
        </div>
      </Card>
    </div>
  );
}
