export default (root, styles, ignoreStyles = []) => {
    [root, ...Array.from(root.querySelectorAll('[class]'))].forEach(node => {
        node.classList.forEach(cls => {
            if (ignoreStyles.includes(cls) || !styles[cls]) {
                return;
            }
            node.classList.remove(cls);
            node.classList.add(styles[cls]);
        });
    });
};