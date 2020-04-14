<template>
  <div>
    <h1>Order Ghorls</h1>
    <h3>Click to order</h3>
    <b-table :items="menu" :fields="fields" striped responsive="sm">
      <!-- If you want to add something to each row of one column,
          you can specify it inside another nested template then call v-slot:cell(NameOfTheFieldHere) -->
      <template v-slot:cell(action)="data">
        <b-button size="sm" @click="order(data.index)" variant="success">
          {{ itemSelected(data.index) }}
        </b-button>
      </template>
    </b-table>
    <YourOrders :showOrders="showOrders" :items="menu" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import YourOrders from "../components/YourOrders";
export default {
  components: {
    YourOrders
  },
  data() {
    return {
      fields: ["name", "age", "price", "action"],
      showOrders: false,
      selectedItem: null,
      hasOrder: false
    };
  },
  computed: {
    // How to add another data here inside menu array? ex. I want to add an active: false data. ----look at menu.js
    // I tried the spread operator but it wont add inside the menu array. Thanks for helping me.
    ...mapState(["menu"])
  },
  methods: {
    order(index) {
      this.selectedItem = index;
      this.showOrders = !this.showOrders;
      if (this.selectedItem === index) {
        this.hasOrder = false;
      } else {
        this.hasOrder = true;
      }
    },
    itemSelected(index) {
      let itemSelected = "Order";
      if (this.selectedItem === index) {
        itemSelected = "Cancel";
      }
      return itemSelected;
    }
  }
};
</script>
