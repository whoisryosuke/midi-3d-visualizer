import KeyboardInput from "./Keyboard";
import { GamepadInput } from "./Gamepad";

type Props = {
  disableGamepad?: boolean;
  disableKeyboard?: boolean;
  disableNavigation?: boolean;
};

const InputManager = ({ disableGamepad, disableKeyboard }: Props) => {
  return (
    <>
      {!disableKeyboard && <KeyboardInput />}
      {!disableGamepad && <GamepadInput />}
    </>
  );
};

InputManager.defaultProps = {
  disableGamepad: false,
  disableKeyboard: false,
};

export default InputManager;
