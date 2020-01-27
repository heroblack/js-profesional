const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
/* npx webpack  --entry ./index.js  --output ./bundle.js --mode development */
module.exports = {
  entry: {
    app: path.resolve(__dirname, "src/js/index.js")
    //precio: path.resolve(basePath, "../src/js/precio.js"),
    //contacto: path.resolve(basePath, "../src/js/contacto.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].[hash].js" /*nombre de bundel */,
    publicPath: "http://localhost:9000/",
    chunkFilename: "js/[id].[hash].js"
  },
  mode: "development",
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    hot: true,
    //compress: true,
    historyApiFallback: true,
    //host: "0.0.0.0",
    port: 9000,
    inline: true,
    open: true
    // publicPath: "dist/src/js/"
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: "/node_modules/"
      },
      {
        test: /\.(jpg|png|gif|woff|woff2|eot|ttf|svg|mp4|webm)$/,
        use: {
          loader: "file-loader",
          options: {
            outputPath: "assets/"
          }
          // loader: "url-loader",
          // options: {
          //   limit: 90000
          // }
        }
      },
      {
        test: /\.css$/,
        use: [
          // {
          //   loader: MiniCssExtractPlugin.loader
          // },
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          "postcss-loader"
        ]
      }
      /*
      {
        test: /\.less$/,
        use: [
          // {
          //   loader: MiniCssExtractPlugin.loader
          // },
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      },

      {
        test: /\.scss$/,
        use: [
          // {
          //   loader: MiniCssExtractPlugin.loader
          // },
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },

      {
        test: /\.styl$/,
        use: [
          // {
          //   loader: MiniCssExtractPlugin.loader
          // },
          "style-loader",
          "css-loader",
          "stylus-loader"
        ]
      }
       */
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      title: "plugins",
      template: path.resolve(__dirname, "public/index.html"), // path.resolve(basePath, indexInput),
      chunks: ["app"],
      filename: "index.html",
      templateParameters: {
        titulo: "Curso profesional de Javascript",
        encabezamiento: "JS Professional"
      }
    })
    // new MiniCssExtractPlugin({
    //   filename: "css/[hash][name].css"
    // })
    /*
    new webpack.DllReferencePlugin({
      manifest: require("./modules-manifest")
    })*/
  ]
  /*
  optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 0,
      name: "commons"
    }
  }*/
};
