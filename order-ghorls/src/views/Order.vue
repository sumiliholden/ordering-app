<template>
  <div>
    <h1>Order Ghorls</h1>
    <h3>Click to order</h3>
    <b-table :items="items" :fields="fields" striped responsive="sm">
      <!-- I want to add this button below but it wont work. my function for this is after the button clicked, 
      the ordered data inside items will change to opposite value? -->
      <!-- <b-button size="sm" @click="!this.ordered">
          {{ ordered ? "Cancel" : "Order" }}
        </b-button> -->
    </b-table>
    <YourOrders :showOrders="showOrders" />
  </div>
</template>

<script>
import YourOrders from "../components/YourOrders";
export default {
  components: {
    YourOrders
  },
  data() {
    return {
      fields: ["first_name", "last_name", "age", "action"],
      items: [
        {
          age: 40,
          first_name: "Mia",
          last_name: "Khalifa"
        },
        { age: 21, first_name: "Gerald", last_name: "Anderson" },
        {
          age: 89,
          first_name: "Geneva",
          last_name: "Wilson",
          ordered: true
        },
        { age: 38, first_name: "Albert", last_name: "Hernandez" }
      ],
      showOrders: false
    };
  },
  methods: {}
};
</script>
