import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import createExternal from 'vite-plugin-external';
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
        {
            // this is required for the SCSS modules
            find: /^~(.*)$/,
            replacement: '$1',
        },
    ],
  },
  plugins: [
    react(),
    nodePolyfills(),
    createExternal({
      externals: {
        "@alilc/lowcode-engine": "AliLowCodeEngine",
        "@alilc/lowcode-engine-ext": "AliLowCodeEngineExt",
        "react": "React",
        "react-dom": "ReactDOM",
        "prop-types": "PropTypes",
        "@alifd/next": "Next",
        "moment": "moment",
        "lodash": "_"
      }
    })
  ],
})
