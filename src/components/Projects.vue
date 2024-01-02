<script setup lang="ts">
import ProjectCard from './ProjectCard.vue'
import GithubLink from './Icons/GithubLink.vue'
import WebsiteLink from './Icons/WebsiteLink.vue'
</script>

<template>
    <h1 id="projects">Projects</h1>

    <div class="card">
        <h2>Project 1</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quae voluptates voluptatem quod
            voluptatibus quos doloribus quidem voluptate. Quisquam voluptatum,
            quibusdam, quia, quae voluptates voluptatem quod voluptatibus quos
            doloribus quidem voluptate.
        </p>
    </div>

    <ProjectCard 
        title="Athena" 
        underTitle="Front-end"
    >
        <p>
            Athena is a C#/Blazor WASM application, which is a wiki for the
            fictional world of Athena. It is a personal project that I am
            working on in my free time.
        </p>
        <p>
            Athena uses SASS for styling. This is useable through Node.js, which
            has been added tot he project as a dependency. There is an MSBuild
            task that compiles the SASS files to CSS files, which are then
            included in the application.
        </p>
        <p>
            It is deployed on GitHub Pages, using a custom GitHub Action that
            builds the application and deploys it to GitHub Pages.

        </p>

        <GithubLink link=""></GithubLink>
        <WebsiteLink link=""></WebsiteLink>
    </ProjectCard>
</template>