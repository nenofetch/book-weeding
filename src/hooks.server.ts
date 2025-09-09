import { auth } from "$lib/auth";
import { svelteKitHandler } from "better-auth/svelte-kit";
import { building } from "$app/environment";
import type { RequestEvent } from "@sveltejs/kit";

export async function handle({ event, resolve}: { event: RequestEvent, resolve: (event: RequestEvent) => Response | Promise<Response>}) {
    // Get current session from better auth
    const session = await auth.api.getSession({
        headers: event.request.headers,
    });

    // Check if session is valid
    if (session) {
        
        (event.locals as any).session = session.session;
        (event.locals as any).user = session.user;
    }

    return svelteKitHandler({ event, resolve, auth, building });
}
