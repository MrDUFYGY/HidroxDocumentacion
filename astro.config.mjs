// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections'

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

import svelte from '@astrojs/svelte';



// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'HidroxDocumentacion',
        expressiveCode: {
            plugins: [pluginCollapsibleSections()],
            defaultProps: {
                // Change the default style of collapsible sections
                collapseStyle: 'collapsible-auto',
              },
          },        
        defaultLocale: 'root', // opcional
        locales: {
            root: {
                label: 'Español',
                lang: 'es', // lang es obligatorio para los locales raíz
              },
          },
        customCss: [
            './src/tailwind.css',
        ],
        social: {
            github: 'https://github.com/MrDUFYGY',
        },
        sidebar: [
            {
                label: 'Guias',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Inicia aqui - Introducción', slug: 'guides/0-inicio' },
                    { label: '1. Desarrollo', slug: 'guides/1-desarrollo' },
                    { label: '2. Stack y Tecnologías', slug: 'guides/2-stack' },
                    { label: '3. Objetivos', slug: 'guides/3-proposito' },
                ],
            },
            {
                label: 'Instalación de Tecnologías',
                autogenerate: { directory: 'instalaciones' },
            },
            {
                label: 'Documentación',
                autogenerate: { directory: 'documentacion' },
            },
            // {
            //     label: 'Reference',
            //     autogenerate: { directory: 'reference' },
            // },
            {
                label: 'Componentes',
                autogenerate: { directory: 'componentes-pageGroup' },
            }
        ],
        }), tailwind({
        applyBaseStyles: false,
    }), react(), svelte(),

],
});