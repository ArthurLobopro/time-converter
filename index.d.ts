declare module "time-converter" {

    export const milisseconds_to_seconds: (milisseconds: number) => number
    export const milisseconds_to_minutes: (milisseconds: number) => number
    export const milisseconds_to_hours: (milisseconds: number) => number
    export const milisseconds_to_days: (milisseconds: number) => number

    export const seconds_to_milisseconds: (seconds: number) => number
    export const seconds_to_minutes: (seconds: number) => number
    export const seconds_to_hours: (seconds: number) => number
    export const seconds_to_days: (seconds: number) => number

    export const minutes_to_seconds: (minutes: number) => number
    export const minutes_to_hours: (minutes: number) => number
    export const minutes_to_milisseconds: (minutes: number) => number
    export const minutes_to_days: (minutes: number) => number

    export const hours_to_minutes: (hours: number) => number
    export const hours_to_days: (hours: number) => number
    export const hours_to_milisseconds: (hours: number) => number
    export const hours_to_seconds: (hours: number) => number

    export const days_to_hours: (days: number) => number
    export const days_to_milisseconds: (days: number) => number
    export const days_to_seconds: (days: number) => number
    export const days_to_minutes: (days: number) => number

}