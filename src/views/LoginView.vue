<template>
  <form>
    <input v-model="username" class="form-control m-4" type="text" name="username" placeholder="Введи логин">
    <input v-model="password" class="form-control m-4" type="password" name="password" placeholder="Введи пароль">
    <button @click="signIn" class="btn btn-info m-4">Вход</button>
  </form>
  {{token}}
</template>

<script>
export default {
  data() {
    return {
      token: null,
      username: null,
      password: null,
      error: null,
    }
  },
  methods:{
    signIn(){
      event.preventDefault()
      fetch('https://dummyjson.com/auth/login',{
        method: 'POST',
        headers: {'Counter-Type': 'application/json'},
        body: JSON.stringify({
          username:this.username,
          password: this.password,
          expiresInMins: 30.
        })
      })
          .then(response => response.json())
          .then(data => {
            if(data.message){
              this.error = data.message;
            }else {
              this.token = data.token;
            }
          })
    }
  }
}
</script>




/*
"username": "froachel",
"password": "rfVSKImC",
*/