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
    const { name, email, company, service, message } = formData;

    try {
        const data = await resend.emails.send({
            from: 'Narratv Space Web <onboarding@resend.dev>',
            to: ['labeeb@narratv.space', 'labeebchlkn@gmail.com'],
            subject: `New Project Inquiry: ${name} from ${company}`,
            react: ProjectInquiryEmail({ name, email, company, service, message }),
        });

        if (data.error) {
            console.error('Resend Error:', data.error);
            return { success: false, message: 'Failed to send email. Please try again.' };
        }

        return { success: true, message: 'Email sent successfully!' };
    } catch (error) {
        console.error('Server Error:', error);
        return { success: false, message: 'Internal server error.' };
    }
}
