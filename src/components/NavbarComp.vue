<template>
    <nav class="navbar navbar-expand-lg navbar-light ">
      <div class="container d-flex justify-content-between align-items-center">
        <!-- Left Links -->
        <ul class="navbar-nav">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              What we do 
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#"></a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
  
        <!-- Centered Logo -->
        <a class="navbar-brand mx-auto" href="#">
          <img src="https://zubayrlatief.github.io/Images-/logo/ALPHA.png" alt="Logo" class="navbar-logo" />
        </a>
  
        <!-- Right Links -->
        <ul class="navbar-nav">
        
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              OUR MISSION
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  
  <script lang="ts">
  export default {
    name: 'NavbarComp',
  };
  </script>
  
  <style scoped>
.navbar{
    background-color: #657179;
}
.navbar-logo {
  height: 60px; /* Adjust the size of the logo */
  display: block;
}

.navbar-brand {
  text-align: center;
  flex-shrink: 0; /* Prevent the logo from shrinking */
}

.nav-link{
    font-size: 0.8rem;
    color: black;
}
</style>

  