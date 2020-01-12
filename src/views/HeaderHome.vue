<template>
  <nav>
    <h2>HomeのHeaderだぞ</h2>
    <router-link
      to = "/"
      active-class="link--activ"
      exact
      class="limk"
    >Home</router-link>
    <router-link
      to = "/users"
      exact
      active-class="link--activ"
      class= "link"
    >Users</router-link>
  </nav>
</template>

<style scoped>
  .link{
    margin: 10px;
  }
  .link--activ{
  font-size: 30px;
  }
</style>