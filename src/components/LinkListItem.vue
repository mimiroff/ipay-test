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
  padding: 5px 10px 7px 10px;
  display: inline-block;
}

.link-list__item-link {
  color: #1f1f1f;
  opacity: 0.8;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  vertical-align: middle;
  text-decoration: none;
}

.active,
.link-list__item:hover {
  background-color: #e0e7ec;
  border-radius: 4px;
}

.active > .link-list__item-link,
.link-list__item:hover > .link-list__item-link {
  opacity: 1;
}
</style>