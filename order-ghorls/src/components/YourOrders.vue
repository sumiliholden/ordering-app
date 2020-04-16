<template>
  <div v-if="showOrders">
    <b-list-group v-for="(item, index) in items" :key="index">
      <b-list-group-item
        class="d-flex justify-content-between align-items-center"
      >
        {{ item.name }}
        <h5>₱{{ item.price }}</h5>
      </b-list-group-item>
    </b-list-group>
    <b-list-group-item
      class="d-flex justify-content-between align-items-center"
    >
      <h3>Total</h3>
      <h3>₱{{ total }}</h3>
    </b-list-group-item>
  </div>
</template>
<script>
export default {
  props: {
    showOrders: Boolean,
    items: Array,
    total: Number
  }
};
</script>
