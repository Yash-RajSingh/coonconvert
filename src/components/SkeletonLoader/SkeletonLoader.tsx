import { SkeletonTitle } from "./SkeletonLoaderElements";

interface SkeletonLoaderProps {
  height?: string;
  width?: string;
}

const SkeletonLoader = ({ height, width }: SkeletonLoaderProps) => {
  return <SkeletonTitle height={height} width={width} />;
};

export default SkeletonLoader;
