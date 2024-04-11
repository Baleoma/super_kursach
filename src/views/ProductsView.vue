<<template>
  <section class="bg-danger">
    <h2>Товары длячайников</h2>
    <div class="d-flex flex-wrap justify-content-center p-4">
      <div v-for="product in products" class="card m-2">
        <div class="card-header">{{product.title}}</div>
        <div class="card-body">
          <img class="img-fluid" :src="product.thumbnail" :alt="product.title">
        </div>
        <div class="card-footer d-flex justify-content-between align-items-center">
          <div class="fw-bold fst-italic">Price: {{product.price}}$</div>
          <div>
            <RouterLink class="btn btn-dark" :to="'/products/' + product.id">Подробнее</RouterLink>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
  export default {
    data(){
      return{
        products: [],
      }
    },
    methods:{
      getProducts(){
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => this.products = data.products)
      }
    },
    created() {
      this.getProducts();
    }
  }
</script>

>