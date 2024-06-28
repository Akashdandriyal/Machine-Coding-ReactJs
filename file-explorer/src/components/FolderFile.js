import { useState } from "react";

const FolderFile = ({ explorer }) => {
  const [showContent, setShowContent] = useState(false);
  return (
    <div>
      {explorer.isFolder ? (
        <>
          <div className="folder" onClick={() => setShowContent(!showContent)}>
            <span>📁 {explorer.name}</span>
          </div>
          <div className={`folder-content ${!showContent && "hide"}`}>
            {explorer.items.map((item) => (
              <FolderFile explorer={item} />
            ))}
          </div>
        </>
      ) : (
        <span>📄 {explorer.name}</span>
      )}
    </div>
  );
};

export default FolderFile;
