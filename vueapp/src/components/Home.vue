<template>
   <form>
       
  
  <div class="form-group">
    <h3> Account Info </h3>
    
    <button type="button" class="btn btn-primary">Delete</button>

  </div>

    <div class="form-group">
    <label for="exampleFormControlTextarea1">Create Post</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
 
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Contents</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="1"></textarea>
  </div>

  <!----<div class="form-group">
    <label for="exampleFormControlSelect1">Heat</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>--->
  <div class="form-group">
    <label for="exampleFormControlFile1">ADD Gifs</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1">
  </div>

  <button type="button" class="btn btn-primary btn-lg btn-block">Post</button>

</form>

  </template>

<script>
export default {
    name: 'Home'
    
}
</script>

<style>
  
</style>