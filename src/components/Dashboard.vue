<template>
  <fragment>
  
    <h3>Welcome!</h3>
    <button class="btn btn-danger" @click="singOut">Sign Out</button>
    <hr>
  </fragment>
</template>

<script>
  import { firebaseApp } from '../firebaseApp';

  export default {
    methods: {
        singOut() {
            this.$store.dispatch("signOut");
            firebaseApp.auth().signOut();
        }
    },
}
</script>