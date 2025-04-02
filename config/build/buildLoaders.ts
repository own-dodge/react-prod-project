import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { buildOptions } from './types/config'

export default function buildLoaders (options: buildOptions): webpack.RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  }

  const cssLoaders = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes('.module.'),
            localIdentName: options.isDev ? '[path][name]__[local]--[hash:base64:8]' : '[hash:base64:8]'
          }
        }
      },
      'sass-loader'
    ]
  }

  return [
    typescriptLoader,
    cssLoaders
  ]
}
