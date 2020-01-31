const path = require("path");
module.exports = {
  outputDir: path.resolve(__dirname, "../blog_server/public"),
  devServer: {
    proxy: {
      "^/links": {
        target: "http://localhost:4000"
      }
    }
  },
  lintOnSave: true,
  configureWebpack: {
    devtool: "eval-source-map"
  }
};
