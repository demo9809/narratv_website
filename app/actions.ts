'use server'

import { Resend } from 'resend';
import { render } from '@react-email/render';
import { ContactFormData } from '@/lib/types';
import ProjectInquiryEmail from '@/components/emails/ProjectInquiryEmail';
import * as React from 'react';



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

    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        console.log('Rendering email template...');
        const emailHtml = await render(
            React.createElement(ProjectInquiryEmail, {
                name,
                email,
                company,
                service,
                message
            })
        );

        console.log('Sending via Resend to:', ['narratvthoughts@gmail.com']);

        const data = await resend.emails.send({
            from: 'Narratv Space Web <onboarding@resend.dev>',
            to: ['narratvthoughts@gmail.com'],
            subject: `New Project Inquiry: ${name} from ${company}`,
            html: emailHtml,
        });

        console.log('Resend Response:', data);

        if (data.error) {
            console.error('Resend API Error:', data.error);
            // Even if there's an error object, check if it has a generic successful status if ID is present
            // Resend SDK sometimes returns an error shaped object for some non-critical issues? 
            // No, usually data.error means it failed.
            return { success: false, message: `Failed to send email: ${data.error.message}` };
        }

        return { success: true, message: 'Email sent successfully!' };
    } catch (error) {
        console.error('Server Internal Error:', error);
        return { success: false, message: 'Internal server error. Check server logs.' };
    }
}
