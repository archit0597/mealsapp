import axios from 'axios';

const baseUrl = 'https://www.themealdb.com/api/json/v1/1';

export const fetchRandomMeal = () => {
    return axios.get(`${baseUrl}/random.php`)
}

export const searchMeals = (query) => {
    return axios.get(`${baseUrl}/search.php?s=${query}`)
}

export const fetchMealById = (mealId) => {
    return axios.get(`${baseUrl}/lookup.php?i=${mealId}`)
}