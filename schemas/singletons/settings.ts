import { defineType, defineField } from 'sanity'
import { Gear } from '@/lib/fontawesome'

export default defineType({
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  icon: Gear,
  groups: [
    { name: 'general', title: 'General' },
    { name: 'navigation', title: 'Navigation' },
    { name: 'footer', title: 'Footer' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'general',
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      rows: 3,
      group: 'general',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
      group: 'general',
    }),
    defineField({
      name: 'mainNavigation',
      title: 'Main Navigation',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'url', type: 'string', title: 'URL' },
          ],
        },
      ],
      group: 'navigation',
    }),
    defineField({
      name: 'footerText',
      title: 'Footer Text',
      type: 'text',
      rows: 3,
      group: 'footer',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              type: 'string',
              title: 'Platform',
              options: {
                list: [
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'Twitter', value: 'twitter' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'YouTube', value: 'youtube' },
                ],
              },
            },
            { name: 'url', type: 'url', title: 'URL' },
          ],
        },
      ],
      group: 'footer',
    }),
    defineField({
      name: 'seo',
      title: 'Default SEO',
      type: 'seo',
      group: 'seo',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings',
      }
    },
  },
})
