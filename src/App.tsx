import { NoteMessageEvent, WebMidi } from "webmidi";
import { useEffect, useState } from "react";
import "./App.css";
import MidiKeyboard from "./features/MidiKeyboard";
import Scene from "./components/Scene/Scene";
import Music from "./features/Music";
import Keyboard from "./features/Keyboard";

export default function App() {
  return (
    <div className="App">
      <MidiKeyboard />
      <Scene />
      <Music />
      <Keyboard />
    </div>
  );
}
