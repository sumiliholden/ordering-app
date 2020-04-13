<template>
  <div>
    <h1>Order Ghorls</h1>
    <h3>Click to order</h3>
    <b-table :items="items" :fields="fields" striped responsive="sm">

      <!-- If you want to add something to each row of one column,
          you can specify it inside another nested template then call v-slot:cell(NameOfTheFieldHere) -->
      <template v-slot:cell(action)>
        <b-button size="sm" @click="!this.ordered" variant="success">
          {{ ordered ? "Cancel" : "Order" }}
        </b-button>
      </template>
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
