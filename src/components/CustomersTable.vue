<template>
  <section class="customers-table">
    <h3 class="customers-table__title">{{title}}</h3>
    <div class="customers-table__filter-group">
      <AppPeriodFilter class="periodFilter"></AppPeriodFilter>
      <AppSortingFilter></AppSortingFilter>
    </div>
    <table class="customers-table__main">
      <tr>
        <th
          v-for="(column, index) in tableColumns"
          :key="index"
          class="customers-table__main-heading"
        >{{column}}</th>
      </tr>
      <AppCustomersTableItem
        v-for="(data, index) in customersData"
        :key="index"
        :customerData="data"
      ></AppCustomersTableItem>
    </table>
  </section>
</template>

<script>
import AppPeriodFilter from "./PeriodFilter.vue";
import AppSortingFilter from "./SortingFilter";
import AppCustomersTableItem from "./CustomersTableItem";

export default {
  name: "CustomersTable",
  props: ["customersData"],
  data() {
    return {
      title: "Customers",
      tableColumns: [
        "Customer",
        "Invoices",
        "Last invoice",
        "Status",
        "Open AR"
      ]
    };
  },
  components: {
    AppPeriodFilter,
    AppSortingFilter,
    AppCustomersTableItem
  }
};
</script>

<style scoped>
.customers-table__title {
  font-size: 24px;
  font-weight: bold;
  line-height: 1;
  margin: 0;
  margin-bottom: 18px;
  color: #373a3c;
}

.customers-table__filter-group {
  display: flex;
  margin-bottom: 28px;
}

.periodFilter {
  margin-right: 10px;
}

.customers-table__main {
  width: 100%;
  border-collapse: collapse;
}

.customers-table__main-heading {
  text-align: start;
  color: #888888;
  border-bottom: 1px solid #cccccc;
  padding: 0 10px 11px 10px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
}

.customers-table__main-heading:first-child {
  width: 500px;
}

.customers-table__main-heading:nth-child(2) {
  width: 70px;
}

.customers-table__main-heading:nth-child(3) {
  width: 109px;
}

.customers-table__main-heading:nth-child(4) {
  width: 119px;
}

.customers-table__main-heading:last-child {
  width: 98px;
}
</style>
