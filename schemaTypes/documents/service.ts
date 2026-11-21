import {HomeIcon} from '@sanity/icons/Home'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  icon: HomeIcon,
  orderings: [{title: 'Display order', name: 'displayOrder', by: [{field: 'order', direction: 'asc'}]}],
  fields: [
    defineField({name: 'title', title: 'Service name', type: 'string', validation: (rule) => rule.required()}),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),
    defineField({name: 'summary', title: 'Short description', type: 'text', rows: 3, validation: (rule) => rule.required().max(240)}),
    defineField({name: 'description', title: 'Full description', type: 'array', of: [defineArrayMember({type: 'block'})]}),
    defineField({
      name: 'scope',
      title: 'Included work',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      validation: (rule) => rule.unique(),
    }),
    defineField({name: 'coverImage', title: 'Cover image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'order', title: 'Display order', type: 'number', initialValue: 0, validation: (rule) => rule.integer().min(0)}),
    defineField({name: 'isActive', title: 'Show on website', type: 'boolean', initialValue: true}),
    defineField({name: 'seo', title: 'SEO', description: 'Overrides metadata on the website page with the same slug.', type: 'seo'}),
  ],
  preview: {select: {title: 'title', subtitle: 'summary', media: 'coverImage'}},
})
