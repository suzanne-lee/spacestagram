import React, { useCallback, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./MediaCard.css";
import {
  Card,
  Button,
  Modal,
  Stack,
  TextContainer,
  TextField,
  Toast,
  Icon,
} from "@shopify/polaris";
import { HeartMajor } from "@shopify/polaris-icons";

export function MediaCard(props) {
  const [liked, setLiked] = useState(false);
  const [active, setActive] = useState(false);
  const [toastActive, setToastActive] = useState(false);

  const src =
    props.mediaItem.media_type === "image"
      ? props.mediaItem.url
      : props.mediaItem.thumbnail_url;

  function handleLike(e) {
    e.preventDefault();
    liked ? setLiked(false) : setLiked(true);
  }

  const node = useRef(null);

  const handleClick = useCallback(() => {
    node.current && node.current.input.focus();
    navigator.clipboard
      .writeText(window.location.origin + "/" + props.mediaItem.date)
      .then(() => setToastActive(true));
  }, [props.mediaItem.date]);

  const handleFocus = useCallback(() => {
    if (node.current == null) {
      return;
    }
    node.current.input.select();
  }, []);

  const toggleModal = useCallback(() => setActive((active) => !active), []);
  const activator = <Button onClick={toggleModal}>Share</Button>;

  const toggleActive = useCallback(
    () => setToastActive((toastActive) => !toastActive),
    []
  );

  const toastMarkup = toastActive ? (
    <Toast content="Copied!" onDismiss={toggleActive} />
  ) : null;

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
            <Modal
              title="Get a shareable link"
              open={active}
              onClose={toggleModal}
              primaryAction={{
                content: "Close",
                onAction: toggleModal,
              }}
            >
              <Modal.Section>
                <Stack vertical>
                  <Stack.Item>
                    <TextContainer>
                      <p>Share this image!</p>
                    </TextContainer>
                  </Stack.Item>
                  <Stack.Item fill>
                    <TextField
                      ref={node}
                      label="Link"
                      onFocus={handleFocus}
                      value={
                        window.location.origin + "/" + props.mediaItem.date
                      }
                      onChange={() => {}}
                      autoComplete="off"
                      connectedRight={
                        <Button primary onClick={handleClick}>
                          Copy Link
                        </Button>
                      }
                    />
                  </Stack.Item>
                </Stack>
              </Modal.Section>

              {toastMarkup}
            </Modal>
            {activator}
            <button onClick={handleLike}>
              <Icon
                source={HeartMajor}
                color={liked ? "critical" : "subdued"}
              />
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}
