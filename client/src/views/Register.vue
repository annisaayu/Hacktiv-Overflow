<template>
<div>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-sm-5 col-md-4 col-lg-4 col-xl-4">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-primary">Register</button>
        </form>
        <p>have an account ? <router-link to="/">Login</router-link></p>
      </div>
    </div>
  </div>
</div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Register',
  components: {
    HelloWorld
  }
}
</script>