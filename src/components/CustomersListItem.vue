<template>
  <div class="customers-list__item">
    <div class="customers-list__title-block">
      <span class="customers-list__item-title">
        {{customer.title}}
      </span>
      <AppStatusTag
        class="customers-list__item-status"
        v-if="customer.tag"
        :tagTitle="customer.tag"
      ></AppStatusTag>
    </div>
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
  width: 100%;
  height: 46px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  background-color: #ffffff;
  padding: 0 11px;
  font-size: 14px;
  font-family: inherit;
  line-height: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.customers-list__item-title {
  color: #373a3c;
}

.customers-list__title-block {
  position: relative;
}

.customers-list__item-status {
  position: absolute;
  top: -8px;
  right: -140px;
}

.customers-list__item-note,
.note-link {
  color: #a4a4a4;
}
</style>