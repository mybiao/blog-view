import Router from 'vue-router'
import mainpage from './src/components/MainPage'
import pagecontent from './src/components/PageContent'

export default new Router({
    mode:"history",
    routes:[
        {
            
            name:"home",
            path:"/",
            component: mainpage,
            meta:{
                keepAlive:true
            }
        },
        {
            name:"page",
            path:"/page/detail/:pageId",
            component: pagecontent
        },
        {
            name:"tag",
            path:"/tag/detail/:tagName",
            component:mainpage,
        }
    ]
})