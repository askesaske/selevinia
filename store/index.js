import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            sidebarState: false,
            searchState: false
        },
        mutations: {
            setSidebarState(state, info) {
                state.sidebarState = info
            },
            setSearchState(state, info) {
                state.searchState = info
            }
        },
        actions: {
            setSidebarState(vuexContext, sidebarState) {
                vuexContext.commit('setSidebarState', sidebarState)
            },
            setSearchState(vuexContext, searchState) {
                vuexContext.commit('setSearchState', searchState)
            }
        },
        getters: {
            loadedSidebarState(state) {
                return state.sidebarState
            },
            loadedSearchState(state) {
                return state.searchState
            }
        }
    })
}

export default createStore