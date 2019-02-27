<template>
  <form @submit.prevent="addMarket">
    <h3>Create New Market</h3>
    <h3>Location:</h3>
    <input type="text" v-model="location">
    <button type="Submit">Add Market</button>
  </form>
</template>

<script>
export default {
  name: 'MarketCreator',
  computed: {
    location: {
      set(value) {
        this.$store.commit('SET_LOCATION', value)
      }
    }
  },
  methods: {
    addMarket() {
      this.$store.dispatch('addMarket')
    }
  }
}
</script>

<style></style>
