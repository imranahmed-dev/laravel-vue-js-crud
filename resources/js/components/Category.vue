<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h5 class="m-0">
              Category
              <router-link
                :to="{ name: 'create-category' }"
                class="btn btn-primary btn-sm float-right"
                >Create Category</router-link
              >
            </h5>
          </div>

          <div class="card-body">
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Category Name</th>
                  <th>Category Slug</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="category in categories" :key="category.id">
                  <td>{{category.id}}</td>
                  <td>{{category.name}}</td>
                  <td>{{category.slug}}</td>
                  <td>
                    <router-link :to="{name: 'edit-category', params: {slug:category.slug}}" class="btn btn-info btn-sm">Edit</router-link>
                    <a href="#" class="btn btn-danger btn-sm">Delete</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [],
    };
  },
  methods: {
    loadCategories() {
      axios.get("/api/category").then((response) => {
          this.categories = response.data;
      });
    },
  },
  mounted(){
      this.loadCategories();
  }
};
</script>
<style scoped>
</style>
