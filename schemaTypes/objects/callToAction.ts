import {defineField, defineType} from 'sanity'

export const callToAction = defineType({
  name: 'callToAction',
  title: 'Call to action',
  type: 'object',
  fields: [
    defineField({name: 'label', title: 'Link label', type: 'string', validation: (rule) => rule.required()}),
    defineField({
      name: 'linkType',
      title: 'Link type',
      type: 'string',
      options: {
        list: [
          {title: 'Internal path', value: 'internal'},
          {title: 'External URL', value: 'external'},
          {title: 'Email', value: 'email'},
          {title: 'Phone', value: 'phone'},
        ],
        layout: 'radio',
      },
      initialValue: 'internal',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'internalPath',
      title: 'Internal path',
      type: 'string',
      description: 'For example, /contact or /portfolio.',
      hidden: ({parent}) => parent?.linkType !== 'internal',
      validation: (rule) => rule.custom((value, context) =>
        (context.parent as {linkType?: string} | undefined)?.linkType !== 'internal' ||
        (typeof value === 'string' && value.startsWith('/'))
          ? true
          : 'Enter a path beginning with /',
      ),
    }),
    defineField({
      name: 'externalUrl',
      title: 'External URL',
      type: 'url',
      hidden: ({parent}) => parent?.linkType !== 'external',
      validation: (rule) => rule.uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'emailAddress',
      title: 'Email address',
      type: 'string',
      hidden: ({parent}) => parent?.linkType !== 'email',
      validation: (rule) => rule.email(),
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Phone number',
      type: 'string',
      hidden: ({parent}) => parent?.linkType !== 'phone',
    }),
  ],
})
