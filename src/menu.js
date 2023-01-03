const createMenu = () => {
    const menu = document.createElement('div');
    menu.id = 'menu';

    menu.appendChild(
        createMenuItem(
            'The Basic',
            'meat, sauce'
        )
    );

    menu.appendChild(
        createMenuItem(
            'The Staple',
            'meat, slaw, sauce, pickles'
        )
    );

    menu.appendChild(
        createMenuItem(
            'The Fancy',
            'meat, bacon, slaw, sauce, pickles'
        )
    );

    menu.appendChild(
        createMenuItem(
            'The Aristocrat',
            'meat, smoked cheese, fig jam, gold dust'
        )
    );
    return menu;
}

const createMenuItem = (name, description) => {

    const menuItem = document.createElement('div');
    menuItem.id = 'menuItem';

    const foodName = document.createElement('div');
    foodName.textContent = name;

    const foodDescription = document.createElement('div');
    foodDescription.textContent = description;


    menuItem.appendChild(foodName);
    menuItem.appendChild(foodDescription);
    

return menuItem;

}


const menu = () => {
    const content = document.getElementById('content');
    const menuHeader = document.createElement('div');
    menuHeader.id = 'menuHeader';
    menuHeader.textContent = 'Menu';
    content.appendChild(menuHeader);

    content.appendChild(createMenu())
}


export default menu