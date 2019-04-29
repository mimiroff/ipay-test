<template>
  <ul class="link-list">
    <AppLinkListItem
      class="link-list__item"
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

<style scoped>
.link-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
}

.link-list__item {
  margin-right: 28px;
}

.link-list__item:last-child {
  margin-right: 0px;
}
</style>
