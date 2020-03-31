module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: process.env.NODE_ENV === "production" ? "/edunotes/" : "/",
  productionSourceMap: false,
  pwa: {
    msTileColor: "blue"
  }
};
