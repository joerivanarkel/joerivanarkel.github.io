export interface ProjectMeta {
    /** ISO date used for sorting and display: YYYY-MM or YYYY-MM-DD */
    date: string
    /** Optional tiebreaker for projects with the same date (higher first) */
    order?: number
}
