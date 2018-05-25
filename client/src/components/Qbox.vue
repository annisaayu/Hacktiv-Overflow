<template>
  <div class="question-box text-left">
    <div class="question-title">
      <router-link :to="`/questions/${question._id}`">
        <h3> {{ question.title }} </h3>
      </router-link>
    </div>
    <div class="question-content">
      <p>
        {{ question.description }}
        <a>show detail...</a>
      </p>
    </div>
    <div class="question-footer">
      <ul class="list-inline">
        <li class="list-inline-item"><strong>Author:</strong> {{ question.userId.email}}</li>
        <li class="list-inline-item"><i class="fas fa-thumbs-up"></i> {{ question.likes.length }}</li>
        <li class="list-inline-item"><i class="fas fa-thumbs-down"></i> {{ question.unLikes.length }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import SideBar from '@/components/SideBar.vue'
import Navigation from '@/components/Navigation.vue'

export default {
  props: ['question'],
  name: 'Qbox',
  created () {
    if ( !localStorage.hasOwnProperty('token') ) {
      window.location.replace('/')
    } else {
    }
  },
  methods: {
  }
}
</script>

<style>
.navbar a {
  color:aliceblue;
}
.content {
  padding: 20px 0;
}
.question-box {
  background-color: #e0f7fa;
  padding: 20px;
  margin-bottom: 20px;
}
</style>
