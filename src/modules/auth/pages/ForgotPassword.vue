<template>
  <q-card class="q-ma-xl">
    <div class="row">
      <div class="col-0 col-sm-5 bg-primary rounded-left-borders xs-hide">
        <div class="row q-ml-sm q-mt-sm">
          <div class="col-12 fredoka text-subtitle1">
            <router-link class="text-white" style="text-decoration: none" to="/">Unani Wala
            </router-link>
          </div>
        </div>
        <div class="row full-width q-px-xl q-pb-xl full-height flex flex-center">
          <div class="">
            <div class="text-h4 text-uppercase text-white fredoka" style="min-width: 220px">Forgot password?</div>
            <div class="text-white q-my-sm text-subtitle1">Enter your email so we can send you the reset link.
              password!
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-7">
        <div class="row q-ml-sm q-mt-sm sm-and-up-hide">
          <div class="col-12 fredoka text-subtitle1">
            <router-link class="text-primary" style="text-decoration: none" to="/">Nebula Arc
            </router-link>
          </div>
        </div>
        <div class="row q-pa-sm-sm q-pa-md">
          <div class="col-12">
            <q-card-section>
              <div class="q-pt-lg">
                <div class="col text-h6 ellipsis flex justify-center">
                  <div class="text-h4 text-uppercase q-my-none text-primary fredoka">reset password</div>
                </div>
              </div>
            </q-card-section>
            <q-card-section>
              <q-form class="q-gutter-md" @submit="submitForm">
                <q-input v-model="email" :rules="[rules.required]" label="Email" lazy-rules
                         type="email" v-bind="$input"/>
                <div>
                  <q-btn :loading="loading" class="full-width" color="primary" label="To send" rounded
                         type="submit"></q-btn>
                  <div class="q-mt-lg">
                    <div class="q-mt-sm">
                      Accomplish
                      <router-link class="text-primary" to="/login">Login</router-link>
                    </div>
                  </div>
                </div>
              </q-form>
            </q-card-section>
          </div>
        </div>
      </div>
    </div>
  </q-card>
</template>

<script setup>
import {computed, ref} from 'vue';
import {useAuthStore, useCommonStore} from "stores/all";
import {useQuasar} from 'quasar';
import rules from 'src/support/rules/fieldRules';
import {handleErros} from 'src/support/errors/handleErros';
import {showPositive} from 'src/support/helpers/notification';

const authStore = useAuthStore()
const commonStore = useCommonStore()
const et = useQuasar()

const email = ref('')

const loading = computed(() => commonStore.isLoading)

const submitForm = async () => {
  try {
    // commonStore.ADD_REQUEST()
    // await authStore('authentication/RESET_PASSWORD', {email: email.value})
    showPositive('A link to reset your password has been sent to your email! The E-mail may take a few minutes to arrive.')
    loading.value = false
  } catch (error) {
    handleErros(error)
   // commonStore.REMOVE_REQUEST()
  }
}
</script>
