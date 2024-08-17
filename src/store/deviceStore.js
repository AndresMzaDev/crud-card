import { defineStore } from "pinia";

export const useDeviceStore = defineStore("DeviceStore", {
  state: () => {
    return {
      items: [
        {
          brand: "APE",
          model: "IPhone 15 Pro Max",
          IMEI: "saddsadasdd",
          phoneNumber: "99999999444",
          date: "Tue Aug 13 2024 00:00:00 GMT-0600 (hora estándar central)",
        },
        {
          brand: "XIA",
          model: "HUAWEI 14 Ultra",
          IMEI: "saddsadasdd",
          phoneNumber: "99999999444",
          date: "Tue Aug 13 2024 00:00:00 GMT-0600 (hora estándar central)",
        },
        {
          brand: "SSG",
          model: "Galaxy S24",
          IMEI: "saddsadasdd",
          phoneNumber: "99999999444",
          date: "Tue Aug 13 2024 00:00:00 GMT-0600 (hora estándar central)",
        },
        {
          brand: "SSG",
          model: "Galaxy S24",
          IMEI: "saddsadasdd",
          phoneNumber: "99999999444",
          date: "Tue Aug 13 2024 00:00:00 GMT-0600 (hora estándar central)",
        },
        {
          brand: "SSG",
          model: "Galaxy S24",
          IMEI: "saddsadasdd",
          phoneNumber: "99999999444",
          date: "Tue Aug 13 2024 00:00:00 GMT-0600 (hora estándar central)",
        },
        {
          brand: "APE",
          model: "IPhone 15 Pro Max",
          IMEI: "saddsadasdd",
          phoneNumber: "99999999444",
          date: "Tue Aug 13 2024 00:00:00 GMT-0600 (hora estándar central)",
        },
        {
          brand: "APE",
          model: "IPhone 15 Pro Max",
          IMEI: "saddsadasdd",
          phoneNumber: "99999999444",
          date: "Tue Aug 13 2024 00:00:00 GMT-0600 (hora estándar central)",
        },
        {
          brand: "XIA",
          model: "HUAWEI 14 Ultra",
          IMEI: "saddsadasdd",
          phoneNumber: "99999999444",
          date: "Tue Aug 13 2024 00:00:00 GMT-0600 (hora estándar central)",
        },
        {
          brand: "MTA",
          model: "Moto e22i",
          IMEI: "saddsadasdd",
          phoneNumber: "99999999444",
          date: "Tue Aug 13 2024 00:00:00 GMT-0600 (hora estándar central)",
        },
        {
          brand: "MTA",
          model: "Moto razr 40 ultra",
          IMEI: "saddsadasdd",
          phoneNumber: "99999999444",
          date: "Tue Aug 13 2024 00:00:00 GMT-0600 (hora estándar central)",
        },
      ],
      search: null,
    };
  },

  getters: {
    count: (state) => state.items.length,

    isEmpty: (state) => state.count === 0,
  },

  actions: {
    async addItems(item) {
      this.items.push(item);
    },
    editItems(index, item) {
      this.items[index] = item;
    },
    deleteItem(index) {
      this.items.splice(index, 1);
    },
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: "myStoreCar",
        storage: localStorage,
      },
    ],
  },
});
