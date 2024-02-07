import React from "react";
import Stack from "../Stack/Stack";
import KeyboardKeyWhite from "./KeyboardKeyWhite";
import { generateKeysByOctaveInOrder } from "../../utils/music-keyboard";

type Props = {};

const KeyboardUI = (props: Props) => {
  const keys = generateKeysByOctaveInOrder();
  const baseNotes = Object.keys(keys);
  return (
    <div style={{ position: "fixed", bottom: 0, left: 0, zIndex: 420 }}>
      <Stack>
        {baseNotes.map((baseNote) =>
          keys[baseNote].map((note) => (
            <KeyboardKeyWhite key={note} label={note} />
          ))
        )}
      </Stack>
    </div>
  );
};

export default KeyboardUI;
