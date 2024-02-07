import React from "react";
import Stack from "../Stack/Stack";
import KeyboardKeyWhite from "./KeyboardKeyWhite";
import { generateKeysByOctaveInOrder } from "../../utils/music-keyboard";
import KeyboardKeyBlackSet from "./KeyboardKeyBlackSet";

type Props = {};

const KeyboardUI = (props: Props) => {
  const keys = generateKeysByOctaveInOrder();
  const baseNotes = Object.keys(keys);
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        zIndex: 420,
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      <Stack>
        {baseNotes.map((baseNote) => {
          return (
            <div style={{ position: "relative" }}>
              <KeyboardKeyBlackSet />
              <Stack>
                {keys[baseNote].map((note) => (
                  <KeyboardKeyWhite key={note} label={note} />
                ))}
              </Stack>
            </div>
          );
        })}
      </Stack>
    </div>
  );
};

export default KeyboardUI;
