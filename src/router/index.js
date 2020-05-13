import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Users from '../views/Users.vue';
import UsersPosts from '../views/UsersPosts.vue';
import UsersProfile from '../views/UsersProfile.vue';
import HeaderHome from '../views/HeaderHome.vue';
import HeaderUsers from '../views/HeaderUsers.vue';


Vue.use(Router)    //プラグインの適用Routerが使えるようになるだけ

//  export defaultとする事で、Routerの中身をmain.jsのimport router from './router/index.js';で呼べるようにする    mode: "history"とすることでURLに/#/が付かなくなる
export default new Router ({
  mode: "history",
  routes: [
    {
      path: '/',
      components: {
        default: Home,
        header: HeaderHome
      }
    },
    {
      path: '/users/:id',
      components: {
        default: Users,
        header: HeaderUsers
      },
      props:{
        default: true,
        header: false
      },
      children: [
        { path: 'posts', component: UsersPosts},
        { path: 'profile', component: UsersProfile, name: 'users-id-profile'}
      ]
    }, {
      path: "*",
      redirect: "/"    // http://localhost:8081/helloにアクセスされると、http://localhost:8081のHome画面に戻される。path: "*",としているので上で((指定している以外のpathは"全て"Homeにリダイレクト。
    }
  ]
});