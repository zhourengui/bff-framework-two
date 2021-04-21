const path = require("path")
const yargs = require("yargs/yargs")
const { hideBin } = require("yargs/helpers")
const argv = yargs(hideBin(process.argv)).argv
const _mode = argv.mode || "development"
const envConfig = require(`./build/webpack.${_mode}.js`)
const { merge } = require("webpack-merge")
const files = require("glob").sync("./src/web/views/**/*.entry.js")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const HtmlAfterPlugin = require("./build/HtmlAfterPlugin")
const { resolve } = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

function generateEntry(config) {
  let entries = {
    ...config.entries,
  }
  for (let i = 0; i < files.length; i++) {
    entries[/(\w+)\.entry\.js$/.exec(files[i])[1]] = files[i]
  }
  return entries
}

function generatePlugins(config) {
  let plugins = [...config.plugins]
  for (let i = 0; i < files.length; i++) {
    plugins.push(
      new HtmlWebpackPlugin({
        template: `${/([\s\S]+)\.entry\.js$/.exec(files[i])[1]}.html`,
        filename: `../web/views/books/${
          /(\w+)\.entry\.js$/.exec(files[i])[1]
        }/${/(\w+)\.entry\.js$/.exec(files[i])[1]}.html`,
        chunks: ["runtime", /(\w+)\.entry\.js$/.exec(files[i])[1]],
        inject: false,
      })
    )
  }
  return plugins
}

const baseConfig = {
  mode: _mode,
  entry: {},
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlAfterPlugin(),
    new MiniCssExtractPlugin({}),
  ],
  optimization: {
    runtimeChunk: "single",
  },
  resolve: {
    alias: {
      "@": resolve("./src/web"),
    },
  },
}

baseConfig.entry = generateEntry(baseConfig)
baseConfig.plugins = generatePlugins(baseConfig)

module.exports = merge(baseConfig, envConfig)
