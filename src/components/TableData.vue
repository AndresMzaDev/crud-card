<script setup>
import DataPhone from '@/dataBase/DataPhone.js'
import filterBrand from '@/dataBase/filter/DataFilter.js'
import DataBrand from '@/dataBase/DataBrand.js'
import AddPhone from '@/components/AddPhone.vue'
import { ref, computed, nextTick } from 'vue';
import { useDate } from 'vuetify'
import { useDeviceStore } from '@/store/deviceStore.js'
const deviceStore = useDeviceStore()
import EditPhone from './EditPhone.vue';

const headers = [
    { title: 'Fecha de creación', key: 'date' },
    { title: 'Marca', key: 'brand' },
    { title: 'Modelo', key: 'model' },
    { title: 'IMEI', key: 'IMEI' },
    { title: 'Número telefónico', key: 'phoneNumber' },

    { title: 'Acciones', key: 'actions' },
]

const date = useDate()

const brandToFilter = ref()
const dateToFIlter = ref()
const modelToFilter = ref()
const dialogAdd = ref(false)
const dialogEdit = ref(false)
const dialogDelete = ref(false)
const indexEdit = ref()
const itemEdit = ref()
const indexDelete = ref()
const loadingBtn = ref(false)

const getFilter = computed(() => {
    console.log(brandToFilter);
    if (
        brandToFilter.value
    ) {
        console.log('ecxiste');
        return deviceStore.items.filter(
            (item) =>
                (brandToFilter ? brandToFilter.value == item.brand : true)
        )
    } else {
        return deviceStore.items
    }


})

const getModel = computed(() => {
    const data = DataBrand.find(element => element.key === brandToFilter.value)
    return data ? data.model : []
})

function getColor(flag) {
    switch (flag) {
        case 'APE':
            return '#90CAF9'
            break;
        case 'XIA':
            return 'red'
            break;
        case 'SSG':
            return '#B39DDB'
            break;
        case 'MTA':
            return '#FFCC80'
            break;
        case 'HWI':
            return '#B0BEC5'
            break;

        default:
            break;
    }
}

async function editDevice(item) {
    indexEdit.value = deviceStore.items.indexOf(item)
    itemEdit.value = item
    console.log(indexEdit.value);
    console.log(itemEdit.value);
    await nextTick()
    dialogEdit.value = true
}

function cleanFilter() {
    brandToFilter.value = null
    modelToFilter.value = null
}

function deleteItem(item) {
    indexDelete.value = deviceStore.items.indexOf(item)
    dialogDelete.value = true
}

function confirmDelete() {
    loadingBtn.value = true

    setTimeout(() => {
        deviceStore.deleteItem(indexDelete.value)
        dialogDelete.value = false
        loadingBtn.value = false
    }, 1000);

}

function getDataFormat(date) {
    return
}

</script>

<template>
    <v-card class="pa-3 mt-2">
        <h4 class="text-grey text-caption">Filtros</h4>
        <v-row>

            <v-col cols="2">
                <v-menu :close-on-content-click="false">
                    <template v-slot:activator="{ props }">
                        <v-btn v-bind="props" height="100%" variant="flat" color="secondary" block
                            class="text-none text-subtitle-1" prepend-icon="mdi-calendar-range" border>
                            Fecha
                        </v-btn>
                    </template> <v-date-picker v-model="dateToFIlter"></v-date-picker></v-menu>

            </v-col>
            <v-col cols="4">
                <v-select v-model="brandToFilter" class="text-subtitle-1" base-color="secondary" color="primary"
                    variant="outlined" :items="filterBrand" density="compact" item-title="name" placeholder="Marca"
                    item-value="key" hide-details clearable></v-select>
            </v-col>

            <!-- <v-col cols="2">
                <v-select v-model="modelToFilter" class="text-subtitle-1" base-color="secondary" color="primary"
                    variant="outlined" :items="getModel" density="compact" placeholder="Modelo" hide-details
                    clearable></v-select></v-col> -->

            <v-spacer></v-spacer>

            <v-col class="d-flex">
                <v-spacer></v-spacer>
                <v-btn @click="cleanFilter" :disabled="!(brandToFilter || modelToFilter)" variant="outlined" color="primary"
                    size="small" icon="mdi mdi-trash-can-outline">

                </v-btn>

            </v-col>

        </v-row>
    </v-card>
    <v-card class="mt-5 pa-3">
        <div class="d-flex">
            <v-spacer></v-spacer>
            <v-btn color="secondary" variant="text" @click="dialogAdd = true" prepend-icon="mdi mdi-plus-box"
                class="text-none text-subtitle-1">Agregar</v-btn>
        </div>
        <v-data-table :search="deviceStore.search" :headers="headers" :items="getFilter">
            <template v-slot:item.brand="{ value }">
                <v-chip :color="getColor(value)">
                    {{ value }}
                </v-chip>
            </template>
            <template v-slot:item.date="{ value }">
                {{ new Date(value).toLocaleDateString('es') }}
            </template>
            <template v-slot:item.actions="{ item }">
                <div class="d-flex">
                    <v-btn variant="text" disabled color="secondary" size="small" icon="mdi mdi-eye-outline"></v-btn>
                    <v-btn @click="editDevice(item)" variant="text" color="secondary" size="small"
                        icon="mdi mdi-pencil-outline"></v-btn>
                    <v-btn @click="deleteItem(item)" variant="text" color="secondary" size="small"
                        icon="mdi mdi-delete-outline"></v-btn>

                </div>
            </template>
        </v-data-table>
    </v-card>

    <v-dialog v-model="dialogAdd" width="70vw">
        <AddPhone @go-back="dialogAdd = false" />
    </v-dialog>
    <v-dialog v-model="dialogEdit" width="70vw">
        <EditPhone :indexEdit="indexEdit" :itemEdit="itemEdit" @go-back="dialogEdit = false" />
    </v-dialog>
    <v-dialog v-model="dialogDelete" max-width="400">
        <v-card color="secondary" prepend-icon="mdi mdi-alert-circle-outline" title="Eliminar Dispositivo">
            <v-card-text>
                Esta función es irreversible confirma qué desea eliminar el dispositivo" title="Eliminar dispositivo
            </v-card-text>
            <template v-slot:actions>
                <v-spacer></v-spacer>

                <v-btn color="grey" @click="dialogDelete = false">
                    Cancelar
                </v-btn>

                <v-btn :loading="loadingBtn" color="primary" @click="confirmDelete">
                    Confirmar
                </v-btn>
            </template>
        </v-card>
    </v-dialog>
</template>