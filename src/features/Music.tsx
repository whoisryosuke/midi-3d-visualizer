import React, { useEffect, useRef } from "react";
import { useInputStore } from "../store/input";
import * as Tone from "tone";

type Props = {};

const Music = (props: Props) => {
  const { input } = useInputStore();
  // Create a synth and connect it to the main output (your speakers)
  const synth = useRef<Tone.Synth | null>(null);
  const now = Tone.now();

  useEffect(() => {
    if (!synth.current) return;
    if (input.C1 || input.C2) {
      Tone.start();
      //play a middle 'C' for the duration of an 8th note
      synth.current.triggerAttackRelease("C2", "8n", now);
    }
  }, [input]);

  useEffect(() => {
    if (!synth.current) {
      synth.current = new Tone.Synth().toDestination();
    }
  }, []);

  return <></>;
};

export default Music;
