<template>
    <header id="header">
            <div class="center">
                 <!--LOGO-->
                <div id="logo">
                    <img src="../assets/logo.png" class="app-logo" alt="Lototipo" />
                    <span id="brand">
                        <strong>Curso </strong>VUE
                    </span>
                </div>
                <!-- MENU -->
                <nav id="menu">
                    <ul>
                        <li>
                            <router-link to="/home" active-class="active">Inicio</router-link>
                        </li>
                        <li>
                            <router-link to="/blog" active-class="active">Blog</router-link>
                        </li>
                        <li>
                            <router-link to="/formulario" active-class="active">Formulario</router-link>
                        </li>
                        <li>
                            <router-link :to="{name:'pagina', params: {id: 'ESTE ES EL VALOR DEL PARAMETRO'}}" active-class="active">Pagina 1</router-link>
                        </li>
                        <li>
                            <router-link to="/peliculas" active-class="active">Peliculas</router-link>
                        </li>
                    </ul>
                </nav>
                <!--LIMPIAR FLOTADOS-->
                <div class="clearfix"></div>
            </div>
        </header>
</template>

<script>
export default {
    name: 'HeaderComponent'
}
</script>