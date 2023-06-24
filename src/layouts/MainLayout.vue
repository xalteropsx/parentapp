<template>
  <q-layout view="lHh Lpr lFf">
       <q-header elevated :color="$q.dark.mode?'orange':'teal'" :class="$q.dark.mode?'bg-dark-500':'bg-sky-900'">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          class="md-and-up-hide"
        />

        <q-toolbar-title>

    <q-img
      src=" https://res.cloudinary.com/dragonarc/image/upload/v1687342700/uw_unaniwala_mguzgv.jpg"
      loading="lazy"
      spinner-color="white"
      size="50px"
      style="max-width: 70px"
    />





        </q-toolbar-title>


        <div class="xs-hide sm-hide">

          <q-btn
            dense no-caps
            label="Login"
            to="/login"
            v-if="!isAuthenticated"
            flat
            class="q-px-sm "
          />

          <q-btn flat dense no-caps  label="ExamSets"  v-if="isAuthenticated" to="/examsets"/>
                    <q-btn
            dense no-caps
            label="Admin"
            to="/talib"
            v-if="isAuthenticated && checkt"
            flat
            class="q-px-sm  "
          />

        </div>


               <q-btn flat  no-caps dense label="Logout" v-if="isAuthenticated" @click="logout"/>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
            <h6 class="text-h6 text-weight-thin fredoka">Unani Portal</h6>

        </q-item-label>
        <q-item clickable @click="navigate('heroSection')">
          <q-item-section>
            <q-item-label>Home</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable @click="navigate('features')">
          <q-item-section>
            <q-item-label>Features</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable @click="navigate('about')">
          <q-item-section>
            <q-item-label>About</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-if="!isAuthenticated" to="/login">
          <q-item-section>
            <q-item-label>Login</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-if="isAuthenticated && checkt" to="/talib">
          <q-item-section>
            <q-item-label>Admin</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable  v-if="isAuthenticated" to="/examsets">
          <q-item-section>
            <q-item-label>ExamSets</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>


      <router-view/>

      <q-toolbar class="flex flex-center text-white" style="border-top: 2px solid #0cbcbc; background-color: #263238">
        <div class="q-pa-md q-gutter-sm">
          <q-btn  type="a" href="https://www.facebook.com/shamim.haider.562/" class="bg-primary text-white"
                 icon="fab fa-twitter" target="_blank"/>
          <q-btn  type="a" href="https://github.com/xalteropsx" class="bg-primary text-white" icon="fab fa-github"
                 target="_blank"/>
          <q-btn  type="a" href="#" class="bg-primary text-white" icon="fab fa-twitter"/>
          <q-btn  type="a" href="#" class="bg-primary text-white" icon="email"/>
          <q-btn  type="a" href="#" class="bg-primary text-white" icon="fas fa-heart"/>
        </div>
      </q-toolbar>
              <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[12, 12]">
            <q-btn  size="sm" icon="keyboard_arrow_up"  color="black" />
          </q-page-scroller>
    </q-page-container>
  </q-layout>
</template>

<script>
import {defineComponent, ref,computed} from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import {useAuthStore} from "stores/all";
import {goToSection} from "src/support/helpers/scroll";
import {useQuasar} from "quasar";
import {toggleTheme} from "layouts/darktoggle";


export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {

    const $q = useQuasar()

    function toggleDarkMode() {
      toggleTheme($q)
    }
    const $store = useAuthStore()
    const leftDrawerOpen = ref(false)
    const isAuthenticated = computed(() => $store.isAuthenticated)
    const navigate = (section) => {
      leftDrawerOpen.value = false
      setTimeout(() => {
        goToSection(section)
      }, 250)
    }
    const logout = () => {
      $store.SIGN_OUT()
    }

    const user = computed(() => $store.getUser)
    const checkt = computed(() => user.value?.role.toLowerCase() === 'admin');

    return {
      leftDrawerOpen,isAuthenticated,
      navigate,checkt,toggleDarkMode,
      logout,goToSection,$q,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
