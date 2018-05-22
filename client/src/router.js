import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Question from './views/Question.vue'
import QuestionDetail from './views/Answer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/questions',
      name: 'Question',
      component: Question
    },
    {
      path: '/questions/:id',
      name: 'QuestionDetail',
      component: QuestionDetail
    }
  ]
})
