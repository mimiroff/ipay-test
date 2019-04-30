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
  border-width: 1px;
  border-style: solid;
  border-radius: 20px;
  padding: 2px 0;
  text-align: center;
}

.status-tag__title {
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: 0.3px;
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