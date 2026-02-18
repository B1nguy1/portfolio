import { createClient } from "@sanity/client";

export const client = createClient({
    projectId: "w0c05ttt",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false,
});