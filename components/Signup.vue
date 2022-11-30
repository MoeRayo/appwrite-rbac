<template>
  <div class="">
    
    <main class="form-signin w-100 mx-auto py-5 px-5 my-5">
      <form class="mt-5" @submit.prevent="signUp">
       
        <h1 class="h3 mb-4 fw-normal text-center">Admin Dashboard</h1>

        <div class="form-floating mb-3">
          <label for="floatingInput">Username</label>
          <input type="username" v-model="username" class="form-control" id="floatingInput" placeholder="Username">
        </div>
        <div class="form-floating mb-3">
          <label for="floatingInput">Email address</label>
          <input type="email" v-model="email" class="form-control" id="floatingInput" placeholder="name@example.com">
        </div>
        <div class="form-floating mb-4">
          <label for="floatingPassword">Password</label>
          <input type="password" v-model="password" class="form-control" id="floatingPassword" placeholder="Password">
        </div>
        <div class="form-floating mb-4">
          <label for="floatingPassword">Confirm Password</label>
          <input type="password" v-model="confirmPassword" class="form-control" id="floatingPassword" placeholder="Confirm Password">
        </div>
    
        <button class="w-100 btn btn-lg btn-primary" type="submit">Get Access</button>

        <p class="mt-3">Already have an account? <nuxt-link to="/signin">Sign in</nuxt-link> </p>

      </form>
    </main>
    
  </div>
</template>
<script>
import {account} from '~/init'
export default {
  data: () => ({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  }),
  methods: {
    signUp: async function(){
      if (this.password.length >= 8){
        if(this.password === this.confirmPassword) {
          try{
            await account.create('unique()', this.email, this.password, this.username)
            alert("account created successfully")
            window.location.href = '/signin'
          } catch (e) {
            console.log(e)
          }
        } else {
          alert("password do not match")
        }
      } else {
        alert("password length should be up to 8 characters")
      }
    },
  }
}
</script>
<style scoped>

.form-signin {
  max-width: 400px;
  padding: 15px;
  border: 5px solid #0069D9;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>