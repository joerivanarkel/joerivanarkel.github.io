export interface ProjectImage {
    src: string
    alt: string
    caption?: string
}

export interface ProjectMeta {
    /** ISO date used for sorting and display: YYYY-MM or YYYY-MM-DD */
    date: string
    /** Optional tiebreaker for projects with the same date (higher first) */
    order?: number
    /** Optional screenshots shown in the project popup */
    images?: ProjectImage[]
}
