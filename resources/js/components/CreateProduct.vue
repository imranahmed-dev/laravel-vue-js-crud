<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            <h5 class="m-0">
              Create Product
              <router-link
                :to="{ name: 'product' }"
                class="btn btn-primary btn-sm float-right"
                >Product List</router-link
              >
            </h5>
          </div>

          <div class="card-body">
            <div class="row">
              <div class="col-2"></div>
              <div class="col-8">
                <form @submit.prevent="createProduct">
                  <div class="form-group">
                    <label for="">Product Title</label>
                    <input
                      type="text"
                      class="form-control"
                      name="title"
                      v-model="form.title"
                      placeholder="Product title"
                      :class="{ 'is-invalid': form.errors.has('title') }"
                    />
                    <has-error :form="form" field="title"></has-error>
                  </div>
                  <div class="form-group">
                    <label for="">Product Price</label>
                    <input
                      type="text"
                      class="form-control"
                      name="price"
                      v-model="form.price"
                      placeholder="Product price"
                      :class="{ 'is-invalid': form.errors.has('price') }"
                    />
                    <has-error :form="form" field="price"></has-error>
                  </div>
                  <div class="form-group">
                    <label for="">Product Image</label>
                    <input
                      type="file"
                      class="form-control"
                      name="image"
                      :class="{ 'is-invalid': form.errors.has('image') }"
                    />
                    <has-error :form="form" field="image"></has-error>
                  </div>
                  <div class="form-group">
                    <label for="">Product Description</label>
                    <textarea class="form-control" name="description" v-model="form.description" placeholder="Product description" :class="{ 'is-invalid': form.errors.has('description') }"
                    />
                    <has-error :form="form" field="description"></has-error>
                  </div>
                  <div class="form-group">
                    <button class="btn btn-success btn-sm" type="submit">
                      Create
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Form } from "vform";

export default {
  data() {
    return {
      form: new Form({
        title: "",
        price: "",
        image: "",
        description: "",
      }),
    };
  },
  methods: {
    createCategory() {
      this.form.post("/api/category").then(({ data }) => {
        this.form.name = "";
        this.$toast.success({
          title: "Success",
          message: "Category Created Successfully",
        });
      });
    },
  },
};
</script>
<style scoped>
</style>
