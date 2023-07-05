<template>
    <div class="row">
        <div class="col-5">
              <div class="pt-5">
                    <p class="login">Login to your Account</p>
                    <p class="Welcome">Welcome back! Select method to log in:</p>
              </div>

              <ValidationObserver v-slot="{ handleSubmit }">
              <form @submit.prevent="handleSubmit(onSubmit)">

                <ValidationProvider name="E-mail" rules="required|email" v-slot="{ errors }">
                  <label for="exampleInputEmail1 " class="form-label mt-3">Email address</label>
                  <div><input  class="form-control" v-model="login.email" type="email"></div>
                  <div class="erorr_massege">{{ errors[0] }}</div>
                </ValidationProvider>       

                  <ValidationProvider name="password" rules="required" v-slot="{ errors }">
                    <label for="exampleInputEmail1 " class="form-label mt-3">password</label>
                  <input class="form-control "  type="password" v-model="login.password">
                  <div class="erorr_massege">{{ errors[0] }}</div>
                </ValidationProvider>



                <button class="btn btn-sumbit mt-3 w-100" type="submit">Submit</button>
              </form>
            </ValidationObserver>


        </div>

        <div class="col-7">
                <div class="bg-img">
                  <div class="d-flex justify-content-center">
                  <img class="img-fluid mt-5 pt-5" src="../assets/img/undraw_two_factor_authentication_namy (1) 1.png" alt="">
            </div>
              </div>
        </div>

    </div>
</template>

<script>

// to accsess login
//   "email": "john@mail.com",
//   "password": "changeme"

import axios from 'axios';

export default {
  data: () => ({
    login:{
      email:null,
      password:null
  }
  }),
  methods: {
  onSubmit() {
    axios.post("https://api.escuelajs.co/api/v1/auth/login", this.login)
      .then(response => {
        console.log(response);
        console.log(response.status);


        let parsed = JSON.stringify(this.login);
      localStorage.setItem('email', parsed);

      })
      .catch(error => {
        console.error(error);
      });
  },
}

};

</script>
