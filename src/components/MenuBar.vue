<template>
    <div class="menu">
        <nav>
            <ul>
                <li><a href="#aboutme">About Me</a></li>
                <li><a href="#projects">Projects</a></li>
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
    padding-top: 1.5rem;
    width: 100%;
}

nav {
    ul {
        list-style: none;
        padding: 0;
        display: block;

        li {
            &::before {
                content: '-';
                padding-right: 5px;
            }

            a {
                color: $light-color;
                text-decoration: none;
                font-size: 1.3rem;
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
