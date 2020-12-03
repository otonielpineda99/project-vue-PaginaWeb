<template>
    <article class="article-item">
        <div class="image-wrap">
          <img
            :src="pelicula.image"
            :alt="pelicula.title"
            :title="pelicula.title"
          />
        </div>

        <h2>{{pelicula.title}}</h2>
        <span class="date" :class="{
          yeargreen: pelicula.year >=2021,
          yearred: pelicula.year <2021
        }">
          {{pelicula.year}}
        </span>
        <a href="#">Leer mas</a>
        <input type="button" value="Marcar Favorita"
          @click="pasarFavoritaAlPadre(pelicula)"
        />
        <div class="clearfix"></div>
      </article>
</template>
<script>
export default {
    name: 'Pelicula',
    props: ['pelicula'],
    methods: {
      pasarFavoritaAlPadre(pelicula){
        this.$emit('favorita', pelicula);
        }
    }
}
</script>