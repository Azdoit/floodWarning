import { defineStore } from 'pinia'

export const useProfile = defineStore(
  'profile',
  () => {
    const isLogin = ref(false)
    const token = ref('')
    const getToken = (tk) => {
      token.value = tk
    }
    const changeLoginState = () => {
      isLogin.value = !isLogin.value
    }
    return {
      token,
      isLogin,
      changeLoginState,
      getToken
    }
  },
  {
    persist: {
      key: 'my-custom-key',
      // paths: ['isLogin'],
    }
  }
)
