<template>
  <div class="markets-display">
    <div v-for="market in markets">
      <MarketDisplay :location="market.location" :marketId="market.marketId" :cards="market.cards"></MarketDisplay>
    </div>
  </div>
</template>

<script>
import MarketDisplay from './MarketDisplay'
import { mapState } from 'vuex'
export default {
  name: 'MarketsDisplay',
  components: {
    MarketDisplay
  },
  computed: mapState(['markets'])
}
</script>

<style>
.markets-display {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
