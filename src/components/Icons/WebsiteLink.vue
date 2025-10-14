<template>
    <a :href="link" target="_blank" rel="noopener noreferrer">
        <img :src="websiteLogo" alt="Website Link" />
    </a>
</template>

<script lang="ts">
import websiteLogoWhite from '../../assets/website-logo-white.svg';
import websiteLogoBlack from '../../assets/website-logo.svg';

export default {
    name: 'WebsiteLink',
    props: {
        link: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            prefersColorScheme: 'dark'
        }
    },
    mounted() {
        this.updateTheme();
        // Listen for theme changes
        window.addEventListener('storage', this.updateTheme);
        // Also check for data-theme attribute changes
        const observer = new MutationObserver(this.updateTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    },
    methods: {
        updateTheme() {
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                this.prefersColorScheme = savedTheme;
            } else {
                this.prefersColorScheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
            }
        }
    },

    computed: {
        websiteLogo() {
            return this.prefersColorScheme === 'dark' ? websiteLogoWhite : websiteLogoBlack;
        }
    }
}
</script>

<style lang="scss" scoped src="./WebsiteLink.vue.scss"></style>