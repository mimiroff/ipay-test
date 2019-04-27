<template>
  <section class="check">
    <h3 class="check__title">{{title}}</h3>
    <input
      class="check__input"
      type="text"
      :placeholder="placeholder"
    >
  </section>
</template>
<script>
export default {
  name: "CheckCredit",
  data() {
    return {
      title: "Check Credit",
      placeholder: "Enter broker MC#, DOT#, DBA name or legal name"
    };
  }
};
</script>

<style>
.check__title {
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
}

.check__input {
  width: 100%;
  height: 46px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  background-color: #ffffff;
  padding: 0 11px;
  font-size: 14px;
  font-family: inherit;
  line-height: inherit;
}
</style>