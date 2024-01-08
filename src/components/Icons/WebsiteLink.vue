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
        this.prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            this.prefersColorScheme = e.matches ? 'dark' : 'light';
        });
    },

    computed: {
        websiteLogo() {
            return this.prefersColorScheme === 'dark' ? websiteLogoWhite : websiteLogoBlack;
        }
    }
}
</script>

<style lang="scss" scoped src="./WebsiteLink.vue.scss"></style>