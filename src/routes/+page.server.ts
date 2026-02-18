import { client } from "$lib/sanity/client.js"

const EDUCATIONS_QUERY = `*[_type == "education"] | order(endYear desc) {
    startYear,
    endYear,
    title,
    company,
    description    
}`

const PROJECTS_QUERY = `*[_type == "project"] {
    title,
    description
}`

export async function load() {
    const [educations, projects] = await Promise.all([
        client.fetch(EDUCATIONS_QUERY),
        client.fetch(PROJECTS_QUERY)
    ])
    return { educations, projects }
}