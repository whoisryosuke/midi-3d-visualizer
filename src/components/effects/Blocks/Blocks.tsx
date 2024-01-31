import React, { useEffect, useState } from "react";
import throttle from "lodash.throttle";
import { Note, useInputStore } from "../../../store/input";
import BlockMesh from "./BlockMesh";
import { DESTROY_TIME } from "../../../constants/block";

type BlockSpawn = {
  note: Note;
  time: number;
};

type Props = {};

const Blocks = (props: Props) => {
  const [spawnPool, setSpawnPool] = useState<BlockSpawn[]>([]);
  const { input } = useInputStore();
  const now = Date.now();

  // console.log("spawnPool", spawnPool);

  const addBlock = (newBlock: BlockSpawn) => {
    setSpawnPool((prevSpawns) => [...prevSpawns, newBlock]);
  };

  useEffect(() => {
    if (input.C1 || input.C2) {
      throttle(
        () =>
          addBlock({
            note: "C2",
            time: Date.now(),
          }),
        1000
      );
    }
  }, [input]);

  useEffect(() => {
    const removeBlocks = () => {
      const now = Date.now();
      setSpawnPool((prevSpawns) => {
        if (prevSpawns.length <= 0) return prevSpawns;
        const safePool = prevSpawns.filter((spawn) => {
          return now - spawn.time < DESTROY_TIME;
        });

        return safePool;
      });
    };

    const interval = setInterval(removeBlocks, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      {spawnPool.map((spawn) => (
        <BlockMesh key={spawn.time} {...spawn} now={now} />
      ))}
    </>
  );
};

export default Blocks;
