<template>
  <div
    class="status-tag"
    :class="status"
  >
    <span class="status-tag__title">{{tagTitle}}</span>
  </div>
</template>
<script>
export default {
  name: "StatusTag",
  props: ["tagTitle"],
  computed: {
    status() {
      return `tagStatus${this.tagTitle}`;
    }
  }
};
</script>

<style>
.status-tag {
  width: 116px;
  border-width: 2px;
  border-style: solid;
  border-radius: 18px;
  padding: 6px 0;
  text-align: center;
}

.status-tag__title {
  font-style: 16px;
}

.tagStatusAcceptable {
  color: #4aa773;
  border-color: #4aa773;
}

.tagStatusModerate {
  color: #f5a623;
  border-color: #f5a623;
}

.tagStatusIneligible {
  color: #555555;
  border-color: #555555;
}
</style>