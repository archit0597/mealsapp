<template>
  <v-card class="mx-auto my-12 detailed-card" v-if="detailedMeal" elevation="10" max-width="800px">
    <h1 align="center">{{detailedMeal.strMeal}}</h1>

    <v-img height="500px" style="margin-top:30px;" align="center" :src="detailedMeal.strMealThumb">
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate color="blue accent-5"></v-progress-circular>
        </v-row>
      </template>
    </v-img>

    <p class="display-1 text--primary" style="margin-top:50px;" align="center">Ingredients</p>
    <v-simple-table fixed-header style="margin-top:10px;margin-bottom:10px;padding:20px;">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left" >Name</th>
            <th class="text-left" >Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value, name) in ingredients" :key="name">
            <td>{{ name }}</td>
            <td>{{ value }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <v-card class="mx-auto" style="margin-bottom:50px;margin-top:50px">
      <v-card-text>
        <p class="display-1 text--primary">Instructions</p>
        <div class="text--primary">{{detailedMeal.strInstructions}}</div>
      </v-card-text>
    </v-card>
    <p class="display-1 text--primary" align="center">Video Instructions</p>
    <iframe
      width="100%"
      height="600px"
      :src="embedUrl"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </v-card>
  <div v-else style="margin-top:50px" align="center">
    <h1>Please search a meal</h1>
    <h1>Or</h1>
    <h3>
      <router-link to="/">Click here for a Random meal!</router-link>
    </h3>
  </div>
</template>
<script>
export default {
  computed:{
    detailedMeal(){
      return this.$store.getters.detailedMeal
    },
    ingredients() {
      let ing = {};
      for (let i = 1; i <= 20; i++) {
        let key = this.detailedMeal["strIngredient" + i];
        if (key) {
          ing[key] = this.detailedMeal[`strMeasure${i}`];
        } else {
          break;
        }
      }
      return ing;
    },
    embedUrl() {
      var str = this.detailedMeal.strYoutube;
      if (!str) {
        return str;
      }
      var res = str.split("=");
      var embeddedUrl = "https://www.youtube.com/embed/" + res[1];
      return embeddedUrl;
    }
  },
}
</script>
<style scoped>
.mx-auto{
  border-radius: 50px;
}
</style>