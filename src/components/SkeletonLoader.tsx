// /src/components/SkeletonLoader.tsx
import React from "react";

const Skeleton: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`bg-gray-300 animate-pulse ${className}`} />
  );
};

export default Skeleton;
