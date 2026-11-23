import type { Component } from 'vue'
import type { ProjectMeta } from '@/types/project'

interface ProjectModule {
    default: Component
    meta?: ProjectMeta
}

export interface ProjectEntry {
    /** Anchor id, derived from the file name (e.g. VanarkelNet.vue -> vanarkel-net) */
    id: string
    path: string
    component: Component
    meta: ProjectMeta
}

// Every .vue file in ./components/projects is picked up automatically.
// Files starting with "_" are ignored (e.g. _Template.vue).
const modules = import.meta.glob<ProjectModule>(
    ['../components/projects/*.vue', '!../components/projects/_*.vue'],
    { eager: true }
)

function toId(path: string): string {
    const name = path.split('/').pop()!.replace(/\.vue$/, '')
    return name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

/** All projects, newest first (ties broken by meta.order, higher first). */
export const projects: ProjectEntry[] = Object.entries(modules)
    .flatMap(([path, mod]) => {
        if (!mod.meta) {
            console.warn(`[projects] ${path} does not export "meta"; skipping it.`)
            return []
        }
        return [{ id: toId(path), path, component: mod.default, meta: mod.meta }]
    })
    .sort((a, b) =>
        b.meta.date.localeCompare(a.meta.date) ||
        (b.meta.order ?? 0) - (a.meta.order ?? 0)
    )
