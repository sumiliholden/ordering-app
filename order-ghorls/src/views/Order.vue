<template>
  <div>
    <h1>Order Ghorls</h1>
    <h3>Click to order</h3>
    <b-table :items="getAllMenu" :fields="fields" striped responsive="sm">
      <!-- If you want to add something to each row of one column,
          you can specify it inside another nested template then call v-slot:cell(NameOfTheFieldHere) -->
      <template v-slot:cell(action)="data">
        <b-button
          size="sm"
          @click="order(getAllMenu[data.index].product_id, data.index)"
          variant="success"
        >
          {{ getAllMenu[data.index].active ? "Cancel" : "Order" }}
        </b-button>
      </template>
    </b-table>
    <YourOrders
      :showOrders="orders.length === 0 ? false : true"
      :items="orders"
      :total="totalPrice"
    />
    <div v-if="orders.length === 0 ? false : true">
      <b-button
        @click="handleAddOrder"
        variant="outline-primary"
        size="lg"
        style="float:right"
        >Order Now</b-button
      >
    </div>
  </div>
</template>

<script>
// import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
import YourOrders from "../components/YourOrders";
export default {
  components: {
    YourOrders
  },
  data() {
    return {
      fields: ["name", "age", "price", "action"],
      selectedItem: null,
      orders: [],
      totalPrice: 0
    };
  },
  computed: {
    // How to add another data here inside menu array? ex. I want to add an active: false data. ----look at menu.js
    // I tried the spread operator but it wont add inside the menu array. Thanks for helping me.
    ...mapGetters(["getAllMenus"]),
    getAllMenu() {
      this.getAllMenus.forEach(v => {
        v.active = false;
      });
      return this.getAllMenus;
    }
  },
  methods: {
    ...mapActions(["addOrder"]),
    order(index) {
      this.getAllMenu[index].active = !this.getAllMenu[index].active;
      if (this.getAllMenu[index].active) {
        this.orders.push(this.getAllMenu[index]);
      } else {
        this.handleRemove(index);
      }
      this.handleTotalPrice();
      // this.showOrders = !this.showOrders;
    },
    handleRemove(id) {
      const index = this.orders.findIndex(order => order.product_id === id);
      this.orders.splice(index, 1);
    },
    handleTotalPrice() {
      this.totalPrice = this.orders.reduce((acc, item) => acc + item.price, 0);
      return this.totalPrice;
    },
    handleAddOrder() {
      // const allOrders = this.orders.reduce((arr, obj) => {
      //   return arr.concat({ name: obj.name });
      // }, []);
      const allOrders = this.orders
        .reduce((newarr, obj) => {
          return newarr.concat(obj.name);
        }, [])
        .toString()
        .split(",")
        .join(",");

      console.log(allOrders);
      const orders = "orders";
      const totalPrice = this.totalPrice;
      const payload = {
        orders,
        myOrder: {
          allOrders,
          totalPrice
        }
      };
      this.addOrder(payload);
      this.orders = [];

      // Will set all active in getAllMenus to false. after purchasing an item.
      this.getAllMenus.forEach(v => {
        v.active = false;
      });
      return this.getAllMenus;
    }
  }
};
</script>
