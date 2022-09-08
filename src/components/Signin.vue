<template>
  <frgament>
    <div  v-if="error.message" class="alert alert-danger mt-2" role="alert">
        {{error.message}}
      </div>
    <div class="sign">
      <div class="card" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Sign In</h5>
          <input
          type="text"
          placeholder="email"
          class="form-control"
          v-model="email"
          />
          <input
          type="password"
          placeholder="password"
          class="form-control"
          v-model="password"
          >
          <br>
          <button class="btn btn-dark w-100" @click="signIn">Sign In</button>
          <br>
          <br>
          <router-link class="link" to="/signup">Not a user? Sign Up</router-link>
        </div>
      </div>
      
    </div>
      
    </frgament>
</template>

<script>
import { firebaseApp } from '../firebaseApp'
export default {
  data() {
    return {
      email: '',
      password: '',
      error: {
        message: ''
      }
    }
  },
  methods: {
    signIn() {
      firebaseApp.auth().signInWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          this.error = error
        })
    }
  }
}
</script>