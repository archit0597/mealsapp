<template>
      <app-meal></app-meal>    
</template>

<script>
import Meal from '../components/Meal.vue';
import { fetchRandomMeal } from "../service/NetworkConnection.js";

export default {
  computed:{
    initStatus() {
      return this.$store.getters.initStatus
    }
  },
  created(){
    if(this.initStatus){
      fetchRandomMeal().then(response=>{
        this.$store.dispatch('changeMealCard',response.data.meals[0])
      })
      this.$store.dispatch('changeInitStatus',false)
    }
      
  },
  components: {
    appMeal : Meal
  }
}
</script>