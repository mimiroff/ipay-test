<template>
  <input
    class="customers-table__filter"
    type="text"
    :value="sort"
  >
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
