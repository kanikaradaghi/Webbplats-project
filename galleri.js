const app = Vue.createApp({
  data() {
    return {
      cart: localStorage.getItem('cart') ? parseInt(localStorage.getItem('cart')) : 0,
      tavlor: [
        {
          id:1,
          bild: 'Bilder/historiskbild1.jpeg',
          beskrivning: 'En tavla som passar både stora och små. Magin i denna färgsättning gör att tankarna dras åt en pompig vardag som speglar lyx.',
          pris: 2000
        },
        {
          id:2,
          bild: 'Bilder/historiskbild2.jpeg',
          beskrivning: 'Blå i kallt och varmare toner kan locka fram både känslor och tankar du önskar komma närmre, men som du inte hinner med i vardagslivet. Detta är en tavla som stödjer välmående och glädje',
          pris: 1250
        },
        {
          id:3,
          bild: 'Bilder/historiskbild3.jpeg',
          beskrivning: 'En tavla som tar dig tillbaka till det antika romerska riket. En tavla som utstrålar trygghet och stabilitet och får en att somna gott om nätterna.',
          pris: 1500
        },
        {
          id:4,
          bild: 'Bilder/historiskabilder3.jpeg',
          beskrivning: 'En tavla som går hem hos både stora och små. Ett lugnt lägger sig över dig när stressen smyger sig på eller sömnen kallar.',
          pris: 2500
        },
        {
          id:5,
          bild: 'Bilder/india.jpeg',
          beskrivning: 'Tavlan för dig som söker lyx och romantik i en perfekt balans. Detta är en av våra storsäljare.',
          pris: 1000
        },
        {
          id:6,
          bild: 'Bilder/newyork.jpeg',
          beskrivning: 'Stadsliv kan framkalla upplevelsen både av framtid och nutid. För dig som bor ute på landet som saknar stadslivet eller bor i stan och vill förstärka känsla av ett liv i rörelse',
          pris: 500
        }     
]    
}},
  
  methods: {
    addToCart() {
      this.cart++;
      localStorage.setItem('cart', this.cart);
  }
  }
});
app.mount('#app');