<template>
<div>
  <Navigation/>
  <div class="row content">
    <SideBar/>
    <div class="col-12 col-sm-9 col-md-9 col-lg-9 col-xl-9">
      <div class="container">
        <div v-for="i in 3" v-bind:key = "i" class="question-box text-left">
          <div class="question-title">
            <router-link :to="{ name: 'user', params: { userId: 123 }}">
              <h3>Judul Pertanyaan</h3>
            </router-link>
          </div>
          <div class="question-content">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
              <a>show detail...</a>
            </p>
          </div>
          <div class="question-footer">
            <ul class="list-inline">
              <li class="list-inline-item"><strong>Vote:</strong> 2</li>
              <li class="list-inline-item"><strong>Comments:</strong> 0</li>
              <li class="list-inline-item"><strong>Creator:</strong> Dian</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import SideBar from '@/components/SideBar.vue'
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'Question',
  components: {
    SideBar,
    Navigation
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