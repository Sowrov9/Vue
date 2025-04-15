<template>
  <div class="card">
    <div class="card-header">
        <h4 class="header-title">Customers</h4>
        
    </div>
    <div class="card-body">
        <div class="card-header">
                    <h3 class="btn btn-secondary"><RouterLink to="/customer/create">Add Customer</RouterLink></h3>
                </div>
        <div class="table-responsive">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <div class="dataTables_length">
                    <label class="form-label">Show
                        <select name="basic-datatable_length" class="form-select form-select-sm">
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select> entries
                    </label>
                </div>
                <div class="dataTables_filter">
                    <label>Search:
                        <input type="search" class="form-control form-control-sm" placeholder="">
                    </label>
                </div>
            </div>
            <table id="basic-datatable" class="table table-striped dt-responsive nowrap w-100">
                <thead>
                    <tr>

                        <th>ID</th>
                        <th>Title</th>
                        <th>Details</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    <tr v-for="department in departments" :key="department.id">
                        <td>{{ department.id }}</td>
                        <td>{{ department.title }}</td>
                        <td>{{ department.details }}</td>
                        <td class="d-flex justify-content-center">
                            <RouterLink :to="`/department/edit/${department.id}`" class="btn btn-primary">Edit</RouterLink>
                            <a class="btn btn-danger" @click="deletedept(department.id)">Delete</a>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
            <div class="d-flex justify-content-between align-items-center mt-3">
                <div class="dataTables_info">Showing 1 to 10 of 57 entries</div>
                <ul class="pagination pagination-rounded">
                    <li class="page-item disabled"><a href="#" class="page-link"><i class="ri-arrow-left-s-line"></i></a></li>
                    <li class="page-item active"><a href="#" class="page-link">1</a></li>
                    <li class="page-item"><a href="#" class="page-link">2</a></li>
                    <li class="page-item"><a href="#" class="page-link">3</a></li>
                    <li class="page-item"><a href="#" class="page-link">4</a></li>
                    <li class="page-item"><a href="#" class="page-link">5</a></li>
                    <li class="page-item"><a href="#" class="page-link">6</a></li>
                    <li class="page-item"><a href="#" class="page-link"><i class="ri-arrow-right-s-line"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
    
</script>

<style>

</style>