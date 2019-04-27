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
  font-family: inherit;
  font-weight: bold;
  color: #ffffff;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  background-color: #4aa773;
  border: 1px solid #37a367;
  cursor: pointer;
  box-shadow: 0 2px #2d8555;
  padding: 10px 22px;
  border-radius: 5px;
}
</style>
