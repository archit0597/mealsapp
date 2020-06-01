<template>
    <div v-if="meals">
        <v-row>
            <v-col v-for="item in paginatedData" :key=item.idMeal>
                <v-card class="mx-auto" max-width="300" elevation="10" style="margin-top:100px">
                    <v-img class="white--text align-end" height="150px"
                    :src="item.strMealThumb">
                    </v-img>
                    <v-card-subtitle class="pb-0" align="center"><strong>{{item.strMeal}}</strong></v-card-subtitle>
                    <v-card-actions class="justify-center">
                        <v-btn color="deep-purple accent-3" text @click="mealDetails(item.idMeal)">Explore</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        <div style="margin-bottom:10px;text-align:center">
            <v-btn @click="prevPage" :disabled="pageNumber==0" color="deep-purple accent-3" class="previous">Previous Page</v-btn>
            <v-btn @click="nextPage" :disabled="pageNumber>=pagecount-1" color="deep-purple accent-3" class="next">Next Page</v-btn>
        </div>
    </div>
    <div v-else style="margin-top:50px" align="center">
        <h1>No Results Found</h1>
        <h1>Please search a meal</h1>
        <h1>Or</h1>
        <h3>
        <router-link to="/">Click here for a Random meal!</router-link>
        </h3>
    </div>
</template>
<script>
import { fetchMealById } from "../service/NetworkConnection.js";
export default {
    data(){
        return{  
            pageNumber: 0,
            size:8            
        }
    },
    computed:{
        meals(){
            return this.$store.getters.searchResult
        },
        pageCount(){
            let l = this.meals.length,
            s = this.size;
            return Math.ceil(l/s);
        },
        paginatedData(){
            const start = this.pageNumber * this.size,
            end = start + this.size;     
            return this.meals.slice(start, end);
        }
    },
    methods:{
        mealDetails(value){
            fetchMealById(value).then(response=>{
                this.$store.dispatch('changeMealDetails',response.data.meals[0])
            })
            this.$router.push({path:'/details'})
        },
        nextPage(){
         this.pageNumber++;
        },
        prevPage(){
        this.pageNumber--;
        }
    }
}
</script>
<style scoped>
body{
    margin-top: 10px;
}
</style>