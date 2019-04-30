<template>
  <div class="customers-list__item">
    <span class="customers-list__item-title">
      {{customer.title}}
    </span>
    <AppStatusTag
      v-if="customer.tag"
      :tagTitle="customer.tag"
    ></AppStatusTag>
    <span
      v-if="customer.note"
      class="customers-list__item-note"
    >Broker not found. Please inquire at <a
        class="note-link"
        href="mailto:checks@getinstapay.com"
      >checks@getinstapay.com</a></span>
  </div>
</template>
<script>
import AppStatusTag from "./StatusTag.vue";

export default {
  name: "CustomersListItem",
  props: ["customer"],

  components: {
    AppStatusTag
  }
};
</script>

<style>
.customers-list__item {
  width: 962px;
  height: 46px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  background-color: #ffffff;
  padding: 0 16px;
  font-size: 16px;
  line-height: 1.5;
  display: flex;
  align-items: center;
}

.customers-list__item-title {
  color: #373a3c;
  margin-right: 20px;
}

.customers-list__item-note,
.note-link {
  color: #888888;
  margin-left: auto;
}
</style>