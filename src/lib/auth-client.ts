import { createAuthClient } from "better-auth/svelte";
import { env } from "$env/dynamic/private";

export const authClient = createAuthClient({
    baseURL: env.BETTER_AUTH_URL as string,    
})
