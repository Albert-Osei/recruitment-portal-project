import axios from 'axios';

const state = {
    user: null,
    allForms: [],
    admin: null,
    // questions: [],
};
const getters = {
    isAuthenticated: state => !!state.user,
    StateForms: state => state.allForms,
    StateUser: state => state.user,
    StateAdmin: state => state.admin,
};
const actions = {
    async Signup({dispatch}, info) {
        await axios.post('users/signup', info)
        JSON.stringify(info);
        console.log(info);
        let UserInfo = new FormData()
        UserInfo.append('email', info.email)
        UserInfo.append('password', info.password)
        await dispatch('LogIn', UserInfo)
    },
    async LogIn({commit}, User) {
        await axios.post('users/login', User)
        await commit('setUser', User.get('email'));
    },
    async CreateForm({dispatch}, form) {
        await axios.post('forms', form)
        await dispatch('GetForms')
    },
    async GetForms({ commit }, allForms){
        let response = await axios.get('forms', allForms)
        console.log(response);
        commit('setForms', response.data)
        
    },
    // async GetQuestions({ commit }, questions){
    //     let response = await axios.get('quiz', questions)
    //     commit('setQuestions', response.data)
    // },
    async LogOut({commit}){
        let user = null
        commit('logout', user)
    },
    async AdminLogin({commit}, Admin) {
        await axios.post('admin/login', Admin)
        await commit('setAdmin', Admin.get('email'));
    },


};
const mutations = {
    setUser(state, email){
        state.user = email
    },
    setForms(state, allForms){
        state.allForms = allForms
    },
    setAdmin(state, email){
        state.admin = email
    },
    // setQuestions(state, questions) {
    //     state.questions = questions;
    // },
    LogOut(state){
        state.user = null
        state.allForms = null
    },

};
export default {
    state,
    getters,
    actions,
    mutations
};