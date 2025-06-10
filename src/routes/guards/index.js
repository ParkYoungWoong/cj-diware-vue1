import router from '@/routes'

router.beforeEach(to => {
  if (to.meta.requiresAuth) {
    const token = localStorage.getItem('accessToken')
    // const isValid = await validateToken(token)
    if (!token) {
      return '/signin'
    }
    return true
  }
  return true
})
