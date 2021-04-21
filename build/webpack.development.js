const CopyWebpackPlugin = require("copy-webpack-plugin")

module.exports = {
  output: {
    path: path.resolve(__dirname, "../dist/assets/"),
    filename: "[name].bundle.js",
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, "../src/web/views/layouts/"),
          to: "../views/layouts/",
          filter: (path) => !/\.(js|css)$/.test(path),
        },
        {
          from: path.join(__dirname, "../src/web/components/"),
          to: "../views/components",
          filter: (path) => !/\.(js|css)$/.test(path),
        },
      ],
    }),
  ],
}
