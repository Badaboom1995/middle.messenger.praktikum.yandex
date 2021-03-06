export function render(query, block) {
    const root = document.querySelector(query);

    // Можно завязаться на реализации вашего класса Block
    root.appendChild(block.getElement());

    block.dispatchComponentDidMount();

    return root;
}