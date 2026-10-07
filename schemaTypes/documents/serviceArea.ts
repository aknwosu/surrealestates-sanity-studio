import {PinIcon} from '@sanity/icons/Pin'
import {defineField, defineType} from 'sanity'

export const serviceArea = defineType({
  name: 'serviceArea',
  title: 'Service area',
  type: 'document',
  icon: PinIcon,
  orderings: [{title: 'Display order', name: 'displayOrder', by: [{field: 'order', direction: 'asc'}]}],
  fields: [
    defineField({name: 'name', title: 'Area name', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'name', maxLength: 96}, validation: (rule) => rule.required()}),
    defineField({name: 'summary', title: 'Short description', type: 'text', rows: 3, validation: (rule) => rule.max(240)}),
    defineField({name: 'order', title: 'Display order', type: 'number', initialValue: 0, validation: (rule) => rule.integer().min(0)}),
    defineField({name: 'isActive', title: 'Show on website', type: 'boolean', initialValue: true}),
  ],
  preview: {select: {title: 'name', subtitle: 'summary'}},
})
