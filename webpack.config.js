const path = require("path");

module.exports = {
  mode: "development",
  
  context: __dirname,

  entry: path.resolve(__dirname, "src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    // publicPath: "/dist/"
    filename: "main.js",
  },

  target: "web",
  devServer: {
    port: "3000",
    static: ["dist"],
    open: true,
    hot: true,
    liveReload: true,
  },
  
  resolve: {
    // modules: [
    //   path.resolve(__dirname, 'node_modules')
    // ],
    extensions: [".js", ".jsx", ".tsx", ".tsx", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // { // Assets
      //   test: /\.(json)$/i,
      //   type: "asset/resource"
      // },
    ],
  },
};