import {defineField, defineType} from 'sanity'

export const homeDescriptionType = defineType({
    name: 'homeDescription',
    title: 'Home Page Description',
    type: 'document',
    fields: [
        defineField({
            name: 'Description',
            title: 'Description',
            type: 'text',
        }),
    ],
})
