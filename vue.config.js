module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: process.env.NODE_ENV === "production" ? "../../" : "/",
  productionSourceMap: false,
  pwa: {
    msTileColor: "blue"
  }
};
