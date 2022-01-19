import React from "react";
import { Card } from "@shopify/polaris";

export function ErrorCard(props) {
  return (
    <Card>
      <div className="text-container">
        <h1>Oops!</h1>
        <div className="description">{props.message}</div>
      </div>
    </Card>
  );
}
