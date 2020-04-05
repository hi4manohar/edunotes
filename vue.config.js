module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: "",
  // for web production 
  //publicPath: process.env.NODE_ENV === "production" ? "/edunotes/" : "/",
  productionSourceMap: false,

  pwa: {
    msTileColor: "blue"
  },

  pluginOptions: {
    cordovaPath: "src-cordova"
  }
};
