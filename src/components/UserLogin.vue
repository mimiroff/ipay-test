<template>
  <div class="user-login">
    <div class="user-login__image"></div>
    <span class="user-login__name">{{username}}</span>
  </div>
</template>
<script>
export default {
  name: "UserLogin",
  data() {
    return {
      username: "Username"
    };
  }
};
</script>

<style scoped>
.user-login {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.user-login__name {
  color: #232323;
}

.user-login__image {
  width: 30px;
  height: 30px;
  border-radius: 20px;
  border: 1px solid #000000;
  background: no-repeat center url("../assets/img/user.png");
  margin-right: 10px;
}
</style>
