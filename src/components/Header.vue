<template>
  <v-app-bar color="deep-purple accent-3" dense dark>  
    <v-toolbar-title><router-link to="/" style="color:white;text-decoration: none">Meals on Wheels</router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-form>
        <v-text-field style="margin-top:25px" class="customInput" solo dense label="Search Meal" v-model="searchQuery">
        </v-text-field>
      </v-form>
      <v-btn icon @click="searchMeal" class="searchButton"><v-icon>mdi-magnify</v-icon></v-btn> 
      <v-spacer></v-spacer>
    <v-btn @click="changeMeal" class="randomButton">Random Meal</v-btn>
  </v-app-bar>
</template>
<script>
import { fetchRandomMeal } from "@/service/NetworkConnection.js";

export default {
  data(){
    return{
      searchQuery: ''
    }
  },
  methods:{
    changeMeal(){
      fetchRandomMeal().then(response=>{
        this.$store.dispatch('changeMealCard',response.data.meals[0])
        this.$router.push({path:'/'})
      })
    },
    searchMeal(){
      if(!this.searchQuery){
        return;
      }
      this.$store.dispatch('changeSearchQuery', this.searchQuery)
      this.searchQuery=''  
      this.$router.push({path:'/search'})
    }
  }
}
</script>