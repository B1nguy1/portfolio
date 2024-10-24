import { defineField, defineType } from "sanity";

const experienceSchema = defineType({
  title: 'Experience',
  name: 'experience',
  type: 'document',
  fields: [
      defineField({
          title: 'Bedrift',
          name: 'company',
          type: 'string',
          validation: (Rule) => Rule.required()
      }),
      defineField({
        title: 'Start date',
        name: 'start',
        type: 'date',
        validation: (Rule) => Rule.required()
    }),
    defineField({
        title: 'End date',
        name: 'end',
        type: 'date',
    }),
  ]
  
})
export default experienceSchema