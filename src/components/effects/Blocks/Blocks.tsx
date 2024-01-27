import React, { useEffect, useState } from "react";
import { Note, useInputStore } from "../../../store/input";
import BlockMesh from "./BlockMesh";

type BlockSpawn = {
  note: Note;
  time: number;
};

type Props = {};

const Blocks = (props: Props) => {
  const [spawnPool, setSpawnPool] = useState<BlockSpawn[]>([]);
  const { input } = useInputStore();

  const addBlock = (newBlock: BlockSpawn) => {
    setSpawnPool((prevSpawns) => [...prevSpawns, newBlock]);
  };

  useEffect(() => {
    if (input.C1 || input.C2) {
      addBlock({
        note: "C2",
        time: Date.now(),
      });
    }
  }, [input]);

  return (
    <>
      {spawnPool.map((spawn) => (
        <BlockMesh />
      ))}
    </>
  );
};

export default Blocks;
