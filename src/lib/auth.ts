import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
export const { auth, handlers, signIn } = NextAuth({
	providers: [
        GitHub, 
        Credentials({
            credentials: {
                email: {},
                password: {},
            },

        authorize: async (credentials) => {
            const email = "admin@admin.com";
            const password = "1234";

            if (credentials.email === email && credentials.password === password) {
                return {email, password};
            }
            throw new Error("Invalid credentials");
            
		},
	}),
	],
});
