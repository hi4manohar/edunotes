/* eslint-disable */
import * as appConfig from "../config/index.config";

export const cordovaMixin = {
  methods: {
    deviceReady() {
      window.open = cordova.InAppBrowser.open;
      this.startPushNotf();
      console.log('redady');
    },

    startPushNotf() {
      const push = PushNotification.init({
        android: {
        },
        browser: {
          pushServiceURL: 'http://push.api.phonegap.com/v1/push'
        },
        ios: {
          alert: "true",
          badge: "true",
          sound: "true"
        },
        windows: {}
      });

      push.on('registration', (data) => {
        console.log('regdata', data);
        // data.registrationId
      });

      push.on('notification', (data) => {
        console.log('notdata', JSON.stringify(functor));
        // data.message,
        // data.title,
        // data.count,
        // data.sound,
        // data.image,
        // data.additionalData
      });

      push.on('error', (e) => {
        // e.message
      });
    },

    openPdfLink(e, strUrl) {

      if(window.hasOwnProperty("cordova")){
        e.preventDefault();
        window.open(strUrl, '_blank', 'location=yes')
      }
    },

    isCordova() {
      if( window.hasOwnProperty("cordova") ) {
        return true;
      } else {
        return false;
      }
    },

    shareAppLik() {
      var shareString = `I recommend ${appConfig.brandName} app to study state board exams. Please download and share it using this link Android : `;
      if( this.isCordova() ) {
        // this is the complete list of currently supported params you can pass to the plugin (all optional)
        var options = {
          message: shareString, // not supported on some apps (Facebook, Instagram)
          subject: `${appConfig.brandName} Recommendation`, // fi. for email
          files: ['', ''], // an array of filenames either locally or remotely
          url: appConfig.appPlayUrl,
          chooserTitle: 'Pick an app', // Android only, you can override the default share sheet title
        };

        var onSuccess = function (result) {
          // alert("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
          // alert("Shared to app: " + result.app); // On Android result.app since plugin version 5.4.0 this is no longer empty. On iOS it's empty when sharing is cancelled (result.completed=false)
        };

        var onError = function (msg) {
          alert("Sharing failed with message: " + msg);
        };

        window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
      } else {

        if (navigator.share ) {
          navigator.share({
            'title': 'Edunotes Recommendation',
            'text': shareString,
            'url': appConfig.appPlayUrl
          }).then(function () {
            console.log('Successful share');
          }).catch(function (error) {
            console.log('Error sharing:', error)
          });
        } else {
          window.open('whatsapp://send?text=' + shareString + appConfig.appPlayUrl);
        }
      }
    }
  },
  
  created() {
    let self = this;
    if( this.isCordova() ) {
      document.addEventListener("deviceReady", self.deviceReady, false);
    }
  }
}