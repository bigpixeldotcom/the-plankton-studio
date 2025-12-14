/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly SANITY_STUDIO_PROJECT_ID: string
  readonly SANITY_STUDIO_DATASET: string
  readonly SANITY_STUDIO_API_VERSION: string
  readonly SANITY_STUDIO_APP_ID: string
  readonly FONTAWESOME_TOKEN: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
