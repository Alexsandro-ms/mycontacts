import { Sora } from "next/font/google";

const sora = Sora({
    variable: "--font-sora",
    subsets: ["latin"],
});

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${sora.variable}`}>{children}</body>
        </html>
    );
}
