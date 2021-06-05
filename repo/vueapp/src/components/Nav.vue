<template>
    
    <nav class="navbar navbar-expand navbar-light fixed-top">
      
          <div class="container">
         
          <img src="icon-left-font-monochrome-black.png" alt="9GAG" width="200" height="150">
                
         
          <div class="collapse navbar-collapse">
            
          <ul class="navbar-nav ml-auto">
               
            
                <router-link v-if="$store.state.isUserLoggedIn" to="/" class="nav-link">Home</router-link>
                        
                <router-link v-if="$store.state.isUserLoggedIn" to="Addgifs" class="nav-link">ADD GIFs</router-link>
          

            <li class="nav-item">
               <router-link v-if="!$store.state.isUserLoggedIn" to="/login" class="nav-link">Login</router-link>
            </li>   

            <li class="nav-item">
               <router-link  v-if="!$store.state.isUserLoggedIn" to="/register" class="nav-link">Sign Up</router-link>
            </li>

               
             <li class="nav-item">
               <a href="javascript:void(0)" @click="handleClick" v-if="$store.state.isUserLoggedIn" class="nav-link" >LOGOUT</a>
             </li>
            
           </ul>   
         </div>   
       </div>
    </nav>

</template>

<script>

export default {
    name: 'Nav',
       methods : {
         handleClick() {
          this.$store.dispatch('setToken', null)
          this.$store.dispatch('setUser', null)
          this.$router.push('login')
                     
         }
      }
  }
  
       
           
    

</script>

<style>

container{
  position: absolute;
}
</style>