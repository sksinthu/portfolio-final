import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/AppProviders";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Kirusnavelu Sinthujan | Portfolio",
    description: "Portfolio of Kirusnavelu Sinthujan, a Software Developer and BICT Student specializing in MERN stack and Next.js.",
    icons: {
        icon: '/profile.png',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={outfit.className}>
                <AppProviders>
                    {children}
                </AppProviders>
            </body>
        </html>
    );
}
