<template>
  <li
    class="link-list__item"
    :class="{active: link.active}"
  >
    <a
      class="link-list__item-link"
      :href="link.src"
    >
      {{link.title}}
    </a>
  </li>
</template>
<script>
export default {
  name: "LinkListItem",
  props: ["link"]
};
</script>

<style scoped>
.link-list__item {
  padding: 6px 16px;
  display: inline-block;
}

.link-list__item-link {
  color: #4a4a4a;
  line-height: 1.15;
  vertical-align: middle;
  text-decoration: none;
}

.active,
.link-list__item:hover {
  background-color: #e0e7ec;
  border-radius: 5px;
}

.active > .link-list__item-link,
.link-list__item:hover > .link-list__item-link {
  color: #1f1f1f;
}
</style>