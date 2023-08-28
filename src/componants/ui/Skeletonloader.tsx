import React from "react";

function SkeletonLoader() {
  return (
    <div className="animate-pulse space-y-4 rounded-xl">
      <div className="bg-gray-300 h-6  "></div>
      <div className="bg-gray-300 h-80  "></div>
      <div className="space-y-4 rounded-xl">
        <div className="bg-gray-300 h-16 rounded-xl"></div>
        <div className="bg-gray-300 h-16 rounded-xl"></div>
        <div className="bg-gray-300 h-16 rounded-xl"></div>
      </div>
    </div>
  );
}

export default SkeletonLoader;
