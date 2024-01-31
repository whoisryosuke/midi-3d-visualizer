import React from "react";
import useKeyPress from "../hooks/useKeyPress";
import { useInputStore } from "../store/input";

type Props = {};

const Keyboard = (props: Props) => {
  const { input, setInput } = useInputStore();
  const pressed = () => {
    setInput("C1", true);
  };
  const released = () => {
    setInput("C1", false);
  };
  const {} = useKeyPress("d", () => {}, pressed, released);
  return <></>;
};

export default Keyboard;
