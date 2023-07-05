<template>
  <b-container class="mt-5">
    <div class="overflow-auto">


      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.5859 21C16.849 21 21.1156 16.7467 21.1156 11.5C21.1156 6.25329 16.849 2 11.5859 2C6.32283 2 2.05624 6.25329 2.05624 11.5C2.05624 16.7467 6.32283 21 11.5859 21Z" stroke="#4C4C4C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M22.1187 22L20.1125 20" stroke="#4C4C4C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </span>
        </div>
        <input type="text" class="form-control"  v-model="searchTerm" placeholder="Search" @input="handleSearch"  aria-label="Username" aria-describedby="basic-addon1">
      </div>




      <!-- <b-form-group>
        <b-form-input class="form_search mb-5" v-model="searchTerm" placeholder="Search" @input="handleSearch"></b-form-input>
      </b-form-group> -->

      <b-table
        id="my-table"
        :items="filteredItems"
        :per-page="perPage"
        :current-page="currentPage"
        small
      >

      <!-- view img -->
        <template #cell(avatar)="row">
          <div class="d-flex justify-content-center">
            <img class="w-50" :src="row.value" alt="User Avatar" />
          </div>
        </template>

        <!-- check if roule admin or customer -->
        <template #cell(role)="row">
          <span :class="{'text-danger': row.item.role === 'customer', 'text-primary': row.item.role === 'admin'}">{{ row.item.role }}</span>
        </template>


     
 

      </b-table>
      

      <div class="d-flex justify-content-end">
        <div class="d-block">
          <b-pagination
            v-model="currentPage"
            :total-rows="filteredItems.length"
            :per-page="perPage"
            aria-controls="my-table"
          ></b-pagination>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      items: [],
      filteredItems: [],
      fields: ['Id', 'Email', 'Password', 'Name', 'Role', 'Avatar', 'Creation At', 'Updated At'],
      searchTerm: '',
    };
  },
  computed: {
    rows() {
      return this.filteredItems.length;
    },
  },
  created() {
    try {
      axios.get('https://api.escuelajs.co/api/v1/users').then((res) => {
        this.items = res.data.map((user) => {
          return {
            ...user,
            avatar: user.avatar,
          };
        });
        this.filteredItems = this.items;
      });
    } catch {
      console.log('Error getting data from API');
    }
  },
  methods: {
    handleSearch() {
      const regex = new RegExp(this.searchTerm, 'i');
      this.filteredItems = this.items.filter((user) => {
        return (
          regex.test(user.id.toString()) ||
          regex.test(user.email) ||
          regex.test(user.password) ||
          regex.test(user.name) ||
          regex.test(user.role) ||
          regex.test(user.creationAt) ||
          regex.test(user.updatedAt)
        );
      });
    }
  },
};
</script>
