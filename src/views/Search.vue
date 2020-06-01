<template>
    <div>
        <app-meal-list></app-meal-list> 
    </div>
</template>

<script>
import MealList from '../components/MealList.vue';
import { searchMeals } from "../service/NetworkConnection.js";

export default {
    mounted() {
        searchMeals(this.searchQuery).then(response=>{
            this.$store.dispatch('changeSearchResult',response.data.meals)
        })
    },
    computed:{
        searchQuery(){
            return this.$store.getters.searchQuery
        }
    },
    components:{
        appMealList: MealList, 
    },
    watch: {
    searchQuery() {
      searchMeals(this.searchQuery).then(response => {
        this.$store.dispatch('changeSearchResult',response.data.meals)
      });
    }
  }
    
}
</script>