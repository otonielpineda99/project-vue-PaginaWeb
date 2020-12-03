<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h1 class="subheader">Peliculas</h1>

        <div class="mis-datos" v-if="misDatos">
          <p v-html="misDatos"></p>
          <br/>
          {{apellidos | mayusculas | concatenaYear('ESTE ES UN AÑO')}}
        </div>
        
        <div class="favorita" v-if="favorita">
          La pelicula marcada es: 
          <h2>{{favorita.title}}</h2>
        </div>
        
        <!--Listado articulos-->
        <div id="articles">
          <div v-for="pelicula in peliculasMayuscula" v-bind:key="pelicula.title">
            <Pelicula 
            
            :pelicula="pelicula"
            v-on:favorita="LlegadoFavorita"
            ></Pelicula>
          </div>
        </div>
      </section>
      <Sidebar></Sidebar>
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
import Pelicula from "./Pelicula.vue";
export default {
  name: "Peliculas",
  components: {
    Pelicula,
    Sidebar
  },
  methods: {
    LlegadoFavorita(favorita){
      this.favorita = favorita;
    }
  },
  filters: {
    mayusculas(value){
      return value.toUpperCase();
    },
    concatenaYear(value, message){
      var date = new Date();
      return value+' '+date.getFullYear()+' '+message;
    }
  },
  computed: {
    peliculasMayuscula(){
      var peliculasMod = this.peliculas;
      for(var i=0; i<this.peliculas.length; i++){
        peliculasMod[i].title = peliculasMod[i].title.toUpperCase(); 
      } 

      return peliculasMod;
    },
    misDatos(){
      return this.nombre + ' '+this.apellidos;
    }
  },
  data() {
    return {
      nombre: 'otoniel',
      apellidos: 'pineda',
      favorita: null,
      peliculas: [
        {
          title: "WONDER WOMAN",
          year: 2017,
          image:
            "https://cnet4.cbsistatic.com/img/3Yp0qClqlfJU08yislHVSXXQbGA=/756x567/2017/05/31/b3eeb962-b471-4ab3-991e-b1a92d29ac80/wonder-woman-2017-1.jpg"
        },
        {
          title: "VIUDA NEGRA",
          year: 2021,
          image: "https://img.ecartelera.com/noticias/55500/55573-m.jpg"
        },
        {
          title: "GUARDIANES DE LA GALAXIA 2",
          year: 2017,
          image:
            "https://i.blogs.es/f6d280/cartel-guardianes-de-la-galaxia-2/1366_2000.jpg"
        }
      ]
    };
  }
};
</script>