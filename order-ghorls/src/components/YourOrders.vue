<template>
  <div>
    <b-list-group v-if="showOrders">
      <b-list-group-item
        class="d-flex justify-content-between align-items-center"
      >
        Mia Khalifa
        <b-badge variant="primary" pill>14</b-badge>
      </b-list-group-item>

      <b-list-group-item
        class="d-flex justify-content-between align-items-center"
      >
        Gerald Anderson
        <b-badge variant="primary" pill>2</b-badge>
      </b-list-group-item>

      <b-list-group-item
        class="d-flex justify-content-between align-items-center"
      >
        Alberto Hernandez
        <b-badge variant="primary" pill>1</b-badge>
      </b-list-group-item>
      <b-list-group-item
        class="d-flex justify-content-between align-items-center"
      >
        <h3>Total</h3>
        <b-badge variant="primary" pill>₱1000</b-badge>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>
<script>
export default {
  props: {
    showOrders: Boolean
  }
};
</script>
