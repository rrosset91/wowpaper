var app = new Vue({
  el: "#app",
  data: {
    message: "",
    submittedMessage: "",
  },
  methods: {
    submitMessage: function () {
      this.submittedMessage = this.message;
    },
  },
});

var banner = new Vue({
  el: "#banner",
  data: {
    message: "WowPaper.io",
  },
});
