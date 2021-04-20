import axios from 'axios'
const pr = process.env.NODE_ENV
const devMode = pr === 'development'
const prodMod = pr === 'production'

let url;
if (devMode) url = "http://localhost:5000/api" 
if (prodMod) url = "/api"

export const api = axios.create({
    baseURL: url
})