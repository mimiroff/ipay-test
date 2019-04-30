<template>
  <div class="user-login">
    <div class="user-login__image">
      <svg
        viewBox="-1 -1 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="15"
          cy="15"
          r="15"
          fill="none"
          stroke="black"
          stroke-width="1"
        />
        <circle
          cx="15"
          cy="10"
          r="5"
          fill="none"
          stroke="black"
        />
        <path
          d="M4 25 Q 15 18 26 25"
          stroke="black"
          fill="transparent"
        />
      </svg>
    </div>
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
  font-size: 14px;
  color: rgba(0, 0, 0, 0.86);
}

.user-login__image {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
</style>
