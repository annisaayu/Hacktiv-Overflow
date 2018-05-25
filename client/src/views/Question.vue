<template>
<div>
  <Navigation/>
  <div class="row content">
    <SideBar/>
    <div class="col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9">
      <div class="container">
        <Qbox v-for="(question, index) in questions" :key = "index" :question="question" />
      </div>
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import SideBar from '@/components/SideBar.vue'
import Navigation from '@/components/Navigation.vue'
import Qbox from '@/components/Qbox.vue'

export default {
  name: 'Question',
  components: {
    SideBar,
    Navigation,
    Qbox
  },
  data () {
    return {
      questions : ''
    }
  },
  created () {
    if ( !localStorage.hasOwnProperty('token') ) {
      window.location.replace('/')
    } else {
      this.getQuestion()
    }
  },
  methods: {
    getQuestion () {
      let self = this
      axios.get('http://localhost:3000/questions/', {
        headers: {
          token: localStorage.getItem('token')
        }
      })
        .then((response) => {
          self.questions = response.data.questions
          console.log(response.data.questions);
        })
        .catch((err) => {
          console.log('ini err', err)
        })
    }
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
