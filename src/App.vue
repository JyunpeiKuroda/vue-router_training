<template>
  <div style="width: 700px; margin: auto; padding-top: 50px;">
    <nav>
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
    <router-view></router-view>
  </div>
</template>

<style scoped>
  .link{
    margin: 10px;
  }
  .link--activ{
  font-size: 30px;
  }

</style>

// <router-view>を宣言することにより、下の階層のmain.jsに行き。import router from './router/index.js';を読み込み'./router/index.js'に行きexport default new Routerの中で指定しているPathにより変わる。