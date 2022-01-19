import React, { useState } from "react";
import "./MediaCard.css";
import { Icon } from "@shopify/polaris";
import { HeartMajor } from "@shopify/polaris-icons";

export default function LikeButton(props) {
  const [liked, setLiked] = useState(false);

  function handleLike(e) {
    e.preventDefault();

    if (liked) {
      setLiked(false);
    } else {
      setLiked(true);
    }
  }

  return (
    <button onClick={handleLike}>
      <Icon source={HeartMajor} color={liked ? "critical" : "subdued"} />
    </button>
  );
}
