<script setup>
import DataPhone from '@/dataBase/DataPhone.js'
import filterBrand from '@/dataBase/filter/DataFilter.js'
import AddPhone from '@/components/AddPhone.vue'
import { ref } from 'vue';
import { useDate } from 'vuetify'
const headers = [
    { title: 'Marca', key: 'brand' },
    { title: 'Modelo', key: 'model' },
    { title: 'IMEI', key: 'IMEI' },
    { title: 'Número telefónico', key: 'phoneNumber' },
    { title: 'Fecha de creación', key: 'date' },
]

const date = useDate()
const brandToFIlter = ref()
const dateToFIlter = ref()
const dialog = ref(true)

function getColor(calories) {
    if (calories > 100) return 'red'
    else if (calories > 50) return 'orange'
    else return 'green'
}

</script>

<template>
    <!-- <h1> {{ brandToFIlter }}</h1> -->
    <v-card class="pa-3 mt-2">
        <h4 class="text-grey text-caption">Filtros</h4>
        <v-row>
            <v-col cols="2">
                <v-menu :close-on-content-click="false">
                    <template v-slot:activator="{ props }">
                        <!-- <v-btn color="primary" v-bind="props">
                            Activator slot
                        </v-btn> -->
                        <v-btn v-bind="props" height="100%" variant="flat" color="secondary" block
                            class="text-none text-subtitle-1" prepend-icon="mdi-calendar-range" border>
                            Fecha
                        </v-btn>
                    </template> <v-date-picker v-model="dateToFIlter"></v-date-picker></v-menu>

            </v-col>
            <v-col cols="2">
                <v-select v-model="brandToFIlter" class="text-subtitle-1" base-color="secondary" color="primary"
                    variant="outlined" :items="filterBrand" density="compact" item-title="name" placeholder="Marca"
                    item-value="key" hide-details clearable></v-select>
            </v-col>

            <v-col cols="2">
                <v-select v-model="brandToFIlter" class="text-subtitle-1" base-color="secondary" color="primary"
                    variant="outlined" :items="filterBrand" density="compact" item-title="name" placeholder="Modelo"
                    item-value="key" hide-details clearable></v-select></v-col>

            <v-spacer></v-spacer>

            <v-col class="d-flex">
                <v-spacer></v-spacer>
                <v-btn variant="outlined" color="primary" size="small" icon="mdi mdi-trash-can-outline">

                </v-btn>
            </v-col>


            <!-- <v-select v-model="brandToFIlter" color="primary" variant="outlined" :items="filterBrand" density="compact"
            item-title="name" placeholder="Marca" item-value="key" hide-details clearable></v-select> -->

        </v-row>
    </v-card>
    <v-card class="mt-5 pa-3">
        <v-btn @click="dialog = true" class="text-none text-subtitle-1">Agregar</v-btn>
        <v-data-table :headers="headers" :items="DataPhone">
            <template v-slot:item.calories="{ value }">
                <v-chip :color="getColor(value)">
                    {{ value }}
                </v-chip>
            </template>
        </v-data-table>
    </v-card>

    <v-dialog v-model="dialog" width="70vw">
        <AddPhone @go-back="dialog = false" />
    </v-dialog>
</template>