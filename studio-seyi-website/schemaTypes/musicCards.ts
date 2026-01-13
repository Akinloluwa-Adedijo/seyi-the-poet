import {defineField, defineType} from 'sanity'


export const musicCards = defineType({
  type: "document",
  name: "musicCards",
  title: "Music Cards",
  fields: [
    defineField({
      type: "string",
      name: "title",
      title: "Title",
      validation: (e) => e.required(),
    }),
    defineField({
      type: "image",
      name: "coverImage",
      title: "Cover Image",
      validation: (e) => e.required(),
    }),
    defineField({
      type: "string",
      name: "coverImageAlt",
      title: "Cover Image Alt",
      validation: (e) => e.required(),
    }),
    defineField({
      type: "string",
      name: "year",
      title: "Year",
      validation: (e) => e.required(),
    }),
    // Add slug for the link
    defineField({
      type: "string",
      name: "cursorText",
      title: "Cursor Text",
      validation: (e) => e.required(),
    }),
    defineField({
      type: "boolean",
      name: "onhome",
      title: "onHome",
      description:
        "A true/false value to decide if this card should be shown on the home page",
    }),
    defineField({
      type: "slug",
      name: "url",
      title: "url",
      validation: (e) => e.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
  ],

});
