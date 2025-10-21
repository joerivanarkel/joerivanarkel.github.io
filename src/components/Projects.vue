<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import GithubLink from '@/components/Links/GithubLink.vue'
import WebsiteLink from '@/components/Links/WebsiteLink.vue'
import Badge from '@/components/UI/Badge.vue'
import LanguageBadge from './UI/LanguageBadge.vue'
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

        <template #badges>
            <LanguageBadge label="Vue" color="#42b883" />
            <LanguageBadge label="TypeScript" color="#3178c6" />
            <LanguageBadge label="SCSS" color="#cc6699" />
            <Badge label="Vite" />
            <Badge label="GitHub Pages" />
        </template>

        <template #links>
            <GithubLink link="https://github.com/joerivanarkel/joerivanarkel.github.io"></GithubLink>
            <WebsiteLink link="https://joerivanarkel.github.io/"></WebsiteLink>
        </template>
    </ProjectCard>

    <ProjectCard 
        title="Vanarkel.net"
        underTitle="Front-end"
        date="December 2023"
    >
        <p>
            Vanarkel.net is a Lit Element application that uses Vite as a
            bundler. It is deployed on Azure, using a custom GitHub
            Action that takes the <code>dist</code> folder and pushes it to the
            <code>gh-pages</code> branch. In the project, I use SCSS for
            styling. 
        </p>

        <p>
            It is a personal website that I am working on in my free time. It
            will be used to showcase my projects and to blog about my
            experiences.
        </p>

        <template #badges>
            <LanguageBadge label="TypeScript" color="#3178c6" />
            <LanguageBadge label="SCSS" color="#cc6699" />
            <Badge label="Lit" />
            <Badge label="Vite" />
            <Badge label="Azure Static Web Apps" />
        </template>

        <template #links>
            <WebsiteLink link="https://www.vanarkel.net/"></WebsiteLink>
        </template>
    </ProjectCard>

    <ProjectCard
        title="Packages"
        underTitle="NuGet packages & tooling"
        date="August 2023"
    >
        <p>
            A mono-repo of reusable .NET packages and tooling I maintain. It
            contains libraries published as NuGet packages used across several
            of my projects, plus build-time helpers and CI configurations.
        </p>

        <template #badges>
            <LanguageBadge label="C#" color="#239120" />
            <Badge label=".NET" />
            <Badge label="NuGet" />
        </template>

        <template #links>
            <GithubLink link="https://github.com/joerivanarkel/joerivanarkel.Packages"></GithubLink>
        </template>
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

        <template #badges>
            <LanguageBadge label="C#" color="#239120" />
            <LanguageBadge label="F#" color="#b845fc" />
            <LanguageBadge label="TypeScript" color="#3178c6" />
        </template>

        <template #links>
            <GithubLink link="https://github.com/piratelang/pirate"></GithubLink>
            <GithubLink link="https://github.com/piratelang/vscode"></GithubLink>
        </template>
    </ProjectCard>

    <ProjectCard 
        title="MineSweeper"
        underTitle="Game"
        date="August 2022"
    >
        <p>
            A classic MineSweeper game implementation built with C# and Blazor. 
            Features a clean UI, customizable difficulty levels, and timer functionality.
            This project was created to practice Blazor development and game logic implementation.
        </p>

        <template #badges>
            <LanguageBadge label="C#" color="#239120" />
            <Badge label="Blazor" />
            <Badge label=".NET" />
            <Badge label="GitHub Pages" />
        </template>

        <template #links>
            <GithubLink link="https://github.com/joerivanarkel/MineSweeper"></GithubLink>
            <WebsiteLink link="https://joerivanarkel.github.io/MineSweeper/"></WebsiteLink>
        </template>
    </ProjectCard>
</template>