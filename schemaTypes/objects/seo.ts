import {defineField, defineType} from 'sanity'

export const seo = defineType({
  name: 'seo',
  title: 'SEO metadata',
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.max(60)}),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.max(160),
    }),
    defineField({name: 'image', title: 'Social sharing image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'noIndex', title: 'Hide this page from search engines', type: 'boolean', initialValue: false}),
  ],
})
