<template>
  <q-layout view="lhr Lpr lFf">
 <q-header elevated>
      <q-toolbar >
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
<!--          <q-btn flat dense no-caps label="Home" @click="homez" class="q-px-sm q-ml-md"/>-->
            <q-btn
            dense
            label="Home"
            to="/"
            flat
            no-caps
            class="q-px-sm q-ml-md -mr-5"
          />
          <q-btn
            dense
            label="Admin"
            to="/talib"
            v-if="isAuthenticated && checkt"
            flat
             no-caps
            class="q-px-sm q-ml-md -mr-5"
          />
<!--          <q-btn-->
<!--            dense-->
<!--            label="Paper"-->
<!--            to="/paper"-->
<!--            v-if="isAuthenticated"-->
<!--            flat-->
<!--            no-caps-->
<!--            class="q-px-sm q-ml-md -mr-5"-->
<!--          />-->
          <q-btn
            dense
            label="ExamSets"
            to="/examsets"
            v-if="isAuthenticated"
            flat
            no-caps
            class="q-px-sm q-ml-md "
          />
<!--          <q-btn-->
<!--            dense-->
<!--            label="Exam"-->
<!--            to="/admin"-->
<!--            v-if="isAuthenticated"-->
<!--            flat-->
<!--             no-caps-->
<!--            class="q-px-sm q-ml-md "-->
<!--          />-->

          <q-btn
            dense
            label="Login"
            to="/login"
            v-if="!isAuthenticated"
            flat
             no-caps
            class="q-px-sm q-ml-md"
          />
<!--          <q-btn flat dense label="Dashboard" v-if="isAuthenticated" to="/admin"/>-->


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
        <q-item clickable @click="homez">
          <q-item-section>
            <q-item-label>Home</q-item-label>
          </q-item-section>
        </q-item>
                <q-item clickable v-if="isAuthenticated && checkt" to="/talib">
          <q-item-section>
            <q-item-label>Admin</q-item-label>
          </q-item-section>
        </q-item>
       <q-item clickable v-if="isAuthenticated" to="/examsets">
          <q-item-section>
            <q-item-label>Examsets</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-if="!isAuthenticated" to="/login">
          <q-item-section>
            <q-item-label>Login</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>


    <q-page-container >
      <br/>
      <br/>
<router-view v-slot="{ Component }">
  <transition>
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </transition>
</router-view>



      <q-toolbar class="flex flex-center text-white bg-dark-500/95" style="border-top: 2px solid #0cbcbc; ">
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
              <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[12, 12]" >
            <q-btn  size="sm" icon="keyboard_arrow_up"  color="black" />
          </q-page-scroller>
    </q-page-container>


  </q-layout>
</template>

<script setup>
import {ref,computed} from 'vue'
// import EssentialLink from 'components/EssentialLink.vue'
import {useAuthStore} from "stores/all";
import {useRouter} from "vue-router";
import {goToSection} from "src/support/helpers/scroll";
import {toggleTheme} from "layouts/darktoggle";
import {useQuasar} from "quasar";

const store = useAuthStore()
const router = useRouter()



 const eq = useQuasar()

const isAuthenticated = computed(() => store.isAuthenticated)
const navigate = (section) => {
  leftDrawerOpen.value = false
  setTimeout(() => {
    goToSection(section)
  }, 250)
}
const user = computed(() => store.getUser)
const leftDrawerOpen = ref(false)

const toggleLeftDrawer = () => leftDrawerOpen.value = !leftDrawerOpen.value
const logout = () => {
  store.SIGN_OUT()
  router.push('/')
}
function toggleDarkMode(){
  toggleTheme(eq)
}
const checkt = computed(() => user.value?.role.toLowerCase() === 'admin');

const homez =() =>{
   router.push('/')
}

</script>
