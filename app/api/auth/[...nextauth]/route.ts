import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Admin Login",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "admin" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // Simple hardcoded check. 
                // In production, use environment variables: process.env.ADMIN_USER & process.env.ADMIN_PASSWORD
                const user = process.env.ADMIN_USER || "admin";
                const pass = process.env.ADMIN_PASSWORD || "admin";

                if (credentials?.username === user && credentials?.password === pass) {
                    return { id: "1", name: "Admin", email: "admin@example.com" };
                }
                return null;
            }
        })
    ],
    pages: {
        signIn: '/admin/login',
    },
    secret: process.env.NEXTAUTH_SECRET || "change_me_in_production_random_string",
});

export { handler as GET, handler as POST };
