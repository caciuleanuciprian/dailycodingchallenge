import React from "react";

export default function OutputDetails({ outputDetails }: any) {
  return (
    <div className="w-half flex px-4 py-2 gap-2 text-white">
      <div className="flex flex-col text-sm font-semibold">
        <p className="px-2 py-1">Status:</p>
        <p className="px-2 py-1">Memory:</p>
        <p className="px-2 py-1">Time:</p>
      </div>
      <div className="flex flex-col text-sm font-semibold">
        <span className="px-2 py-1">
          {outputDetails?.status?.description || 0}
        </span>
        <span className="px-2 py-1">{outputDetails?.memory || 0}</span>
        <span className="px-2 py-1">{outputDetails?.time || 0}</span>
      </div>
    </div>
  );
}
