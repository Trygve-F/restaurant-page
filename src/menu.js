const menu = () => {
    const content = document.getElementById('content');

    const menuHeader = document.createElement('div');
    menuHeader.id = 'menuHeader';
    menuHeader.textContent = "test menu"
    content.appendChild(menuHeader)
}

export default menu