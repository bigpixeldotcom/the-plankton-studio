import {defineCliConfig} from 'sanity/cli'
import tsconfigPaths from 'vite-tsconfig-paths'

const projectId = process.env.SANITY_PROJECT_ID
const dataset = process.env.SANITY_DATASET

export default defineCliConfig({
  api: {
    projectId,
    dataset
  },
  deployment: {
    autoUpdates: true,
  },
  vite: {
    plugins: [tsconfigPaths()]
  }
})
