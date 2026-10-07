import {ImagesIcon} from '@sanity/icons/Images'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  icon: ImagesIcon,
  orderings: [
    {title: 'Newest completion', name: 'completionDateDesc', by: [{field: 'completionDate', direction: 'desc'}]},
    {title: 'Display order', name: 'displayOrder', by: [{field: 'order', direction: 'asc'}]},
  ],
  fields: [
    defineField({name: 'title', title: 'Project name', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title', maxLength: 96}, validation: (rule) => rule.required()}),
    defineField({name: 'summary', title: 'Short description', type: 'text', rows: 3, validation: (rule) => rule.required().max(240)}),
    defineField({name: 'description', title: 'Project story', type: 'array', of: [defineArrayMember({type: 'block'})]}),
    defineField({name: 'services', title: 'Services', type: 'array', of: [defineArrayMember({type: 'reference', to: [{type: 'service'}]})]}),
    defineField({name: 'location', title: 'Location', type: 'string', description: 'City or neighbourhood; avoid publishing a client’s street address.'}),
    defineField({name: 'completionDate', title: 'Completion date', type: 'date', options: {dateFormat: 'MMMM YYYY'}}),
    defineField({name: 'coverImage', title: 'Cover image', type: 'image', options: {hotspot: true}, validation: (rule) => rule.required()}),
    defineField({
      name: 'beforeImage',
      title: 'Before image',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', title: 'Alt text', type: 'string', validation: (rule) => rule.required()})],
    }),
    defineField({
      name: 'afterImage',
      title: 'After image',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({name: 'alt', title: 'Alt text', type: 'string', validation: (rule) => rule.required()})],
    }),
    defineField({
      name: 'gallery',
      title: 'Project gallery',
      type: 'array',
      of: [defineArrayMember({type: 'image', options: {hotspot: true}, fields: [defineField({name: 'alt', title: 'Alt text', type: 'string', validation: (rule) => rule.required()})]})],
    }),
    defineField({name: 'featured', title: 'Feature this project', type: 'boolean', initialValue: false}),
    defineField({name: 'order', title: 'Display order', type: 'number', initialValue: 0, validation: (rule) => rule.integer().min(0)}),
    defineField({name: 'isPublished', title: 'Publish on website', type: 'boolean', initialValue: false}),
    defineField({name: 'seo', title: 'SEO', type: 'seo'}),
  ],
  preview: {select: {title: 'title', subtitle: 'location', media: 'coverImage'}},
})
