import {defineArrayMember, defineField, defineType} from 'sanity'

export const poems = defineType({
  type: 'document',
  name: 'poems',
  title: 'Poems',
  fields: [
    defineField({
      type: 'string',
      name: 'poemName',
      title: 'Poem Name',
      description: 'What is the poem name?',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'string',
      name: 'poemTheme',
      title: 'Poem Theme',
      description: 'Theme of the Poem',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'number',
      name: 'poemYear',
      title: 'Poem Year',
      description: 'What year did you write the poem?',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'array',
      name: 'poemContent',
      title: 'Poem Content',
      description: 'Text content of the poem',
      validation: (e) => e.required(),
      of: [defineArrayMember({type: 'block'})],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
  ],
})
