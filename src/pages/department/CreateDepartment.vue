<template>
  <div class="d-flex align-items-center justify-content-center min-vh-100 full-page-form">
  <div class="container">
    <div class="bg-white p-4 rounded shadow form-container">
      <h2 class="text-center mb-4">Add New Department</h2>
      <div class="d-flex justify-content-end mb-3">
        <RouterLink class="text-white btn btn-success" to="/department">Show All Department</RouterLink>
      </div>
      <form @submit.prevent="departmentSubmit">
        <div class="mb-3">
          <label for="title" class="form-label">Title</label>
          <input type="text" v-model="department.title" class="form-control" id="title" placeholder="Enter department name">
        </div>
        <div class="mb-3">
          <label for="details" class="form-label">Details</label>
          <input type="text" v-model="department.details" class="form-control" id="details" placeholder="Enter details">
        </div>
        <button type="submit" class="btn btn-primary">Add Department</button>
      </form>
    </div>
  </div>
</div>
</template>

<script  setup>
import axios from 'axios';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

  const router=useRouter();
  const department=reactive({
    title:"",
    details:""
  });
  const departmentSubmit=()=>{
    axios.post("http://localhost/laravel/Hotel-Management-laravel/public/api/department", department)
    .then((result) => {
      console.log(result.data);
      router.push({path:'/department'})
    })
    .catch((err) => {
      console.log(err);
      
    });
  }

</script>

<style>

</style>