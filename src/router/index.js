import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Users from '../views/Users.vue';
import UsersPosts from '../views/UsersPosts.vue';
import UsersProfile from '../views/UsersProfile.vue';


Vue.use(Router)    //プラグインの適用Routerが使えるようになるだけ

//  export defaultとする事で、Routerの中身をmain.jsのimport router from './router/index.js';で呼べるようにする    mode: "history"とすることでURLに/#/が付かなくなる
export default new Router ({
  mode: "history",
  routes: [
    { path: '/', component: Home },
    {
      path: '/users/:id',
      component: Users,
      props: true,
      children: [
        { path: 'posts', component: UsersPosts},
        { path: 'profile', component: UsersProfile, name: 'users-id-profile'}
      ]
    }
  ]
});