import Vuex from 'vuex';
import Vue from "vue";

const createStore = () => {
    return new Vuex.Store({
        state: {
            sidebarState: false,
            searchState: false,
            loadedArchive: [],
            loadedPosts: [],
            loadedPages: [],
            loadedCategories: [],
            loadedPinnedPost: {}
        },
        mutations: {
            setSidebarState(state, info) {
                state.sidebarState = info
            },
            setSearchState(state, info) {
                state.searchState = info
            },
            setArchiveState(state, info) {
                state.loadedArchive = info
            },
            setPosts(state, info) {
                state.loadedPosts = info
            },
            setPages(state, info) {
                state.loadedPages = info
            },
            setCategories(state, info) {
                state.loadedCategories = info
            },
            setPinnedPost(state, info) {
                state.loadedPinnedPost = info.filter(item => item.id === 5)
            }
        },
        actions: {
            async nuxtServerInit(VuexContext, context) {
                const archiveResponse = await context.$axios.get(process.env.API + 'archives?sort=-year&itemsPerPage=1')
                VuexContext.commit('setArchiveState', archiveResponse.data.data.data)

                const postsResponse = await context.$axios.get(process.env.API + 'posts?include=category&sort=-created_at&itemsPerPage=2')
                VuexContext.commit('setPosts', postsResponse.data.data.data)

                const pagesResponse = await context.$axios.get(process.env.API + 'pages')
                VuexContext.commit('setPages', pagesResponse.data.data)

                const categoriesResponse = await context.$axios.get(process.env.API + 'categories')
                VuexContext.commit('setCategories', categoriesResponse.data.data.data)

                const pinnedPostResponse = await context.$axios.get(process.env.API + 'posts?include=category')
                VuexContext.commit('setPinnedPost', pinnedPostResponse.data.data.data)
            },

            setArchive(vuexContext, archiveInfo) {
                vuexContext.commit('setArchiveState', archiveInfo)
            },
            setPosts(vuexContext, postsInfo) {
                vuexContext.commit('setPosts', postsInfo)
            },
            setPages(vuexContext, pagesInfo) {
                vuexContext.commit('setPages', pagesInfo)
            },
            setSidebarState(vuexContext, sidebarState) {
                vuexContext.commit('setSidebarState', sidebarState)
            },
            setSearchState(vuexContext, searchState) {
                vuexContext.commit('setSearchState', searchState)
            },
            setCategories(vuexContext, categoriesState) {
                vuexContext.commit('setCategories', categoriesState)
            },
            setPinnedPost(vuexContext, pinnedPostState) {
                vuexContext.commit('setPinnedPost', pinnedPostState)
            }
        },
        getters: {
            loadedSidebarState(state) {
                return state.sidebarState
            },
            loadedSearchState(state) {
                return state.searchState
            },
            loadedArchive(state) {
                return state.loadedArchive
            },
            loadedPosts(state) {
                return state.loadedPosts
            },
            loadedPages(state) {
                return state.loadedPages
            },
            loadedCategories(state) {
                return state.loadedCategories
            },
            loadedPinnedPost(state) {
                return state.loadedPinnedPost
            }
        }
    })
}

export default createStore