import React from "react";
import { Card } from "@shopify/polaris";
import "./ErrorCard.css";

export function ErrorCard(props) {
  return (
    <Card>
      <div className="text-container">
        <h1>Oops!</h1>
        <div className="message">{props.message}</div>
      </div>
    </Card>
  );
}
