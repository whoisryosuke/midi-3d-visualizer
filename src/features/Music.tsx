import React, { useEffect, useRef } from "react";
import { UserInputMap, useInputStore } from "../store/input";
import * as Tone from "tone";

type Props = {};

const Music = (props: Props) => {
  const notesPlaying = useRef<UserInputMap>({});
  const { input } = useInputStore();
  // Create a synth and connect it to the main output (your speakers)
  const synth = useRef<Tone.PolySynth | null>(null);

  useEffect(() => {
    const now = Tone.now();
    if (!synth.current) return;
    if (input.C3 && !notesPlaying.current.C3) {
      Tone.start();
      //play a middle 'C' for the duration of an 8th note
      //   synth.current.triggerAttackRelease("C2", "8n", now);
      console.log("playing note!");
      synth.current.triggerAttack("C3", now);
      notesPlaying.current.C3 = true;
    }
    if (!input.C3) {
      console.log("release!");
      synth.current.triggerRelease("C3", now);
      notesPlaying.current.C3 = false;
    }
  }, [input]);

  useEffect(() => {
    if (!synth.current) {
      synth.current = new Tone.PolySynth().toDestination();
    }
  }, []);

  return <></>;
};

export default Music;
