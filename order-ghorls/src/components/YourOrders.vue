<template>
  <div v-if="showOrders">
    <b-list-group v-for="(item, index) in items" :key="index">
      <b-list-group-item
        class="d-flex justify-content-between align-items-center"
      >
        {{item.name}}
        <b-badge variant="primary" pill>{{item.price}}</b-badge>
      </b-list-group-item>
        
    </b-list-group>
    <h3>Total</h3>
        <b-badge variant="primary" pill>₱1000</b-badge>
  </div>
</template>
<script>
export default {
  props: {
    showOrders: Boolean,
    items: Array
  }
};
</script>
