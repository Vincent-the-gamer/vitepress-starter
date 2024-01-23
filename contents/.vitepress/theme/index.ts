import DefaultTheme from 'vitepress/theme'
import './rainbow.css'
import "./vars.css"

//@ts-ignore
import Layout from "./Layout.vue"

export default {
    ...DefaultTheme,
    Layout
};