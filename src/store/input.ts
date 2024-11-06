import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { FocusId, FocusItem } from "../types";
import {
  UserInputMap,
  UserInputKeys,
  DEFAULT_USER_INPUT,
  DEFAULT_KEYBOARD_MAP,
  UserInputDeviceKeys,
  DEFAULT_GAMEPAD_MAP,
} from "../constants/input";
// import type {} from "@redux-devtools/extension"; // required for devtools typing

interface LibraryState {
  // Input
  input: UserInputMap;
  setInput: (key: UserInputKeys, input: boolean) => void;
  setInputs: (inputs: Partial<UserInputMap>) => void;
  keyboardMap: UserInputDeviceKeys;
  gamepadMap: UserInputDeviceKeys;
  setKeyboardMap: (map: UserInputDeviceKeys) => void;
  setGamepadMap: (map: UserInputDeviceKeys) => void;
}

export const useFocusStore = create<LibraryState>()(
  devtools((set) => ({
    input: DEFAULT_USER_INPUT,
    setInput: (key, input) =>
      set((state) => ({ input: { ...state.input, [key]: input } })),
    setInputs: (inputs) =>
      set((state) => ({ input: { ...state.input, ...inputs } })),

    keyboardMap: DEFAULT_KEYBOARD_MAP,
    gamepadMap: DEFAULT_GAMEPAD_MAP,
    setKeyboardMap: (keyboardMap) => set(() => ({ keyboardMap })),
    setGamepadMap: (gamepadMap) => set(() => ({ gamepadMap })),
  }))
);
