import { useState } from "react";

import { explorerData } from "./data/fileData";
import "./App.css";
import FolderFile from "./components/FolderFile";

const App = () => {
  const [explorer, setExplorer] = useState(explorerData);

  return (
    <div className="App">
      <FolderFile explorer={explorer} />
    </div>
  );
};

export default App;
