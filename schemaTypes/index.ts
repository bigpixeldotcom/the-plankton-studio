import { type SchemaTypeDefinition } from 'sanity'

// Documents
import author from '@/schemas/documents/author';
import page from '@/schemas/documents/page';
import post from '@/schemas/documents/post';

// Objects
import blockContent from '@/schemas/objects/block-content';
import seo from '@/schemas/objects/seo';
import supporter from '@/schemas/objects/supporter';

// Singletons
import settings from '@/schemas/singletons/settings';
import supporters from '@/schemas/singletons/supporters';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Documents
    author,
    page,
    post,

    // Objects
    blockContent,
    seo,
    supporter,

    // Singletons
    settings,
    supporters,

    // Add any additional schema types here
  ],
}
