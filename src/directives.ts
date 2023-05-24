import type { App } from 'vue'
import { usePermissionStore } from '@/store/permission'
import { ref, toRefs } from 'vue'

let permissionStore: any = null

export default (app: App<Element>) => {
  if (permissionStore === null) {
    permissionStore = usePermissionStore()
  }
  const { menus } = toRefs(permissionStore)
  const usersPermissions = ref([...menus.value])

  app.directive('hasPermission', {
    mounted(el, binding) {
      const { value } = binding
      const isShow = usersPermissions.value.some(p => {
        return p.indexOf(value) !== -1
      })
      if (!isShow) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    }
  })
}