<template src="./CreateArticle.html"></template>

<script>
import Sidebar from "./Sidebar.vue";
import axios from "axios";
import Global from "../Global";
import Article from "../models/Article";
import { required } from "vuelidate/lib/validators";
import swal from "sweetalert";

export default {
  name: "CreateArticle",
  components: {
    Sidebar
  },
  data() {
    return {
      url: Global.url,
      article: new Article("", "", null, ""),
      submited: false,
      file: ""
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
    //console.log(this.article);
  },
  methods: {
    fileChange() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },
    save() {
      this.submited = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      } else {
        axios
          .post(this.url + "save", this.article)
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
                        "Articulo creado",
                        "El articulo se ha creado correctamente",
                        "success"
                      );

                      this.article = response.data.article;
                      this.$router.push("/blog");
                    } else {
                      //MOSTRAR ALERTA DEL ERROR
                      swal(
                        "Carga Fallida",
                        "El articulo no se ha guardado correctamente",
                        "error"
                      );
                    }
                  })
                  .catch(error => {
                    console.log(error);
                  });
              } else {
                this.article = response.data.article;
                this.$router.push("/blog");
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