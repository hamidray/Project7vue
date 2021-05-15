<template>
 
   <div class="form-group">
     <h3>Login</h3>

        <label>Email</label>
         <input type="email" class="form-control" v-model="email" placeholder="Email" />
        <br>
        <label>Password</label>
         <input type="password" class="form-control" v-model="password" placeholder="Password" />
       
       <button class="btn btn-primary btn-block"
        @click="login">
     Login</button>
  
   </div>
    
    
</template>


<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login () {
     const response = await AuthenticationService.login({
        email: this.email,
        password: this.password
      })
        console.log(response)
      ///localStorage.setItem('token', respone.data.token)
     //console.log (localStorage.setItem('token', respone.data.token))
      
      this.$router.push('/')
    } 
      
    }
  }


</script>
