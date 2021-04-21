const path = require("path")
const { minify } = require("html-minifier")
const CopyWebpackPlugin = require("copy-webpack-plugin")
module.exports = {
  output: {
    path: path.resolve(__dirname, "../dist/assets/"),
    filename: "[name].[contenthash:5].bundle.js",
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, "../src/web/views/layouts/"),
          to: "../web/views/layouts/",
          filter: (path) => !/\.(js|css)$/.test(path),
          transform(context) {
            return minify(context.toString("utf-8"), {
              removeAttributeQuotes: true,
              collapseBooleanAttributes: true,
            })
          },
        },
        {
          from: path.join(__dirname, "../src/web/components/"),
          to: "../web/components",
          filter: (path) => !/\.(js|css)$/.test(path),
          transform(context) {
            return minify(context.toString("utf-8"), {
              removeAttributeQuotes: true,
              collapseBooleanAttributes: true,
            })
          },
        },
      ],
    }),
  ],
}
