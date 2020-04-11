/* eslint-disable */

export const cordovaMixin = {
  methods: {
    deviceReady() {
      window.open = cordova.InAppBrowser.open;
      console.log('redady');
    },

    openPdfLink(e, strUrl) {

      if(window.hasOwnProperty("cordova")){
        e.preventDefault();
        window.open(strUrl, '_blank', 'location=yes')
      }
    }
  },

  mounted() {

    if(window.hasOwnProperty("cordova")){
      let self = this;
      this.$nextTick(() => {
        document.addEventListener("deviceReady", self.deviceReady, false);
      });
    }
  }
}