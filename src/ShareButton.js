import React, { useCallback, useRef, useState } from "react";
import "./MediaCard.css";
import {
  Button,
  Modal,
  Stack,
  TextContainer,
  TextField,
  Toast,
} from "@shopify/polaris";

export default function ShareButton(props) {
  const [modalActive, setModalActive] = useState(false);
  const [toastActive, setToastActive] = useState(false);

  const src =
    props.mediaItem.media_type === "image"
      ? props.mediaItem.url
      : props.mediaItem.thumbnail_url;

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

  const toggleModal = useCallback(
    () => setModalActive((modalActive) => !modalActive),
    []
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
      <Modal
        title="Get a shareable link"
        open={modalActive}
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
                refs={node}
                label="Link"
                onFocus={handleFocus}
                value={window.location.origin + "/" + props.mediaItem.date}
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
    </div>
  );
}
