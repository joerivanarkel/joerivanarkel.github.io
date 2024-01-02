<template>
    <div class="menu">
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </div>
</template>

<style lang="scss">
@import '../styles/variables/_colors.scss';

.menu {
  flex: 2;
  padding-left: 3rem;
  padding-right: 3rem;
}

nav {
  ul {
    list-style: none;
    padding: 0;
    display: block;
    li {
      a {
        color: $light-color;
        text-decoration: none;
        font-size: 1em;
        font-weight: 500;
        transition: color 0.3s ease;
        &:hover {
          color: $primary-color;
        }
      }
    }
  }
}
</style>
