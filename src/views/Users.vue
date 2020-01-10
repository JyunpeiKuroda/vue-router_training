<template>
  <div>
    <h3>Users</h3>
    <router-link to="/users/1">ユーザー1</router-link>
    <router-link to="/users/2">ユーザー2</router-link>
    <hr>
    <h1>User No. {{ $route.params.id }}</h1>
  </div>
</template>

<script>
export default {
  watch: {
    $route(to, from) {
      console.log(to);
      console.log(from);
    }
  }
};
</script>