const appp = Vue.createApp({
  data() {
    return {
      projekt: [],
    };
  },
  methods: {
    addToProjekt() {
      fetch("markusSida.json")
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          this.projekt = json.Projekt;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    },
  },
  mounted() {
    this.addToProjekt(); // Kalla på metoden när komponenten monteras
  },
});
appp.mount("#projeekt");
