var publicPath = "";
if (process.env.CORDOVA_PLATFORM === "android") {
  publicPath = "";
} else {
  publicPath = process.env.NODE_ENV === "production" ? "/" : "/";
}

module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: publicPath,
  productionSourceMap: false,

  pwa: {
    msTileColor: "blue"
  },

  pluginOptions: {
    cordovaPath: "src-cordova"
  }
};
