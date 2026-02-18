import { defineField, defineType } from "sanity";

export const education = defineType({
    name: "education",
    title: "Education",
    type: "document",
    fields: [
        defineField({
            name: "title",
            type: "string",
            validation: Rule => Rule.required()
        }),
        defineField({
            name: "company",
            type: "string"
        }),
        defineField({
            name: "description",
            type: "string"
        }),
        defineField({
            name: "startYear",
            type: "number",
            validation: Rule => Rule.required()
        }),
        defineField({
            name: "endYear",
            type: "number",
            validation: Rule => Rule.required()
        })


    ]
})