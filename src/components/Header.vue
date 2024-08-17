<script setup>
import { ref } from 'vue';

const loading = ref(false);

</script>

<template>
    <v-app-bar flat color="transparent">
        <!-- <v-app-bar-nav-icon> <v-img height="100" src="@/assets/logo.svg" /></v-app-bar-nav-icon> -->

        <v-img class="img-class" height="10rem" src="@/assets/LogoMUVS.png" />
        <!-- <v-img v-if="useMdAndUp" class="img-class"  height="10rem" src="@/assets/logotipoH.png" /> -->
        <!-- <v-img v-else class="img-class"  height="10rem" src="@/assets/logotipo.png" /> -->

        <v-text-field :loading="loading" append-inner-icon="mdi-magnify" density="compact" label="Buscar Dispositivo"
            variant="solo" hide-details single-line></v-text-field>
        <v-spacer></v-spacer>
        <v-btn-toggle rounded="0" color="deep-purple-accent-3" group class="d-md-none-and-up hidden-xs">
            <v-btn class="text-capitalize " size="x-small" disabled variant="text" style="border-radius: 8px">
                Dashboard
            </v-btn>

            <v-btn disabled class="text-capitalize" size="x-small" variant="text" style="border-radius: 8px">
                Tienda
            </v-btn>

            <v-btn class="text-capitalize" size="x-small" variant="text" style="border-radius: 8px">
                Dispositivos
            </v-btn>

            <v-btn disabled class="text-capitalize" size="x-small" variant="text" style="border-radius: 8px">
                Usuarios
            </v-btn>
        </v-btn-toggle>



    </v-app-bar>
</template>