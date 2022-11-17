const contactForm = document.getElementById ("contact_form");
const userName = document.getElementById ("user_name");
const userEmail = document.getElementById ("user_email");
const message = document.getElementById ("message");

const sendEmail = async (body) => {
    const settings = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    }
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', settings);
    const data = await response.json();
    return data;
};

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const body = {
        service_id: 'service_dc53loy',
        template_id: 'template_656wivn',
        user_id: 'XMOlfR_T-OROJ2_6h',
        template_params: {
            'to_name': userName.value,
            'from_name': userEmail.value,
            'message': message.value
        }
    };
    sendEmail(body);
})