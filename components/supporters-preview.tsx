import { createImageUrlBuilder } from '@sanity/image-url'
import type { SanityImageSource, SanityImageObject } from '@sanity/image-url';
import type { PreviewProps } from 'sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

const builder = createImageUrlBuilder({
  projectId,
  dataset
})

function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

export function SupportersPreview(props: PreviewProps) {

  if (!props) return null

  const media = props.media as SanityImageObject | undefined
  const title = typeof props.title === 'string' ? props.title : ''

  const imageUrl = media?.asset
    ? urlFor(media).width(200).url()
    : ''

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title || 'Supporter Logo'}
          style={{ borderRadius: '0.5rem', backgroundColor: '#5c6bf8', marginRight: '0.5em', padding: '0.35em' }}
          loading="lazy"
          width={60}
          height={30}
        />
      )}
      <h2 style={{ fontSize: '1em', margin: '0.5em 0' }}>{title}</h2>

    </div>
  )
}
