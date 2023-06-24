<template>
  <q-layout view="lHh Lpr lFf" >
    <q-page-container class="pt-0-important" :class="eq.dark.mode?'bg-dark-500':'bg-sky-900'" >
      <q-page>
        <div class="row" style="height: 100vh">
          <div class="col-12 flex content-center justify-center">
            <router-view/>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import {useQuasar} from "quasar";

const eq = useQuasar()
// $q.dark.set(false)
</script>


<style scoped>
.wave {
  position: fixed;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: 0;
}

.login-image {
  z-index: 1;
}

/*.bg-auth {*/
/*  backgroud-color: #000000;*/

/*  background-size: cover;*/
/*  background-repeat: no-repeat;*/
/*  background-position: center;*/
/*}*/
</style>
