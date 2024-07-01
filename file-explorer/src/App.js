import { useState } from "react";

import { explorerData } from "./data/fileData";
import "./App.css";
import FolderFile from "./components/FolderFile";
import useTraverseTree from "./hooks/useTraverseTree";

const App = () => {
  const [explorer, setExplorer] = useState(explorerData);

  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const newTree = insertNode(explorer, folderId, item, isFolder);
    setExplorer(newTree);
  };

  return (
    <div className="App">
      <FolderFile explorer={explorer} handleInsertNode={handleInsertNode} />
    </div>
  );
};

export default App;
