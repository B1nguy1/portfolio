import { client } from "$lib/sanity/client.js"

const EDUCATIONS_QUERY = `*[_type == "education"] | order(endYear desc) {
    startYear,
    endYear,
    title,
    company,
    description    
}`

export async function load() {
    const educations = await client.fetch(EDUCATIONS_QUERY);
    return { educations }
}