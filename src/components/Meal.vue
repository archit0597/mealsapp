<template>
        <v-card class="mx-auto" max-width="500" elevation="10" style="margin-top:100px">
            <v-img class="white--text align-end" height="150px"
                :src="meal.strMealThumb">
            </v-img>
            <v-card-subtitle class="pb-0" align="center"><strong>{{meal.strMeal}}</strong></v-card-subtitle>
            <v-card-actions class="justify-center">
                <v-btn color="orange" text @click="mealDetails" class="explore">Explore</v-btn>
            </v-card-actions>
        </v-card>
</template>
<script>
import { fetchMealById } from "../service/NetworkConnection.js";

export default {
    computed:{
        meal(){
            return this.$store.getters.mealCard;
        }
    },
    methods:{
        mealDetails(){
            fetchMealById(this.meal.idMeal).then(response=>{
                this.$store.dispatch('changeMealDetails',response.data.meals[0])
            })
            this.$router.push({path:'/details'})
        }
    }
}
</script>
<style scoped>
</style>