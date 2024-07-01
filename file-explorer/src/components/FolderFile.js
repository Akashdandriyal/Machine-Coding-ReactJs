import { useState } from "react";

const FolderFile = ({ explorer, handleInsertNode }) => {
  const [showContent, setShowContent] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const newFolderFile = (e, isFolder) => {
    e.stopPropagation();
    setShowContent(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const addFolderFile = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  return (
    <div>
      {explorer.isFolder ? (
        <>
          <div className="folder" onClick={() => setShowContent(!showContent)}>
            <span>📁 {explorer.name}</span>
            <div>
              <button onClick={(e) => newFolderFile(e, true)}>Folder +</button>
              <button onClick={(e) => newFolderFile(e, false)}>File +</button>
            </div>
          </div>
          <div className={`folder-content ${!showContent && "hide"}`}>
            {showInput.visible && (
              <div>
                <span>{showInput.isFolder ? "📁" : "📄"}</span>{" "}
                <input
                  type="text"
                  autoFocus
                  onBlur={() => setShowInput({ ...showInput, visible: false })}
                  onKeyDown={addFolderFile}
                />
              </div>
            )}
            {explorer.items.map((item) => (
              <FolderFile
                key={item.id}
                explorer={item}
                handleInsertNode={handleInsertNode}
              />
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
