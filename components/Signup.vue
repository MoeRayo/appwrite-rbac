<template>
  <div class="">
    
    <main class="form-signin w-100 mx-auto py-5 px-5 my-5">
      <form class="mt-5">
       
        <h1 class="h3 mb-4 fw-normal text-center">Admin Dashboard</h1>
    
        <div class="form-floating mb-3">
          <label for="floatingInput">Email address</label>
          <input type="email" v-model="email" class="form-control" id="floatingInput" placeholder="name@example.com">
        </div>
        <div class="form-floating mb-4">
          <label for="floatingPassword">Password</label>
          <input type="password" v-model="password" class="form-control" id="floatingPassword" placeholder="Password">
        </div>
    
        <button class="w-100 btn btn-lg btn-primary" type="submit">Get Access</button>
      </form>
    </main>
    
  </div>
</template>
<script>
export default {
  data: () => ({
    email: "",
    password: "",
  }),
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