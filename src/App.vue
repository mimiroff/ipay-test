<template>
  <div id="app">
    <AppHeader class="appHeader"></AppHeader>
    <main class="main-content">
      <div class="main-container">
        <AppCheck class="appCheck"></AppCheck>
        <AppCustomersTable
          class="customersTable"
          :customersData="customersData"
        ></AppCustomersTable>
        <div class="customers-list">
          <AppCustomersListItem
            class="customers-list__element"
            v-for="(customer, index) in customersList"
            :key=index
            :customer="customer"
          ></AppCustomersListItem>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import AppHeader from "./components/Header.vue";
import AppCheck from "./components/CheckCredit.vue";
import AppCustomersListItem from "./components/CustomersListItem.vue";
import AppCustomersTable from "./components/CustomersTable.vue";

export default {
  name: "app",
  data() {
    return {
      customersList: [
        {
          title: "Bieri Brokerage, LLC - MC #74674  - Salt Lake City, UT",
          tag: "Acceptable",
          note: false
        },
        { title: "Sam Bokher Broker", tag: "", note: false },
        {
          title: "Sam Bokher Broker",
          tag: "",
          note: true
        }
      ],
      customersData: [
        {
          name: "Bieri Brokerage, LLC - MC # 76569  - Salt Lake City, UT",
          invoices: 34,
          lastInvoice: "02/03/19",
          status: "Acceptable",
          AR: "52,380"
        },
        {
          name: "Coyote Logistics - Brooklyn, NY",
          invoices: 54,
          lastInvoice: "01/03/19",
          status: "Moderate",
          AR: "76,900"
        },
        {
          name: "C.H. Robinson - Austin, TX",
          invoices: 12,
          lastInvoice: "01/02/19",
          status: "Ineligible",
          AR: "12,000"
        }
      ]
    };
  },
  components: {
    AppHeader,
    AppCheck,
    AppCustomersListItem,
    AppCustomersTable
  }
};
</script>

<style>
@import "./assets/styles/style.css";
body {
  font-family: "HelveticaNeue", "Helvetica", "Arial", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.appCheck {
  margin-bottom: 33px;
}

.main-container {
  margin: 0 auto;
  width: 998px;
}

.appHeader {
  margin-bottom: 43px;
}

.customers-list {
  margin-left: -7px;
}

.customers-list__element {
  margin-bottom: 13px;
}

.customersTable {
  margin-bottom: 164px;
}
</style>
