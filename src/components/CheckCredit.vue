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
      title: "Check credit",
      placeholder: "Enter broker MC#, DOT#, DBA name or legal name"
    };
  }
};
</script>

<style>
.check__title {
  margin: 0;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  line-height: 1;
  color: #373a3c;
}

.check__input {
  width: 962px;
  height: 46px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  background-color: #ffffff;
  padding: 0 16px;
  font-size: 16px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: -0.1px;
}
</style>