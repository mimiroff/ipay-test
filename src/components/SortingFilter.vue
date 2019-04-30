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

<style>
</style>
