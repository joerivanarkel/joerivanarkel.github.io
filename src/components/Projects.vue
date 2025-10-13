<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'
import GithubLink from './Icons/GithubLink.vue'
import WebsiteLink from './Icons/WebsiteLink.vue'
</script>

<template>
    <h1 id="projects">Projects</h1>

    <ProjectCard 
        title="Portfolio"
        underTitle="Front-end"
        date="January 2024"
    >
        <p>
            The portfolio you are currently looking at. It is a Vue 3 application
            that uses Vite as a bundler. It is deployed on GitHub Pages, using a
            GitHub Action that takes the <code>dist</code> folder and
            pushes it to the <code>gh-pages</code> branch.
        </p>

        <GithubLink link="https://github.com/joerivanarkel/joerivanarkel.github.io"></GithubLink>
        <WebsiteLink link="https://joerivanarkel.github.io/"></WebsiteLink>
    </ProjectCard>

    <ProjectCard 
        title="Vanarkel.net"
        underTitle="Front-end"
        date="December 2023"
    >
        <p>
            Vanarkel.net is a Lit Element application that uses Vite as a
            bundler. It is deployed on GitHub Pages, using a custom GitHub
            Action that takes the <code>dist</code> folder and pushes it to the
            <code>gh-pages</code> branch. In the project, I use SCSS for
            styling. 
        </p>

        <p>
            It is a personal website that I am working on in my free time. It
            will be used to showcase my projects and to blog about my
            experiences.
        </p>

        <WebsiteLink link="https://www.vanarkel.net/"></WebsiteLink>
    </ProjectCard>

    <ProjectCard 
        title="Piratelang 1"
        underTitle="Back-end"
        date="September 2022"
    >
        <p>
            Pirate is a toy programming language that is written in C# and F#. It is a simple language that was created to learn more about programming languages and interpreters.
        </p>
        <p>
            The lexer and parser are written in F#, while the interpreter is written in C#. The interpreter is a simple tree walker that walks through the AST and executes the code.
        </p>
        <p>
            For VSCode, I have written a syntax highlighter. This is written in TypeScript and is deployed as a VSIX package.
        </p>

        <GithubLink link="https://github.com/piratelang/pirate"></GithubLink>
        <GithubLink link="https://github/com/piratelang/vscode"></GithubLink>
    </ProjectCard>
</template>