var publicPath = "";
if (process.env.CORDOVA_PLATFORM === "android") {
  publicPath = "";
} else {
  publicPath = process.env.NODE_ENV === "production" ? "/" : "/";
}

module.exports = {
  css: {
    extract: { ignoreOrder: true }
  },
  transpileDependencies: ["vuetify"],
  publicPath: publicPath,
  productionSourceMap: false,

  pwa: {
    msTileColor: "blue"
  },

  pluginOptions: {
    cordovaPath: "src-cordova",
    webpackBundleAnalyzer: {
      openAnalyzer: false
    }
  },
  configureWebpack: {
    mode: 'production'
  }
};
