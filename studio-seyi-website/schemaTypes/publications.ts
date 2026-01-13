import {defineArrayMember, defineField, defineType} from 'sanity'

export const publications = defineType({
  type: 'document',
  name: 'publications',
  title: 'Publications',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      title: 'Title',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'text',
      name: 'description',
      title: 'Description',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'image',
      name: 'coverImage',
      title: 'Cover Image',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'string',
      name: 'coverImageAlt',
      title: 'Cover Image Alt',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'number',
      name: 'year',
      title: 'Year',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'slug',
      name: 'url',
      title: 'Url',
      validation: (e) => e.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
  ],
})
