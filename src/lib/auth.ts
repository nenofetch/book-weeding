import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./server/db";
import { env } from '$env/dynamic/private';
import { sveltekitCookies } from "better-auth/svelte-kit";
import { getRequestEvent } from "$app/server";

export const auth = betterAuth({
database: drizzleAdapter(db, {
    provider: "pg"
}),
plugins: [sveltekitCookies(getRequestEvent)],
emailAndPassword: {
    enabled: true,
    minPasswordLength: 8,
},
session: {
    expiresIn: 60 * 60 * 24 * 7,
    updateAge: 60 * 60 * 24,
},
socialProviders: {
    google: {
        clientId: env.GOOGLE_CLIENT_ID as string,
        clientSecret: env.GOOGLE_CLIENT_SECRET as string,
    }
}
});

type Session = typeof auth.$Infer.Session;