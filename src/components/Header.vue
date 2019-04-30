<template>
  <header class="main-header">
    <div class="main-header__container">
      <AppLogo class="main-header__logo"></AppLogo>
      <nav class="main-header__nav">
        <AppLinkList></AppLinkList>
        <div class="main-header__user-block">
          <AppButton
            class="appButton"
            :text="buttonText"
          ></AppButton>
          <AppUserLogin></AppUserLogin>
        </div>
      </nav>
    </div>
  </header>
</template>
<script>
import AppLogo from "./Logo.vue";
import AppLinkList from "./LinkList.vue";
import AppButton from "./Button.vue";
import AppUserLogin from "./UserLogin.vue";

export default {
  name: "Header",
  data() {
    return {
      buttonText: "New Invoice"
    };
  },
  components: {
    AppLogo,
    AppLinkList,
    AppButton,
    AppUserLogin
  }
};
</script>

<style scoped>
.main-header__logo {
  margin-top: 3px;
  margin-right: 37px;
  margin-left: 1px;
}
.main-header {
  background-color: #f8f8f8;
  border-bottom: 1px solid #efefef;
}

.main-header__container {
  padding: 0 79px 0 100px;
  margin: 0 auto;
  width: 1221px;
  height: 69px;
  display: flex;
  align-items: center;
}

.main-header__nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.main-header__user-block {
  display: flex;
}

.appButton {
  margin-right: 20px;
}
</style>
