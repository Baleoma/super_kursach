<template>
  <table class="table">
    <tr class="d-table-row">
      <td class="d-table-cell">Название</td>
      <td class="d-table-cell">{{product.title}}</td>
    </tr>
    <tr class="d-table-row">
      <td class="d-table-cell">Описание</td>
      <td class="d-table-cell">{{product.description}}</td>
    </tr>
    <tr class="d-table-row">
      <td class="d-table-cell">Изображение</td>
      <td class="d-table-cell"><img class="img-fluid" :src="product.images[0]" alt=""></img></td>
    </tr>
    <tr class="d-table-row">
      <td class="d-table-cell">Рейтинг</td>
      <td class="d-table-cell">{{product.rating}}</td>
    </tr>
    <tr class="d-table-row">
      <td class="d-table-cell">Цена</td>
      <td class="d-table-cell">{{product.price}}</td>
    </tr>
  </table>
  <RouterLink class="btn btn-dark" to="/products/">Products</RouterLink>
</template>

<script>
  export default {
    data(){
      return{
        product: null,
        id: null
      }
    },
    created() {
      this.id = this.$route.params.id
      const url = 'https://dummyjson.com/products/' + this.id;
      fetch(url)
          .then(respose => respose.json())
          .then(data => this.product = data)
    }
  }
</script>