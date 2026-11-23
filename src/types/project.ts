export interface ProjectImage {
    src: string
    alt: string
    caption?: string
}

export interface ProjectMeta {
    /** Project name: shown on the card, in the popup and in the sidebar TOC */
    title: string
    /** ISO date used for sorting and display: YYYY-MM or YYYY-MM-DD */
    date: string
    /** Optional tiebreaker for projects with the same date (higher first) */
    order?: number
    /** Optional screenshots shown in the project popup */
    images?: ProjectImage[]
}
