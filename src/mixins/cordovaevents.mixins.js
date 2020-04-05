/* eslint-disable */

export const cordovaMixin = {
  methods: {
    deviceReady() {
      window.open = cordova.InAppBrowser.open;
      console.log('redady');
    },

    openPdfLink(e, strUrl) {

      if( process.env.CORDOVA_PLATFORM === 'android' ) {
        e.preventDefault();
        window.open(strUrl, '_blank', 'location=yes')
      }
    }
  },

  mounted() {

    if( process.env.CORDOVA_PLATFORM === 'android' ) {
      let self = this;
      this.$nextTick(() => {
        document.addEventListener("deviceReady", self.deviceReady, false);
      });
    }
  }
}