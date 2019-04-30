<template>
  <tr class="customer-table__item-row">
    <td class="customers-table__item-cell">
      {{customerData.name}}
    </td>
    <td class="customers-table__item-cell">
      {{customerData.invoices}}
    </td>
    <td class="customers-table__item-cell">
      {{customerData.lastInvoice}}
    </td>
    <td class="customers-table__item-cell">
      <AppStatusTag
        class="AppStatusTag"
        :tagTitle="customerData.status"
      ></AppStatusTag>
    </td>
    <td class="customers-table__item-cell">
      {{customerData.AR | USD}}
    </td>
  </tr>
</template>

<script>
import AppStatusTag from "./StatusTag.vue";

export default {
  name: "CustomersTableItem",
  props: ["customerData"],
  components: {
    AppStatusTag
  }
};
</script>

<style scoped>
.customers-table__item-cell {
  text-align: left;
  color: #373a3c;
  line-height: 1.5;
  border-bottom: 1px solid #efefef;
  padding: 8px 10px 9px;
}

.customer-table__item-row:hover {
  background-color: #f8f8f8;
}

.AppStatusTag {
  margin: 0;
}
</style>