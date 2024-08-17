
<script setup>
import TableData from '@/components/TableData.vue'


</script>

<template>
    <v-container>

        <v-list lines="two">
            <v-list-item title="Listado de Dispositivos" subtitle="Lista total de todos los dispositivos ingresados">
                <template v-slot:prepend>
                    <v-avatar color="primary">
                        <v-icon color="white">mdi mdi-view-dashboard</v-icon>
                    </v-avatar>
                </template>

            </v-list-item>
        </v-list>

        <TableData />

    </v-container>
</template>