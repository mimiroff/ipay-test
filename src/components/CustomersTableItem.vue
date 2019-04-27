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
      <AppStatusTag :tagTitle="customerData.status"></AppStatusTag>
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

<style>
.customers-table__item-cell {
  text-align: start;
  color: #373a3c;
  border-bottom: 2px solid #efefef;
  padding: 16px 12px;
}

.customer-table__item-row:hover {
  background-color: #f8f8f8;
}
</style>