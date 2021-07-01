import axios from 'axios';
import { getApplications } from '../../../../src/services/application.service';

const state = {
    user: null,
    forms: [],
    admin: null,
    assessments: [],
    applications: [],
    // questions: [],
};
const getters = {
    isAuthenticated: (state) => !!state.user,
    StateForms: (state) => state.forms,
    StateUser: (state) => state.user,
    StateAdmin: (state) => state.admin,
    StateAssessments: (state) => state.assessments,
    StateApplications: (state) => state.applications,
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
    async LogIn({commit}, user) {
        await axios.post('users/login', user)
        await commit('setUser', user.get('email'));
    },
    async CreateForm({dispatch}, form) {
        await axios.post('forms', form)
        await dispatch('GetForms')
    },
    async CreateAssessment({dispatch}, assessment) {
        await axios.post('quiz', assessment)
        await dispatch('GetAssessments')
    },
    async CreateApplication({dispatch}, application) {
        await axios.post('application', application)
        await dispatch('GetApplications')
    },

    // This is the GetForms action to commit the setForms mutation
    async GetForms({ commit }){
        let response = await axios.get('forms')
        // console.log(response)
        commit('setForms', response.data)
    },
    async GetAssessments({ commit }){
        let response = await axios.get('quiz')
        console.log(response);
        commit('setAssessments', response.data)     
    },
    async getApplications({ commit }){
        let response = await axios.get('application')
        commit('setApplications', response.data)
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
    // This is the setForms mutation
    setForms(state, forms){
        state.forms = forms
    },
    setAdmin(state, email){
        state.admin = email
    },
    // setQuestions(state, questions) {
    //     state.questions = questions;
    // },
    setAssessments(state, assessments){
        state.assessments = assessments
    },
    setApplication(state, applications){
        state.applications = applications
    },
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