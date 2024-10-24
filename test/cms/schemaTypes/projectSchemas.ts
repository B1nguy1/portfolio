import { defineField, defineType } from "sanity";

const projectSchemas = defineType({
    title: 'projects',
    name: 'projects',
    type: 'document',
    fields: [
        defineField({
            title: 'Prosjektnavn',
            name: 'title',
            type: 'string',
            validation: (Rule) => Rule.required()
        }),
        defineField({
            title:"Beskrivelse",
            name: 'description',
            type: "string"
        }),
        defineField({
          title: 'Startdato',
          name: 'start_date',
          type: 'date',
          validation: (Rule) => Rule.required()
      }),
      defineField({
          title: 'Sluttddato',
          name: 'end_date',
          type: 'date',
      }),
    ]
    
  })

export default projectSchemas;