<template>
  <section class="m-4">
    <h3>Деклоративная отрисовка</h3>
    <p>{{message}}</p>

    <h3>Дирректива v-model</h3>
    <form action="#" method="post">
      <input class="m-2 input-group" v-model="login" type="text" name="login" value="" placeholder="Введите логин">
      <p>Ваш логи:{{login}}</p>
    </form>

    <h3>Дирректива v-if</h3>
    <div v-if="seen">
      <p>Переменная seen - истина</p>
      <p>а 2-й блок убран из DOM-дерева</p>
    </div>
    <div v-if="!seen">
      <p>Второй блок</p>

    </div><h3>Дирректива v-show</h3>
    <div v-show="seen">
      <p>Переменная seen - истина</p>
      <p>а 2-й блок скрыт с помощью атрибута style="display = none"</p>
    </div>
    <div v-show="!seen">
      <p>Второй блок</p>
    </div>

    <h3>Дирректива v-for</h3>

    <div>
      <ol>
        <li v-for="fruit in fruits">{{fruit}}</li>
      </ol>
    </div>

    <div>
      <ul>
        <li v-for="student in students">
          ФИО: <b>{{student.fio}}</b> <br/>
          День рождения: <b>{{student.birth}}</b> <br/>
          Пол: <b>{{student.sex}}</b> <br/>
        </li>
      </ul>
    </div>

    <h3>Директива v-bind</h3>
    <div>
      <img v-bind:src="bind_img" alt="">
    </div>

    <h3>Директива v-on</h3>
    <div>
      <button v-on:click="active_true" class="btn-success">active: true</button>
      <button v-on:click="active_false" class="btn-success m-1">active: false</button>
    </div>

  </section>
</template>

<script>
  export default {
    data(){
      return{
        message: "Всем привет",
        login: null,
        seen: true,
        fruits: ["Яблоко", "Киви", "личи"],
        students: [
          {
            fio: "Галацан И.П.",
            birth: '22.05.2006',
            sex: 'Не было',
          },
          {
            fio: "Глазунов И.С.",
            birth: '17.08.2006',
            sex: 'Мужской',
          }
        ],
        bind_img: 'https://secretmag.ru/thumb/1200x0/filters:quality(75):no_upscale()/imgs/2023/02/09/16/5789107/06fae590f1d8cd395cd92a660ab510aa019e6399.jpg',
        bind_value: 'Милый котик',
        active:true
      }
    },
    methods:{
      active_true(){
        this.active = true;
      },
      active_false(){
        this.active = false;
      }
    }
  }

</script>

<style scoped>
  img{
    width: 200px;
  }
</style>