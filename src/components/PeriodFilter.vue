<template>
  <input
    class="customers-table__filter"
    type="text"
    :value="period"
  >
</template>
<script>
export default {
  name: "PeriodFilter",
  data() {
    return {
      period: "Last month"
    };
  }
};
</script>

<style>
.customers-table__filter {
  width: 180px;
  height: 36px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  background-color: #ffffff;
  padding: 0 11px;
  font-size: 14px;
  font-family: inherit;
  line-height: inherit;
  color: #555555;
}
</style>
