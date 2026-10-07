import {CogIcon} from '@sanity/icons/Cog'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({name: 'siteName', title: 'Business name', type: 'string', validation: (rule) => rule.required()}),
    defineField({name: 'tagline', title: 'Tagline', type: 'string'}),
    defineField({name: 'defaultDescription', title: 'Default description', type: 'text', rows: 3, validation: (rule) => rule.max(160)}),
    defineField({name: 'logo', title: 'Logo', type: 'image', options: {hotspot: true}}),
    defineField({name: 'defaultSocialImage', title: 'Default social sharing image', type: 'image', options: {hotspot: true}}),
    defineField({name: 'phone', title: 'Phone number', type: 'string'}),
    defineField({name: 'email', title: 'Email address', type: 'string', validation: (rule) => rule.email()}),
    defineField({name: 'serviceArea', title: 'Service area', type: 'string'}),
    defineField({
      name: 'socialLinks',
      title: 'Social profiles',
      type: 'array',
      of: [defineArrayMember({
        type: 'object',
        fields: [
          defineField({name: 'platform', title: 'Platform', type: 'string', validation: (rule) => rule.required()}),
          defineField({name: 'url', title: 'URL', type: 'url', validation: (rule) => rule.required().uri({scheme: ['http', 'https']})}),
        ],
        preview: {select: {title: 'platform', subtitle: 'url'}},
      })],
    }),
  ],
  preview: {prepare: () => ({title: 'Site settings'})},
})
