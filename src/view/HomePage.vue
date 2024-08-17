
<script setup>
import { useDeviceStore } from '@/store/deviceStore.js'
const deviceStore = useDeviceStore()

import filterBrand from '@/dataBase/filter/DataFilter.js'


function getName(name) {
    switch (name) {
        case 'APE':
            return 'Apple'
            break;
        case 'XIA':
            return 'Xiaomi'
            break;
        case 'SSG':
            return 'Samsung'
            break;
        case 'MTA':
            return 'Motorola'
            break;
        case 'HWI':
            return 'Huawei'
            break;

        default:
            break;
    }
}



</script>

<template>
    <v-container>
        <v-row>
            <v-col cols="8">
                <v-list lines="two">
                    <v-list-item title="Listado de Dispositivos"
                        subtitle="Lista total de todos los dispositivos ingresados">
                        <template v-slot:prepend>
                            <v-avatar color="primary">
                                <v-icon color="white">mdi mdi-view-dashboard</v-icon>
                            </v-avatar>


                        </template>

                    </v-list-item>
                </v-list>

                <TableData />
            </v-col>
            <v-col cols="4"> <v-sheet rounded="xl" border color="#DCEAEE" class="  pa-4 d-flex flex-column" height="100%">

                    <div class="">
                        <h3 class="text-grey">Dispositivos:</h3>
                        <v-row>
                            <template v-for="item in filterBrand">
                                <v-col>
                                    <v-card class="pa-2 d-flex  align-center">

                                        <v-avatar class="mr-3" color="surface-variant">{{ item.key }}</v-avatar>
                                        <div>
                                            <h4 class="text-subtitle-2">{{ getName(item.key) }}</h4>
                                            <h4 class="text-caption text-grey">Producto</h4>
                                        </div>

                                    </v-card>
                                </v-col>
                            </template>
                        </v-row>
                    </div>

                </v-sheet></v-col>
        </v-row>
    </v-container>
</template>