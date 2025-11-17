import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export const paths = {
  src: path.resolve(__dirname, '../src'),
  components: path.resolve(__dirname, '../src/components'),
  assets: path.resolve(__dirname, '../src/assets'),
  pages: path.resolve(__dirname, '../src/pages'),
}

export default paths

