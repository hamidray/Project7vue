<template>
  <form @submit.prevent="sendFile" enctype="multipart/form-data">
     <div v-if="message"
     :class="`message ${error ? 'is-danger' : 'is-success'}`"
     >
     <div class="message-body">{{message}}</div>
     </div>
    <div class="field">
      <label for="exampleFormControlTextarea1">Add Gifs</label>
          <div class="file is-boxed is-primary">
            <label class="file-label">
           <input
              type="file"
              ref="file"
              @change="selectFile"
              class="file-input"
            />
            <span class="file-cta">
              <span class="file-icon">
                <i class="fas fa-upload"></i>
              </span>
              <span class="file-label">
                Choose A File
              </span>
              </span>
              <span v-if="file" class="file-name">{{file.name}}</span>
         </label>
            </div>      
       </div>  
               <div class="form-group">
    
             
        <label for="exampleFormControlTextarea1">Comment</label>
          <input type="text" class="form-control" v-model="comment" placeholder="write a comment" />
        <br>
        </div>
     <div class="field">   
      <button class="button is-info">Send</button>
     </div>
 </form>
</template>

<script>   
  import axios from 'axios'
export default {
 
  name: 'Addgifs',
    data() {
    return {
     file: "",
     comment: "",
     message: "",
     error: false
    }
  },
  methods: {
    selectFile() {
      this.file =this.$refs.file.files[0];
      //this.file = this.file;
       this.error = false;
       this.message = "";
    },
      
       async sendFile() {
         const formData = new FormData();
         formData.append('file', this.file);
         formData.append('comment', this.comment);         
          try{
             await axios.post('http://localhost:3000/addgifs', formData);
             this.message = "File has been uploaded";
             this.file = "";
             this.comment = "";
             this.error = false;    
                     
         } catch(err) {
            this.message = err.response.data.error;
            this.error = true;
          }
           this.$router.push('/')
       }
    }  
}
</script>
