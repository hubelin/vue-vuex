<template>
  <div class="markets-display">
    <MarketDisplay></MarketDisplay>
  </div>
</template>

<script>
import MarketDisplay from "./MarketDisplay";
export default {
  name: "MarketsDisplay",
  components: {
    MarketDisplay
  }
};
</script>

<style>
.markets-display {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
