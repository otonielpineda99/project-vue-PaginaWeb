<template>
  <section>
    <div id="articles-list" v-if="articles && articles.length >= 1">
      <article
        class="article-item"
        v-for="article in articles"
        :key="article._id"
      >
        <div class="image-wrap">
          <img
            :src="url + 'get-image/' + article.image"
            :alt="article.title"
            v-if="article.image"
          />
          <img
            src="../assets/images/default.jpg"
            :alt="article.title"
            v-if="!article.image"
          />
        </div>

        <h2>
          <router-link :to="{ name: 'article', params: { id: article._id } }">
            {{ article.title }}
          </router-link>
        </h2>
        <span class="date">{{ article.date | moment("from", "now") }}</span>
        <router-link :to="{ name: 'article', params: { id: article._id } }">>Leer mas</router-link>
        <div class="clearfix"></div>
      </article>
    </div>
    <div v-else-if="articles && article.length < 1">
      No hay articulos para mostrar
    </div>
    <div v-else>
      Cargando...
    </div>
  </section>
</template>
<script>
import Global from "../Global";
export default {
  name: "Articles",
  props: ["articles"],
  data() {
    return {
      url: Global.url
    };
  }
};
</script>