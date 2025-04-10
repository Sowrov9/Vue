<script lang="ts" setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

    const customers=ref([])
    onMounted(()=>{
      fetchCustomer()
    })
    const fetchCustomer=()=>{
      axios.get('http://localhost/laravel/Hotel-Management-laravel/public/api/customer')
      .then(res=>{
        console.log(res.data.customers)
        customers.value=res.data.customers
        
      })
      .catch(err=>{
        console.log(err);
        
      })
    }

    const deletecustomer= (id)=>{
    axios.delete(`http://localhost/Laravel/project/public/api/customer/${id}`)
    .then(res=>{
      console.log(res);
      if (res.data.roles) {
          fetchCustomer()
      }
    })
    .catch(err =>{
      console.log(err);
      
    })
    
  }
</script>


<template>
  <h1>Customer</h1>
  <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Mobile</th>
      <th scope="col">Address</th>
      <th scope="col">Photo</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="customer in customers">
      <th scope="row">{{customer.id}}</th>
      <td>{{customer.name}}</td>
      <td>{{customer.email}}</td>
      <td>{{customer.mobile}}</td>
      <td>{{customer.address}}</td>
      <td>{{customer.photo}}</td>
      <td>
       <RouterLink class="btn btn-primary" to="/edit/{{ customer.id }}">Edit</RouterLink>  
        <a class="btn btn-danger" @click="deletecustomer(customer.id )">Delete</a>  
       </td>
    </tr>
  </tbody>
</table>
</template>


<style>

</style>