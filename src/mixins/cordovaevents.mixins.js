export const cordovaMixin = {
  methods: {
  	deviceReady() {
  		document.addEventListener("backbutton", this.onBackKeyDown, false);
    },

    onBackKeyDown(e) {
    	e.preventDefault(); 
    }
  },

  mounted() {
  	let self = this;
  	this.$nextTick(() => {
	    document.addEventListener("deviceReady", self.deviceReady, false);
	    document.addEventListener("backbutton", self.onBackKeyDown, false);
		// document.getElementsByTagName('body')[0].addEventListener("click", self.onBackKeyDown);
	});
  }
};

