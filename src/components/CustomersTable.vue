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
  font-weight: 700;
  margin-bottom: 20px;
}

.customers-table__filter-group {
  display: flex;
  margin-bottom: 34px;
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
  border-bottom: 2px solid #d0d0d0;
  padding: 0 12px 16px 12px;
}

.customers-table__main-heading:first-child {
  width: 50%;
}
</style>
