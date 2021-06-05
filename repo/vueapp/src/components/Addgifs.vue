
<template>
        
  <!--<div class="form-group">
    <label for="exampleFormControlFile1">ADD Gifs</label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1">
  </div>!--->
  
    <!---<div class="form-group">
    <label for="exampleFormControlTextarea1">Create Post</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div><!-->

    

  <div class="form-group">
    
     <h3>Create Post</h3>
          
        <label for="exampleFormControlTextarea1">GIFs</label>
         <input type="file" class="form-control-file"   id="exampleFormControlFile1">
        <br>
        <label>Title</label>
         <input type="text" class="form-control" v-model="gags.title" placeholder="Title" />
      
       <button class="btn btn-primary btn-block"
        @click="create">
     Send</button>
          
  
   </div>
  

  </template>

<script>
import GifsService from '@/services/GifsService'
export default {
  name: "Addgifs",
  data () {
    return {
      gags: {
      imageUrl: 'null',
      title: 'null',
      }
    }
  },
  methods: {
  async create () {
     // try {
    const response =  await  GifsService.post(this.gags)
    console.log(response)
    //   } catch (err) {
         
     //   console.log(err)
//}
     this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
