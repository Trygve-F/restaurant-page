import home from './home';
import contact from './contact';
import menu from './menu';


const createNav = () => {
    const content = document.getElementById('content');

    const homeButton = document.createElement('button');
    //homeButton.onclick =
    homeButton.textContent = 'Home';
    content.appendChild(homeButton)

    const menuButton = document.createElement('button');
    //menuButton.onclick =
    menuButton.textContent = 'Menu';
    content.appendChild(menuButton);

    const contactButton = document.createElement('button');
    //contactButton.onclick =  
    contactButton.textContent = 'Contact';
    content.appendChild(contactButton)
}



home();
createNav();
