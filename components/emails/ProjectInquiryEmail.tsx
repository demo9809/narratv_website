
import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
    Tailwind,
    Link,
} from "@react-email/components";
import * as React from "react";

interface ProjectInquiryEmailProps {
    name: string;
    email: string;
    phone: string;
    company: string;
    service: string;
    message: string;
}

export default function ProjectInquiryEmail({
    name,
    email,
    phone,
    company,
    service,
    message,
}: ProjectInquiryEmailProps) {
    const previewText = `New Project Inquiry from ${name} at ${company}`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
                        <Section className="mt-[32px]">
                            <Heading className="text-black text-[24px] font-bold text-center p-0 my-[30px] mx-0">
                                Narratv<span className="text-[#FF5500]">.</span>Space
                            </Heading>
                            <Text className="text-black text-[14px] leading-[24px]">
                                You have received a new project inquiry through the website.
                            </Text>
                        </Section>

                        <Section className="bg-gray-50 p-6 rounded-lg border border-gray-100 mt-4 mb-4">
                            <Text className="m-0 mb-4 text-gray-500 uppercase text-xs font-bold tracking-wider">
                                Client Details
                            </Text>
                            <div className="mb-4">
                                <Text className="m-0 text-gray-500 text-xs">Name</Text>
                                <Text className="m-0 text-black text-sm font-medium">{name}</Text>
                            </div>
                            <div className="mb-4">
                                <Text className="m-0 text-gray-500 text-xs">Email</Text>
                                <Link href={`mailto:${email}`} className="text-blue-600 text-sm font-medium no-underline">
                                    {email}
                                </Link>
                            </div>
                            <div className="mb-4">
                                <Text className="m-0 text-gray-500 text-xs">Phone / WhatsApp</Text>
                                <Link href={`tel:${phone}`} className="text-blue-600 text-sm font-medium no-underline">
                                    {phone}
                                </Link>
                            </div>
                            <div className="mb-0">
                                <Text className="m-0 text-gray-500 text-xs">Company</Text>
                                <Text className="m-0 text-black text-sm font-medium">{company}</Text>
                            </div>
                        </Section>

                        <Section className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-8">
                            <Text className="m-0 mb-4 text-gray-500 uppercase text-xs font-bold tracking-wider">
                                Project Scope
                            </Text>
                            <div className="mb-4">
                                <Text className="m-0 text-gray-500 text-xs">Service</Text>
                                <Text className="m-0 text-black text-sm font-medium capitalize">
                                    {service?.replace('-', ' ')}
                                </Text>
                            </div>
                            <div className="mb-0">
                                <Text className="m-0 text-gray-500 text-xs">Description</Text>
                                <Text className="m-0 text-gray-800 text-sm leading-relaxed whitespace-pre-wrap">
                                    {message}
                                </Text>
                            </div>
                        </Section>

                        <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
                        <Text className="text-[#666666] text-[12px] leading-[24px] text-center">
                            This email was sent from the Narratv Space contact form.
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
}
