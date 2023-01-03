const contact = () => {
    const content = document.getElementById('content');


    // Create header
    const header = document.createElement('div');
    header.id = 'contactHeader';
    header.textContent = 'Contact Us';
    content.appendChild(header);

    // Create address
    const address = document.createElement('div');
    address.id = 'contactAddress';
    address.textContent = '2 Tuktu Rd, Tuktoyaktuk, Canada';
    content.appendChild(address);

    // Create phone number
    const phone = document.createElement('div');
    phone.id = 'contactPhone';
    phone.textContent = '1-800-999-1234';
    content.appendChild(phone);

    // Create email
    const email = document.createElement('div');
    email.id = 'contactEmail';
    email.textContent = 'meathaus@reallyreal.com';
    content.appendChild(email);
}

export default contact