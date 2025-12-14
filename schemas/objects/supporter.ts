import { defineField, defineType } from 'sanity'
import { SupportersPreview } from '@/sanity/components/supporters-preview'
import { Heart } from '@/sanity/lib/fontawesome'

export default defineType({
  name: 'supporter',
  title: 'Supporter',
  type: 'document',
  icon: Heart,
  components: {
    preview: SupportersPreview,
  },
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required().min(1).max(100),
    }),
    defineField({
      name: 'logo',
      type: 'image',
      title: 'Logo',
      options: {
        hotspot: false,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'Website URL',
      validation: (Rule) => Rule.required().uri({ allowRelative: true }),
    }),
  ]
})
