const sarasApp = Vue.createApp({
  data() {
    return {
      sarasProjekt: [],
    };
  },
  methods: {
    getProjektData() {
      fetch("saras-projekt.json")
        .then((response) => {
          return response.json();
        })
        .then((res) => {
          this.sarasProjekt = res;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
  mounted() {
    this.getProjektData();
  },
});

sarasApp.mount("#saras-projekt");
