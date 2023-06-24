import {defineComponent, computed, watch} from 'vue';
import {loader} from "src/support/helpers/loader";
import {useCommonStore} from "stores/all";
import {input} from "src/support/utils/visual";
import {boot} from "quasar/wrappers";
import { MotionPlugin } from '@vueuse/motion'

export default boot(({app}) => {
  const store = useCommonStore()
  const isLoading = computed(() => store.isLoading)


  app.use(MotionPlugin)
  app.config.globalProperties.$input = input;

  watch(() => isLoading.value, (newVal) => {
    if (newVal) loader.show()
    else loader.hide()
  })

})

