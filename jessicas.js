const appen = Vue.createApp({
  data() {
    return {
      projekt: []
    }
  },
  // methods: {
  // },
  mounted() { //lägger till en komponent i dom!
    fetch("jessicas.json")
      .then((res) => res.json())
      .then((data) => {
        this.projekt = data;
      })
      .catch((error) => {
        console.error(error);
      });
  }
});
appen.mount('#appen');
