<template>
  <section id="content">
    <h2 class="subheader">{{titulo}}</h2>
    <hr />
    <h1>Este es mi componente</h1>
    <h2>{{subtitulo}}</h2>
    <hr />
    <h2>REACTIVIDAD</h2>
    <input type="text" v-model="nombre" />
    Mi nombre es <strong>{{nombre}}</strong>

    <h2>Directivas condicionales</h2>
    <input type="number" v-model="edad" />
    Mi edad es: <strong>{{edad}}</strong>

    <p class="alert-danger-provisional" v-if="edad && edad>=20 && edad <60">
      Eres mayor de edad
    </p>
    <p class="alert-blue-provisional" v-if="edad && edad>=60">
      Eres de la tercera edad
    </p>
    <p class="alert-success-provisional" v-else>
      Eres menor de edad
    </p>
    <h2>DIRECTIVA ITERATIVA</h2>
    <ol>
      <li v-for="pelicula in peliculas" :key="pelicula">{{pelicula}}</li>
    </ol>

  </section>
</template>

<script>
export default {
  name: "MiComponente",
  data() {
    return {
      titulo: 'Mi Componente',
      subtitulo: "SUBTITULO DE MI COMPONENTE",
      nombre: '',
      edad:20,
      peliculas: ['HARRY POTTER', 'JUSTICE LEAGUE', 'LAS CRONICAS DE NARNIA']
    };
  }
};
</script>