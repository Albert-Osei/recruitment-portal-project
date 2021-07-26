import axios from 'axios';

const state = {
    token: "",
    user: null,
    allusers: [],
    forms: [],
    admin: null,
    assessments: [],
    applications: [],
    // application: "",
    profile: "",
    oneApp: "",
    statuses: [],
    alladmins: [],
};
const getters = {
    isAuthenticated: (state) => !!state.user,
    apiResponse: state => state.response,
    StateForms: (state) => state.forms,
    StateUser: (state) => state.user,
    StateAllUsers: (state) => state.allusers,
    getScores: (state) => state.scores,
    StateAdmin: (state) => state.admin,
    // getApplication: (state) => state.application,
    getProfile: (state) => state.profile,
    getOneApp: (state) => state.oneApp,
    StateAssessments: (state) => state.assessments,
    StateApplications: (state) => state.applications,
    StateStatuses: (state) => state.statuses,
    StateAllAdmins: (state) => state.alladmins
    // StateToken: (state) => state.token,
};
const actions = {
    // async Signup({dispatch}, info) {
    //     await axios.post('users/signup', info)
    //     JSON.stringify(info);
    //     console.log(info);
    //     let UserInfo = new FormData()
    //     UserInfo.append('email', info.email)
    //     UserInfo.append('password', info.password)
    //     await dispatch('LogIn', UserInfo)
    // },
    
    //Signup Action
    async Signup({ commit }, info) {
        await axios.post('users/signup', info);
        JSON.stringify(info);
        console.log(info);
        commit("setSignedupUser", info);
    },
    
    // async LogIn({commit}, user) {
    //     await axios.post('users/login', user)
    //     await commit('setUser', user.get('email'));
    // },

    //Login Action
    async LogIn({ commit }, UserInfo) {
        const response = await axios.post("users/login", UserInfo);
        const token = await response.data.data.token;
        localStorage.setItem("access_token", JSON.stringify(token));
        console.log(token);
        commit("retrieveToken", token);

        const user = await response.data.data.user.id;
        localStorage.setItem("userP", JSON.stringify(user));
        commit("setUser", user);
    },

    async GetAllUsers({ commit }, users) {
        let response = await axios.get("users", users);
        commit("setAllUsers", response.data);
    },

    async CreateForm({dispatch}, form) {
        await axios.post('forms', form)
        await dispatch('GetForms')
    },
    async CreateStatus({dispatch}, userstatus) {
        await axios.post('status', userstatus)
        await dispatch('GetStatuses')
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
        console.log(response)
        commit('setForms', response.data)
    },
    async GetStatuses({ commit }){
        let response = await axios.get('status')
        commit('setStatuses', response.data)
    },
    async GetAllAdmins({ commit }, admins){
        let response = await axios.get('admin', admins)
        commit('setAllAdmins', response.data)
    },
    async GetAssessments({ commit }){
        let response = await axios.get('quiz')
        console.log(response);
        commit('setAssessments', response.data)     
    },
    async GetApplications({ commit }){
        let response = await axios.get('application')
        // console.log(response)
        commit('setApplications', response.data)
    },

    async AdminLogin({commit}, Admin) {
        await axios.post('admin/login', Admin);
        await commit('setAdmin', Admin.get('email'));
        
        // let responseObject = {
        //     type: 'success',
        //     message: response.data.message
        // }

        // const token = response.data.token
        // commit('retrieveToken', token)
        // commit('setResponse', responseObject)

        // console.log(response.data.data._id);
    },

    async editAdmin({dispatch}, Admin) {
        await axios.put('admin/1', Admin)
        await dispatch('GetAllAdmins')
    },

    async fetchProfile({ commit }) {
        try {
            axios.defaults.headers.common["Authorization"] = 
            "Bearer" + this.state.token;

            var id = localStorage.getItem("userP");
            const response = await axios.get(`users/${id}`);
            console.log(id);
            console.log(response);
            commit("setProfile", response.data.data);
        } catch (error) {
            commit("setProfile", error.response);
        }
    },
    // async fetchApplication({ commit }) {
    //     try {

    //     }
    // },

    async fetchOneApp({ commit }) {
        try {
            axios.defaults.headers.common["Authorization"] = 
            "Bearer" + this.state.token;
            var id = localStorage.getItem("userP");
            console.log(id);
            const response = await axios.get(`forms/${id}`);
            commit("setOneApp", response.data.data);
        } catch (error) {
            commit("setOneApp", error.response);
        }
    },

    async Answers(UserInfo) {
        try {
            axios.defaults.headers.common["Authorization"] =
            "Bearer" + this.state.token;
            const response = await axios.post(
                "users/scores",
                UserInfo
            );
            console.log(response);
        } catch (error) {
            console.log(error.response);
        }
    },

    // async LogOut({ commit }) {
    //     let user = null
    //     commit('logout', user)
    // },

    //LogOut Action
    LogOut({ commit }) {
        axios.defaults.headers.common["Authorization"] = {};
        localStorage.removeItem("access_token");
        localStorage.removeItem("userP");
        commit("destroyToken");
        commit("destroyUser");
    },


};
const mutations = {
    setResponse: (state, payload) => {
        state.response = {
            type: payload.type,
            message: payload.message,
            hasApp: payload.hasApp
        }
    },
    setUser(state, email){
        state.user = email
    },
    setProfile(state, user) {
        state.profile = user;
    },
    // This is the setForms mutation
    setForms(state, forms){
        state.forms = forms
    },
    setAllUsers(state, allusers){
        state.allusers = allusers
    },
    setAllAdmins(state, admins){
        state.admins = admins
    },
    setQuestions(state, questions) {
        state.questions = questions;
    },
    setStatuses(state, statuses) {
        state.statuses = statuses
    },
    setSignedupUser(state, details) {
        state.details = details;
    },
    setAdmin(state, email){
        state.admin = email
    },
    setAssessments(state, assessments){
        state.assessments = assessments
    },
    setApplications(state, applications){
        state.applications = applications
    },
    LogOut(state){
        state.user = null
        state.allForms = null
    },
    retrieveToken(state, token) {
        state.token = token
    },
    setOneApp(state, user) {
        state.oneApp = user;
    },
    destroyUser(state) {
        state.user = null;
    },
    destroyToken(state) {
        state.token = null
    }

};
export default {
    state,
    getters,
    actions,
    mutations
};