import React, { PropsWithChildren } from "react";
import styled from "styled-components";
import { Note, useInputStore } from "../../store/input";

type StyledKeyboardKeyWhiteProps = PropsWithChildren<{
  pressed: boolean;
}>;

const StyledKeyboardKeyWhite = styled.div<StyledKeyboardKeyWhiteProps>(
  {
    width: 20,
    height: 100,
    backgroundColor: "rgba(255,255,255,0.5)",
    textAlign: "center",
    display: "flex",
    alignItems: "flex-end",
  },
  (props) =>
    props.pressed && {
      backgroundColor: "rgba(0,55,255,0.5)",
    }
);

const KeyboardKeyWhiteLabel = styled.span({
  fontSize: "10px",
  color: "black",
});

type Props = {
  label: Note;
};

const KeyboardKeyWhite = ({ label, ...props }: Props) => {
  const { input } = useInputStore();
  const isPressed = input[label];
  return (
    <StyledKeyboardKeyWhite pressed={isPressed} {...props}>
      {label && <KeyboardKeyWhiteLabel>{label}</KeyboardKeyWhiteLabel>}
    </StyledKeyboardKeyWhite>
  );
};

export default KeyboardKeyWhite;
