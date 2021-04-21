const HtmlWebpackPlugin = require("html-webpack-plugin")
const pluginName = "HtmlAfterPlugin"

const generateAssets = (data) => {
  let scripts = []
  let css = []
  for (let i = 0; i < data.assets.js.length; i++) {
    scripts.push(`<script src='${data.assets.js[i]}'></script>`)
  }
  for (let i = 0; i < data.assets.css.length; i++) {
    css.push(`<link href='${data.assets.css[i]}'></link>`)
  }
  return {
    scripts,
    css,
  }
}

class HtmlAfterPlugin {
  constructor() {
    this.scripts = []
    this.css = []
  }
  apply(compiler) {
    compiler.hooks.compilation.tap(pluginName, (compilation) => {
      // compilation 相当于chunks 每个chunk都会生成compliation
      HtmlWebpackPlugin.getHooks(compilation).beforeAssetTagGeneration.tapAsync(
        pluginName,
        (data, cb) => {
          const { scripts, css } = generateAssets(data)
          this.scripts = scripts
          this.css = css
          cb(null, data)
        }
      )
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
        pluginName,
        (data, cb) => {
          let _html = data.html
          _html = _html.replace(
            "<!-- injectscript -->",
            this.scripts.join("\n")
          )
          _html = _html.replace("<!-- injecthead -->", this.css.join("\n"))
          _html = _html.replace(/\@layouts/g, "../../layouts")
          data.html = _html
          // Tell webpack to move on
          cb(null, data)
        }
      )
    })
  }
}

module.exports = HtmlAfterPlugin
