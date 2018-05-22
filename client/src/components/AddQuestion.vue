<template>
  <!-- The Modal -->
  <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">
      
        <!-- Modal Header -->
        <div class="modal-header">
          <h4 class="modal-title">Add Question</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        
        <!-- Modal body -->
        <div class="modal-body text-left">
          <form>
            <div class="form-group">
              <label for="question">Question: </label>
              <input type="text" class="form-control" id="question" placeholder="Enter your question">
            </div>
            <div class="form-group">
              <label for="description">Password: </label>
              <textarea rows="5" class="form-control" id="description" placeholder="description"></textarea>
            </div>
          </form>
        </div>
        
        <!-- Modal footer -->
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" data-dismiss="modal">Add</button>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
