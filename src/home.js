const home = () => {
    const content = document.getElementById('content');

    const name = document.createElement('div');
    name.id = 'name';
    name.textContent = "Meathaus";
    content.appendChild(name);

    const header = document.createElement('div');
    header.id = 'header';
    header.textContent = 'You have to eat it to believe it!';
    content.appendChild(header);

    const copy = document.createElement('div');
    copy.id = 'copy';
    copy.textContent = '8 star michelin rated restaurant very \
     good clean health inspection 12/22 real tasty trust us\
    Gordon Ramsay said we best';
    content.appendChild(copy);

    const image = document.createElement('img');
    image.src = './rest-img.jpg';
    content.appendChild(image)
    };

export default home