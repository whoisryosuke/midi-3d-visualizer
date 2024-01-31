import { MeshProps } from "@react-three/fiber";
import { animated, easings, useSpring } from "@react-spring/three";
import { DESTROY_TIME } from "../../../constants/block";

type Props = Partial<MeshProps> & {
  time: number;
  now: number;
};

const BlockMesh = ({ now, time, ...props }: Props) => {
  const { position } = useSpring({
    config: { duration: DESTROY_TIME, easing: easings.easeInOutQuad },
    loop: true,
    from: {
      position: [0, 0, 0],
    },
    to: [{ position: [0, 0, 10] }],
  });
  return (
    <animated.mesh {...props} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial color={"blue"} />
    </animated.mesh>
  );
};
export default BlockMesh;
