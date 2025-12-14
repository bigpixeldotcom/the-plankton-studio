import type { StructureBuilder } from 'sanity/structure'
import { Gear, Newspaper, Hearts, Files } from '@/lib/fontawesome'

export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Main Menu')
    .items([
      S.listItem()
        .title('Settings')
        .icon(Gear)
        .child(
          S.document()
            .title('Settings')
            .schemaType('settings')
            .documentId('settings')
        ),
      S.divider(),
      S.listItem()
        .title('Blog')
        .icon(Newspaper)
        .child(
          S.list()
            .title('Blog Menu')
            .items([
              S.documentTypeListItem('post').title('Posts'),
              S.documentTypeListItem('author').title('Authors'),
            ])
        ),
      S.documentTypeListItem('page').title('Pages').icon(Files),
      // S.documentTypeListItem('resource').title('Resources').icon(FolderDown),
      S.listItem()
        .title('Supporters')
        .icon(Hearts)
        .child(
          S.document()
            .title('Supporters')
            .schemaType('supporters')
            .documentId('supporters')
        ),
    ])
