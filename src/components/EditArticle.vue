<template src="./CreateArticle.html"></template>

<script>
import Sidebar from "./Sidebar.vue";
import axios from "axios";
import Global from "../Global";
import Article from "../models/Article";
import { required } from "vuelidate/lib/validators";
import swal from "sweetalert";

export default {
  name: "EditArticle",
  components: {
    Sidebar
  },
  data() {
    return {
      url: Global.url,
      article: new Article("", "", null, ""),
      submited: false,
      file: "",
      isEdit: true
    };
  },
  validations: {
    article: {
      title: {
        required
      },
      content: {
        required
      }
    }
  },
  mounted() {
    var articleId = this.$route.params.id;
    this.getArticle(articleId);
  },
  methods: {
    fileChange() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },
    getArticle(articleId){
      axios.get(this.url+'article/'+articleId).then(res => {
        if(res.data.status == 'success'){
          this.article = res.data.article;
        }
      });
    },
    save() {
      this.submited = true;
      var articleId = this.$route.params.id;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      } else {
        axios
          .put(this.url + "article/"+articleId, this.article)
          .then(response => {
            if (response.data.status == "success") {
              //SUBIDA DEL ARCHIVO
              if (
                this.file != null &&
                this.file != undefined &&
                this.file != ""
              ) {
                const formData = new FormData();
                formData.append("file0", this.file, this.file.name);
                var articleId = response.data.article._id;
                axios
                  .post(this.url + "upload-image/" + articleId, formData)
                  .then(response => {
                    if (response.data.article) {
                      swal(
                        "Articulo editado",
                        "El articulo se ha editado correctamente",
                        "success"
                      );

                      this.article = response.data.article;
                      this.$router.push("/articulo/"+this.article._id);
                    } else {
                      //MOSTRAR ALERTA DEL ERROR
                      swal(
                        "Articulo no editado",
                        "El articulo no se ha editado correctamente",
                        "error"
                      );
                    }
                  })
                  .catch(error => {
                    console.log(error);
                  });
              } else {
                this.article = response.data.article;
                this.$router.push("/articulo/"+this.article._id);
              }
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
};
</script>