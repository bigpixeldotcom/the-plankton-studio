import { defineField, defineType } from 'sanity'
import { Hearts } from '@/lib/fontawesome'

export default defineType({
  name: 'supporters',
  title: 'Supporters',
  type: 'document',
  icon: Hearts,
  fields: [
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      rows: 3,
      validation: (Rule) => Rule.required().min(10).max(500),
    }),
    defineField({
      name: 'supportersList',
      type: 'array',
      title: 'Supporters List',
      of: [{ type: 'reference', to: [{ type: 'supporter' }] }]
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Supporters',
      }
    },
  },
})
