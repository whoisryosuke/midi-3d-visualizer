import { BaseNote } from "../store/input";

// Our graph goes from 0 - FRAME_HEIGHT_TIME seconds
export const FRAME_HEIGHT_TIME = 10;

// It's technically 7, but arrays include 0 - so we reduce by 1
export const OCTAVES = 7;
export const NOTE_LETTERS: BaseNote[] = ["C", "D", "E", "F", "G", "A", "B"];
