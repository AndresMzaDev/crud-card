<script setup>
import { computed, ref, watch } from 'vue';
import DataBrand from '@/dataBase/DataBrand.js'
// import DataBrand from '@/dataBase/DataBrand.js'
import { useDeviceStore } from '@/store/deviceStore.js'
const deviceStore = useDeviceStore()

const data = defineProps({
    itemEdit: Object,
    indexEdit: Number
});

const loadingBtn = ref(false)
const formValidate = ref()

const rules = {

    generalRules: [
        (value) => {
            if (value) return true;
            return "Este campo es requerido";
        },
    ],
    phone: [
        (value) => {
            if (value?.length == 11 && /[0-9-]+/.test(value)) return true;

            return "El número de teléfono deberá tener mínimo 11 dígitos, sin guiones o paréntesis.";
        },
    ],
    imei: [
        (value) => {
            if (value?.length <= 16) return true;

            return "El IMEI deberá tener un máximo de 16 caracteres";
        },
    ],
}

const emit = defineEmits(["goBack"]);

const getModel = computed(() => {
    const dataResult = DataBrand.find(element => element.key === data.itemEdit.brand)
    return dataResult ? dataResult.model : []
})

watch(data.itemEdit, (newValue, oldValue) => {
    console.log(newValue.brand, oldValue.brand);
    if (newValue.brand != oldValue.brand) {
        data.itemEdit.model = null
    }
})

function editDevice() {
    loadingBtn.value = true
    setTimeout(() => {
        deviceStore.editItems(data.indexEdit, data.itemEdit)
        loadingBtn.value = false
        emit('goBack')
    }, 1000);

}
</script>

<template>
    <v-card rounded="lg">
        <v-card-title class="d-flex justify-space-between align-center">
            <div class="text-h5 text-medium-emphasis ps-2">
                Editar Dispositivo
            </div>

            <v-btn icon="mdi-close" variant="text" @click="emit('goBack')"></v-btn>
        </v-card-title>

        <v-divider class="mb-4"></v-divider>


        <v-card-text>
            <div class="text-medium-emphasis mb-4">
                Editar todos los campos solicitados por el formulario
            </div>
            <v-sheet class="pa-3" border rounded="">

                <v-form v-model="formValidate">
                    <v-row>
                        <v-col cols="6">
                            <div class="mb-2">Ingrese la Marca <span class="text-primary">*</span></div>
                            <v-select v-model="data.itemEdit.brand" @update:modelValue="data.itemEdit.model = null" required
                                :rules="rules.generalRules" class="text-subtitle-1" base-color="secondary" color="primary"
                                variant="outlined" :items="DataBrand" density="compact" item-title="name"
                                placeholder="Marca" item-value="key" clearable></v-select>
                        </v-col>

                        <v-col cols="6">
                            <div class="mb-2">Ingrese el modelo <span class="text-primary">*</span></div>
                            <v-select v-model="data.itemEdit.model" :items="getModel" required :rules="rules.generalRules"
                                class="text-subtitle-1" base-color="secondary" color="primary" variant="outlined"
                                density="compact" placeholder="Modelo" clearable></v-select>
                        </v-col>
                        <v-col cols="6">
                            <div class="mb-2">Ingrese el IMEI <span class="text-primary">*</span></div>
                            <v-text-field v-model="data.itemEdit.IMEI" counter class="text-subtitle-1" required
                                :rules="rules.imei" base-color="secondary" color="primary" variant="outlined"
                                density="compact" placeholder="IMEI" clearable></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <div class="mb-2">Ingrese el Número Telefónico <span class="text-primary">*</span></div>
                            <v-text-field v-model="data.itemEdit.phoneNumber" counter required :rules="rules.phone"
                                class="text-subtitle-1" base-color="secondary" color="primary" variant="outlined"
                                density="compact" placeholder="+999999999" clearable></v-text-field>
                        </v-col>
                    </v-row>
                </v-form>
            </v-sheet>

            <div class="text-overline mb-2">💎 MUVS</div>

            <div class="text-medium-emphasis mb-1">
                Los campos obligatorios <span class="text-primary">*</span>
            </div>

        </v-card-text>

        <v-divider class="mt-2"></v-divider>

        <v-card-actions class="my-2 d-flex justify-end">

            <v-btn :loading="loadingBtn" :disabled="!formValidate" class="text-none text-subtitle-1 text-white"
                color="primary" variant="outlined" text="Editar Dispositivo" @click="editDevice"></v-btn>
        </v-card-actions>
    </v-card>
</template>