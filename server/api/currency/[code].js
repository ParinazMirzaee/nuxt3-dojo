import {routes} from "vue-router/auto-routes";

export default defineEventHandler(async (event) => {
    const {code} = event.context.params
    const { currencyKey } = useRuntimeConfig()
    const uri = `https://api.currencyapi.com/v3/latest?apikey=${currencyKey}&currencies=${code}`
    // const uri = `https://api.currencyapi.com/v3/latest?apikey=cur_live_J8ffZYq64ilwh6vflgvKygJxM4ECMvmTVKy9nQ2i&currencies=EUR%2CUSD%2CCAD`


    const {data} = await $fetch(uri)

    return data
})