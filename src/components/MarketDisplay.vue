<template>
  <div class="market-display">
    <h3>MarketID: {{ marketId[0] }}</h3>
    <h3>Location: {{ location[0] }}</h3>
    <h3>Cards: {{ cards[0] }}</h3>
    <h3>% of total</h3>
    <button @click="incrementCard">Add Card</button>
    <button>Delete Card</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'MarketDisplay',
  computed: mapState(['marketId', 'location', 'cards']),
  methods: {
    incrementCard() {
      this.$store.commit('INCREMENT_CARD')
    }
  }
}
</script>

<style>
.market-display {
  border: 1px solid black;
}
</style>
