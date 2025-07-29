// components/ThreeDViewer.tsx

"use client";

const ThreeDViewer = () => {
  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg border">
      <iframe
        src="https://viewer.3dcommerce.studio/viewer/68886a40ee62e627165fa324"
        width="100%"
        height="100%"
        frameBorder="0"
        allowFullScreen
        title="3D Model"
      />
    </div>
  );
};

export default ThreeDViewer;
