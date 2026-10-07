import {CommentIcon} from '@sanity/icons/Comment'
import {defineField, defineType} from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Client review',
  type: 'document',
  icon: CommentIcon,
  fields: [
    defineField({name: 'quote', title: 'Client quote', type: 'text', rows: 5, validation: (rule) => rule.required().max(1000)}),
    defineField({name: 'clientName', title: 'Client name', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'attribution', title: 'Attribution', type: 'string', description: 'Optional neighbourhood or project context.'}),
    defineField({name: 'project', title: 'Related project', type: 'reference', to: [{type: 'project'}]}),
    defineField({name: 'date', title: 'Date received', type: 'date'}),
    defineField({name: 'isPublished', title: 'Publish on website', type: 'boolean', initialValue: false}),
  ],
  preview: {select: {title: 'clientName', subtitle: 'quote'}},
})
