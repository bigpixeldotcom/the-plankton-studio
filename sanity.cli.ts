import {defineCliConfig} from 'sanity/cli'
import tsconfigPaths from 'vite-tsconfig-paths'

const projectId = import.meta.env.SANITY_STUDIO_PROJECT_ID
const dataset = import.meta.env.SANITY_STUDIO_DATASET
const appId = import.meta.env.SANITY_STUDIO_APP_ID

export default defineCliConfig({
  api: {
    projectId,
    dataset
  },
  deployment: {
    autoUpdates: true,
    appId
  },
  vite: {
    plugins: [tsconfigPaths()]
  }
})
