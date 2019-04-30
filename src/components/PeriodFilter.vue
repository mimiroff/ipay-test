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
  width: 146px;
  height: 34px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  background-color: #ffffff;
  padding: 0 16px;
  font-size: 16px;
  line-height: 1.5;
  font-family: inherit;
  color: #555555;
  cursor: pointer;
}
</style>
