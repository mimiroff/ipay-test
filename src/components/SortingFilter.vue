<template>
  <div class="customers-table__filter">
    <span>{{sort}}</span>
  </div>
</template>
<script>
export default {
  name: "SortingFilter",
  data() {
    return {
      sort: "Sort: Open AR"
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
