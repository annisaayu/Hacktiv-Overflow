<template>
  <div class="col-12 col-sm-3 col-md-3 col-lg-3 col-xl-3">
    <div class="container">
      <button type="button" class="btn btn-info btn-lg btn-block" data-toggle="modal" data-target="#myModal">Add Question</button>
    </div>
    <AddQuestion/>
  </div>
</template>

<script>
import AddQuestion from '@/components/AddQuestion'

export default {
  name: 'SideBar',
  components: {
    AddQuestion
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
