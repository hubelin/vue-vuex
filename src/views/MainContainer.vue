<template>
  <div>
    <h1>Main Container</h1>
    <TotalsDisplay></TotalsDisplay>
    <MarketsContainer></MarketsContainer>
  </div>
</template>

<script>
import MarketsContainer from "./MarketsContainer";
import TotalsDisplay from "../components/TotalsDisplay";
export default {
  name: "MainContainer",
  components: {
    MarketsContainer,
    TotalsDisplay
  }
};
</script>

<style></style>
