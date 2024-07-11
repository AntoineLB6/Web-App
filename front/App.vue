<template>
<div id="app">
  <nav class="navbar">
        <a href="./index.html">
            <img class="logo" src="assets/img/icon.png" alt="Logo">
        </a>
        <ul>
            <li>Orario Familia Myth</li>
            <li><router-link :to="{name: 'fichelist'}">Fiches</router-link></li>
            <li><router-link :to="{name: 'wiki'}">Wiki</router-link></li>
            <li><a href="./shop.html">Shop</a></li>
        </ul>
  </nav>
  <div id="main-content">
    <router-view></router-view>
  </div>
</div>
</template>

<script>
  export default { }
</script>