
<template>
  <div class="d-flex align-items-center justify-content-center min-vh-100 full-page-form">
  <div class="container">
    <div class="bg-white p-4 rounded shadow form-container">
      <h2 class="text-center mb-4">Update Department</h2>
      <!-- <div class="d-flex justify-content-end mb-3">
        <RouterLink class="text-white btn btn-success" to="/department">Show All Department</RouterLink>
      </div> -->
      <form @submit.prevent="departmentUpdate">
        <div class="mb-3">
          <label for="title" class="form-label">Title</label>
          <input type="text" v-model="department.title" class="form-control" id="title" placeholder="Enter department name">
        </div>
        <div class="mb-3">
          <label for="details" class="form-label">Details</label>
          <input type="text"  v-model="department.details" class="form-control" id="details" placeholder="Enter details">
        </div>
        <button type="submit" class="btn btn-primary">Update Department</button>
      </form>
    </div>
  </div>
</div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import { useRoute, useRouter } from 'vue-router';

  const {id}= useRoute().params;
  const router = useRouter()

  onMounted(()=>{
    fetchDepartment()
  })

  const fetchDepartment=()=>{
    axios.get(`http://localhost/laravel/Hotel-Management-laravel/public/api/department/${id}`)
    .then((result) => {
      console.log(result.data);
      department.title=result.data.title
      department.details=result.data.details
      
    }).catch((err) => {
      console.log(err);
      
    });
  }
  const department=reactive({
    title:"",
    details:""
  })

  const departmentUpdate=()=>{
    axios.put("http://localhost/laravel/Hotel-Management-laravel/public/api/department/"+id, department)
    .then((result) => {
      console.log(result.data);
      router.push('/department')
    }).catch((err) => {
      console.log(err);
      
    });
  }
  

</script>

<style>

</style>