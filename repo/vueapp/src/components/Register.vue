<template>

   <div class="form-group">
    <h3>Sign Up</h3>
      
        <label>Email Address</label>
         <input type="email" class="form-control" v-model="email" placeholder="Email" />
         <br>
        <label>Create Password</label>
         <input type="password" class="form-control" v-model="password" placeholder="Password" />
     
   <button @click="register" class="btn btn-primary btn-block">
     Register</button>
   </div>
      
</template>


<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  ///name: 'Register',
    data () {
    return {
        email: '',
        password: ''
      }
    },
    methods: {
      async  register () {
       const response = await AuthenticationService.register({
            email : this.email,
            password: this.password
          })
          
        console.log(response.data)
         this.$router.push('/login')
           this.$store.dispatch('setToken', response.data.token)
           this.$store.dispatch('setUser', response.data.user)
       },
       
        
   }
   
 }
 
</script>