import home from './home';
import contact from './contact';
import menu from './menu';


const createNav = () => {
    const content = document.getElementById('content');

    const name = document.createElement('div');
    name.id = 'homeName';
    name.textContent = "Meathaus";
    content.appendChild(name);

    const homeButton = document.createElement('button');
    homeButton.addEventListener('click', loadHome)
    homeButton.textContent = 'Home';
    homeButton.id = 'homeButton';
    content.appendChild(homeButton);

    const menuButton = document.createElement('button');
    menuButton.addEventListener('click', loadMenu);
    menuButton.textContent = 'Menu';
    menuButton.id = 'menuButton'

    content.appendChild(menuButton);

    const contactButton = document.createElement('button');
    contactButton.addEventListener('click', loadContact);
    contactButton.textContent = 'Contact';
    contactButton.id = 'contactButton'
    content.appendChild(contactButton)
}

const loadHome = () => {
    clearDom();
    home();
    createNav();
}

const loadMenu = () => {
    clearDom();
    menu();
    createNav();
}

const loadContact = () => {
    clearDom();
    contact();
    createNav();
}
    

const clearDom = () => {
    const content = document.getElementById('content')

    while(content.firstChild) {
        content.removeChild(content.firstChild)
    }
}


home();
createNav();
