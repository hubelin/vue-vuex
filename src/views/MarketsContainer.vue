<template>
  <div>
    <h1>MarketsContainer</h1>
    <MarketCreator></MarketCreator>
    <MarketsDisplay></MarketsDisplay>
  </div>
</template>

<script>
import MarketsDisplay from "../components/MarketsDisplay";
import MarketCreator from "../components/MarketCreator";
export default {
  name: "MarketsContainer",
  components: {
    MarketsDisplay,
    MarketCreator
  }
};
</script>

<style></style>
