import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            sidebarState: false,
            searchState: false,
            loadedArchive: [],
            loadedPosts: [],
            loadedPages: [],
            loadedAuthors: []
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
            setAuthors(state, info) {
                state.loadedAuthors = info
            }
        },
        actions: {
            async nuxtServerInit(VuexContext, context) {
                const archiveResponse = await context.$axios.get(process.env.API + 'archives?sort=-created_at&itemsPerPage=1')
                VuexContext.commit('setArchiveState', archiveResponse.data.data.data)

                const postsResponse = await context.$axios.get(process.env.API + 'posts?include=category&sort=-created_at&itemsPerPage=2')
                VuexContext.commit('setPosts', postsResponse.data.data.data)

                const pagesResponse = await context.$axios.get(process.env.API + 'pages')
                VuexContext.commit('setPages', pagesResponse.data.data)

                const authorsResponse = await context.$axios.get(process.env.API + 'authors')
                VuexContext.commit('setAuthors', authorsResponse.data.data.data)
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

            setAuthors(vuexContext, authorsInfo) {
                vuexContext.commit('setAuthors', authorsInfo)
            },

            setSidebarState(vuexContext, sidebarState) {
                vuexContext.commit('setSidebarState', sidebarState)
            },
            setSearchState(vuexContext, searchState) {
                vuexContext.commit('setSearchState', searchState)
            },
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
            loadedAuthors(state) {
                return state.loadedAuthors
            }
        }
    })
}

export default createStore