<template>
  <div>
    <h1>All Orders</h1>
    <b-table striped hover :items="orders"> </b-table>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["orders"])
  }
};
</script>
