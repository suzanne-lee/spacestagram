import {
  Page,
  Card,
  Button,
  Modal,
  Stack,
  TextContainer,
  TextField,
  Toast,
} from "@shopify/polaris";
import "./MediaCard.css";
import { Icon } from "@shopify/polaris";
import { HeartMajor } from "@shopify/polaris-icons";
import { Link } from "react-router-dom";
import React, { useCallback, useRef, useState } from "react";

export function MediaCard(props) {
  const [liked, setLiked] = useState(false);
  const [active, setActive] = useState(false);
  const [toastActive, setToastActive] = useState(false);

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

  const node = useRef(null);

  const handleClick = useCallback(() => {
    node.current && node.current.input.focus();
    navigator.clipboard
      .writeText(window.location.origin + "/" + props.mediaItem.date)
      .then(() => setToastActive(true));
  }, []);

  const handleFocus = useCallback(() => {
    if (node.current == null) {
      return;
    }
    node.current.input.select();
  }, []);

  const toggleModal = useCallback(
    () => setActive((active) => !active),
    [active]
  );
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
        <img
          alt=""
          width="100%"
          height="300px"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          src={src}
          alt={props.mediaItem.title}
        />
        <div className="text-container">
          <h1>{props.mediaItem.title}</h1>
          <div className="date">{props.mediaItem.date}</div>
          <div className="description">{props.mediaItem.explanation}</div>
          <div className="icon-container">
            <span>
              <Modal
                title="Get a shareable link"
                open={active}
                activator={activator}
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
                        <p>Share this post!</p>
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
                            Copy link
                          </Button>
                        }
                      />
                    </Stack.Item>
                  </Stack>
                </Modal.Section>

                {toastMarkup}
              </Modal>
              <button onClick={handleLike}>
                <Icon
                  source={HeartMajor}
                  color={liked ? "critical" : "subdued"}
                />
              </button>
            </span>
            <Link to={"/" + props.mediaItem.date}>Click here</Link>
          </div>
        </div>
      </Card>
    </div>
  );
}
