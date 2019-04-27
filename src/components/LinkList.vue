<template>
  <ul class="link-list">
    <AppLinkListItem
      v-for="(link, index) in links"
      :key="index"
      :link="link"
    ></AppLinkListItem>
  </ul>
</template>
<script>
import AppLinkListItem from "./LinkListItem.vue";
export default {
  name: "Header",
  data() {
    return {
      links: [
        { title: "Invoices", src: "#", active: true },
        { title: "Customers", src: "#", active: false }
      ]
    };
  },
  components: {
    AppLinkListItem
  }
};
</script>

<style>
.link-list {
  /* min-width: 200px; */
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
