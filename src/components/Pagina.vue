<template>
  <div class="general">
      <Slider texto="PAGINA DE PRUEBAS"></Slider>
      <div class="center">
        <section id="content">
          <h2 class="subheader">Pagina de pruebas</h2>
          <h3>{{id_desde_url}}</h3>
          <button @click="actualizarNombre()">ACTUALIZAR NOMBRE</button>
          <button @click="redirigirAlBlog()">Regresar al blog</button>
          <h4>{{nombre}}</h4>
        </section>
        <Sidebar></Sidebar>
        <div class="clearfix"></div>
      </div>
  </div>
</template>

<script>
import Slider from './Slider.vue';
import Sidebar from './Sidebar.vue';
export default {
  components: {
    Slider,
    Sidebar
  },
  name: "Pagina",
  created() {
    console.log("COMPONENTE CREADO");
  },
  mounted() {
    this.id_desde_url = this.$route.params.id;
    console.log("COMPONENTE MONTADO");
  },
  updated() {
    console.log("COMPONENTE CARGADO");
  },
  destroyed() {
    console.log("COMPONENTE ELIMINADO");
  },
  data() {
    return {
      id_desde_url: null,
      nombre: "OTONIEL PINEDA"
    };
  },
  methods: {
    actualizarNombre() {
      this.nombre = "ARMANDO PINEDA";
      console.log(this.nombre);
    },
    redirigirAlBlog(){
      this.$router.push('/blog');
    }
  }
};
</script>