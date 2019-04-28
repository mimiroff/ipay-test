<template>
  <div class="customers-table__filter">
    <span>{{period}}</span>
  </div>
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

<style scoped>
.customers-table__filter {
  width: 180px;
  height: 14px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  background-color: #ffffff;
  padding: 11px;
  color: #555555;
}
</style>
