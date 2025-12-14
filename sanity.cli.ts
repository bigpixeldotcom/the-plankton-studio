import {defineCliConfig} from 'sanity/cli'
import tsconfigPaths from 'vite-tsconfig-paths'

const projectId = 'vvhbjths'
const dataset = 'production'
const appId = 'ashjwf2p6nx86gkfioqtmcsy'

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
