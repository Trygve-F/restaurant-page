const contact = () => {
    const content = document.getElementById('content');

    const contactHeader = document.createElement('div');
    contactHeader.id = 'contactHeader';
    contactHeader.textContent = "test contact";
    content.appendChild(contactHeader);
}

export default contact