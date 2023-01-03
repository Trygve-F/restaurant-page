import './style.css';

const home = () => {
    const content = document.getElementById('content');

    // Create restauraunt header
    const header = document.createElement('div');
    header.id = 'homeHeader';
    header.textContent = 'Award Winning sandwiches';
    content.appendChild(header);

    // Create restauraunt copy
    const copy = document.createElement('div');
    copy.id = 'homeCopy';
    copy.textContent = 'Michelin rated restaurant very \
     good clean health inspection 12/22 real tasty trust us\
    Gordon Ramsay said we best';
    content.appendChild(copy);

    

}

export default home