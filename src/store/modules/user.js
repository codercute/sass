import { getToken, setToken, removeToken, setTimeStamp } from '@/utils/auth'
import { login, getInfo, getUserDetailId } from '@/api/user'
import { resetRouter } from '@/router'
const state = {
  token: getToken(),
  userInfo: {}
}
const mutations = {
  setToken(state, token) {
    state.token = token
    setToken(token)
  },
  removeToken(state) {
    state.token = null
    removeToken()
  },
  setUserInfo(state, userInfo) {
    state.userInfo = userInfo
  },
  removeUserInfo(state) {
    state.userInfo = {}
  }
}
const actions = {
  async login(context, data) {
    const result = await login(data)
    context.commit('setToken', result)
    setTimeStamp()
  },
  async getUserInfo(context) {
    const result = await getInfo()
    const baseInfo = await getUserDetailId(result.userId)
    context.commit('setUserInfo', { ...result, ...baseInfo })
    return result
  },
  logout(context) {
    context.commit('removeToken')
    context.commit('removeUserInfo')
    resetRouter()
    context.commit('permission/setRoutes', [], {root:true} )
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
