<template>
    <div>
        <b-navbar type="dark" variant="dark">
            <b-navbar-nav>
                <b-nav-item to="/"><img alt="Vue logo" src="../../assets/logo.png" width="50" /></b-nav-item>
                <b-nav-item to="/">Inicio</b-nav-item>
                <b-nav-item to="/productos">Productos</b-nav-item>
            </b-navbar-nav>
        </b-navbar>
    </div>
</template>

<style>
nav {
    background: #2c3e50;
    color: #ffffff;
}
nav ul{
    align-items: center;
}
nav a {
    color: #ffffff;
}
a.router-link-exact-active {
    color: #42b983!important;
}
</style>