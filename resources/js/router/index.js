import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

import Home from '../components/Home.vue';
import Category from '../components/Category.vue';
import CreateCategory from '../components/CreateCategory.vue';
import EditCategory from '../components/EditCategory.vue';

const routes = new VueRouter({
    mode: 'history',
    routes: [
        {
           path: '/',
           component: Home,
           name: 'home',
        },
        {
           path: '/category',
           component: Category,
           name: 'category',
        },
        {
            path: '/category/create',
            component: CreateCategory,
            name: 'create-category',
         },
         {
            path: '/category/edit/:id',
            component: EditCategory,
            name: 'edit-category',
         },

        
    ]
});
export default routes;