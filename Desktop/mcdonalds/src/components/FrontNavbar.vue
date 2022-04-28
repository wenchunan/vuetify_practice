<template>
<nav class="navbar navbar-expand-lg navbar-light navbar-bg mb-3 px-9">
  <div class="container">
    <a class="navbar-brand" href="#">
        <img src="https://www.mcdonalds.com/etc/designs/mcd/tw/zh-tw/_jcr_content/logo/image.img.jpg/1649654364979.jpg" alt="麥當勞logo">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            別具滋味
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">企業永續</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">數位便利</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">現正推出</a>
        </li>
         <li class="nav-item">
          <a class="nav-link" href="#">尋找餐廳</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>
<style>
.navbar-bg {
  background-color: #fff;
  box-shadow: 0px 5px 10px rgba(#000, 0.1);
}
</style>
