import path from 'path'
import webpack from 'webpack'
import { buildWebpackConfig } from './config/build/buildWebpackConfig'
import { buildEnv, buildPaths } from './config/build/types/config'

export default (env: buildEnv) => {
  const paths: buildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
  }

  const mode = env.mode || 'development'
  const isDev = mode === 'development'
  const PORT = env.port || 3000

  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths: paths,
    isDev,
    port: PORT
  })

  return config
}
