import { NoteMessageEvent, WebMidi } from "webmidi";
import { useEffect, useState } from "react";

export default function App() {
  const [instruments, setInstrument] = useState<string[]>([]);
  const [playedNotes, setPlayedNotes] = useState<string[]>([]);
  const [currentNotes, setCurrentNotes] = useState<string[]>([]);
  function onEnabled() {
    // Inputs
    WebMidi.inputs.forEach((input) => {
      console.log("manu", input.manufacturer, "name", input.name);

      const checkInstrument = instruments.findIndex(
        (instrument) => instrument === input.name
      );
      if (checkInstrument >= 0) return;
      setInstrument((prevInstruments) => [...prevInstruments, input.name]);
    });

    // Outputs
    WebMidi.outputs.forEach((output) => {
      console.log(output.manufacturer, output.name);
    });
  }

  console.log("instruments", instruments);
  console.log("currentNotes", currentNotes);
  useEffect(() => {
    WebMidi.enable()
      .then(onEnabled)
      .catch((err) => alert(err));

    return () => {
      WebMidi.disable();
    };
  }, []);

  const keyLog = (e: NoteMessageEvent) => {
    // C2 - C7 (and more if user changes oct +/-)
    console.log(e.note.identifier);
    setPlayedNotes((prevNotes) => [...prevNotes, e.note.identifier]);
    setCurrentNotes((prevNotes) =>
      Array.from(new Set([...prevNotes, e.note.identifier]))
    );
  };

  const clearKey = (e: NoteMessageEvent) => {
    const clearNote = `${e.note.identifier}`;
    console.log("key off", e.note.identifier, clearNote, currentNotes);
    setCurrentNotes((prevNotes) =>
      prevNotes.filter((note) => note !== clearNote)
    );
    console.log("clearing key");
  };

  useEffect(() => {
    if (instruments[0]) {
      const myInput = WebMidi.getInputByName(instruments[0]);
      myInput?.addListener("noteon", keyLog);
      myInput?.addListener("noteoff", clearKey);
    }
    return () => {
      if (instruments[0]) {
        const myInput = WebMidi.getInputByName(instruments[0]);
        myInput?.removeListener("noteon", keyLog);
        myInput?.removeListener("noteoff", clearKey);
      }
    };
  }, [instruments]);

  return (
    <div className="App">
      <h1>MIDI Sandbox</h1>
      <h2>Current Note: {currentNotes.join(", ")}</h2>
      {playedNotes.map((note, index) => (
        <h4 key={`${index}-${note}`}>{note}</h4>
      ))}
    </div>
  );
}
