<template>
  <button
    class='button'
    type="button"
  >{{text}}</button>
</template>
<script>
export default {
  name: "Button",
  props: ["text"]
};
</script>

<style scoped>
.button {
  font-family: "OpenSans", sans-serif;
  font-size: 16px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 1px;
  color: #ffffff;
  margin: 0;
  background-color: #4aa773;
  border: 1px solid #37a367;
  cursor: pointer;
  box-shadow: 0 2px 0 0 #2d8555;
  padding: 8px 20px;
  border-radius: 4px;
}
</style>
