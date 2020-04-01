module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: process.env.NODE_ENV === "production" ? "/edunotes/dist/" : "/",
  productionSourceMap: false,
  pwa: {
    msTileColor: "blue"
  }
};
