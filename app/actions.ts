'use server'

import { Resend } from 'resend';
import { ContactFormData } from '@/lib/types';
import ProjectInquiryEmail from '@/components/emails/ProjectInquiryEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

interface ActionState {
    success: boolean;
    message?: string;
}

export async function sendEmail(formData: ContactFormData): Promise<ActionState> {
    console.log('Attempting to send email...');
    const { name, email, company, service, message } = formData;

    if (!process.env.RESEND_API_KEY) {
        console.error('Missing RESEND_API_KEY');
        return { success: false, message: 'Configuration error: Missing API Key' };
    }

    try {
        console.log('Sending via Resend to:', ['labeeb@narratv.space', 'labeebchlkn@gmail.com']);

        const data = await resend.emails.send({
            from: 'Narratv Space Web <onboarding@resend.dev>',
            to: ['labeeb@narratv.space', 'labeebchlkn@gmail.com'],
            subject: `New Project Inquiry: ${name} from ${company}`,
            react: ProjectInquiryEmail({ name, email, company, service, message }),
        });

        console.log('Resend Response:', data);

        if (data.error) {
            console.error('Resend API Error:', data.error);
            return { success: false, message: `Failed to send email: ${data.error.message}` };
        }

        return { success: true, message: 'Email sent successfully!' };
    } catch (error) {
        console.error('Server Internal Error:', error);
        return { success: false, message: 'Internal server error. Check server logs.' };
    }
}
