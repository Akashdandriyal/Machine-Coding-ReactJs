const useTraverseTree = () => {
  function insertNode(tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getMilliseconds(),
        name: item,
        isFolder: isFolder,
        items: [],
      });
      return tree;
    }

    let latestNode = tree.items.map((node) => {
      return insertNode(node, folderId, item, isFolder);
    });
    return { ...tree, items: latestNode };
  }

  return { insertNode };
};

export default useTraverseTree;
