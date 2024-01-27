import { MeshProps } from "@react-three/fiber";

type Props = Partial<MeshProps> & {};

const BlockMesh = ({ ...props }: Props) => {
  return (
    <mesh {...props}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshPhysicalMaterial color={"blue"} />
    </mesh>
  );
};
export default BlockMesh;
