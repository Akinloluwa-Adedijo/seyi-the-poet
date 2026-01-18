import {defineArrayMember, defineField, defineType} from 'sanity'

export const reviews = defineType({
  type: 'document',
  name: 'reviews',
  title: 'Music Reviews',
  fields: [
    defineField({
      type: 'string',
      name: 'albumName',
      title: 'Album Name',
      description: 'What is the album being reviewed?',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'string',
      name: 'artistName',
      title: 'Artist Name',
      description: 'Who is the artist performing the album',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'number',
      name: 'reviewYear',
      title: 'Review Year',
      description: 'What year did you review the album?',
      validation: (e) => e.required(),
    }),
    defineField({
      type: 'array',
      name: 'reviewImage',
      title: 'Review Image',
      description: 'Upload a url of the album cover or upload the album cover',
      validation: (e) => e.required(),
      of: [defineArrayMember({type: 'slug'}), defineArrayMember({type: 'image'})],
    }),
    defineField({
      type: 'array',
      name: 'reviewContent',
      title: 'Review Content',
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
