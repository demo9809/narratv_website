const { Resend } = require('resend');

const resend = new Resend('re_D4MTnpR4_pamVuzZRXn5iQwYBkGseBE1Q');

(async function () {
    console.log('Testing Resend API key...');
    try {
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: ['narratvthoughts@gmail.com'],
            subject: 'Narratv API Test',
            html: '<p>If you received this, the API key and Domain are configured correctly.</p>'
        });
        console.log('Response:', data);
    } catch (error) {
        console.error('Error:', error);
    }
})();
