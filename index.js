//Base functions

const milisseconds_to_seconds = (milisseconds) => milisseconds / 1000

const seconds_to_milisseconds = (seconds) => seconds * 1000

const seconds_to_minutes = (seconds) => seconds / 60

const minutes_to_seconds = (minutes) => minutes * 60

const minutes_to_hours = (minutes) => minutes / 60

const hours_to_minutes = (hours) => hours * 60

const hours_to_days = (hours) => hours / 24

const days_to_hours = (days) => days * 24

//Others conversion functions

const milisseconds_to_minutes = milisseconds => seconds_to_minutes(milisseconds_to_seconds(milisseconds))
const milisseconds_to_hours = milisseconds => minutes_to_hours(milisseconds_to_minutes(milisseconds))
const milisseconds_to_days = milisseconds => hours_to_days(milisseconds_to_hours(milisseconds))

const seconds_to_hours = seconds => minutes_to_hours(seconds_to_minutes(seconds))
const seconds_to_days = seconds => hours_to_days(seconds_to_hours(seconds))

const minutes_to_milisseconds = minutes => seconds_to_milisseconds(minutes_to_seconds(minutes))
const minutes_to_days = minutes => hours_to_days(minutes_to_hours(minutes))

const hours_to_milisseconds  = hours => minutes_to_milisseconds(hours_to_minutes(hours))
const hours_to_seconds  = hours => minutes_to_seconds(hours_to_minutes(hours))

const days_to_milisseconds = days => hours_to_milisseconds(days_to_hours(days))
const days_to_seconds = days => hours_to_seconds(days_to_hours(days))
const days_to_minutes = days => hours_to_minutes(days_to_hours(days)) 

module.exports = {
    //Milisseconds to
    milisseconds_to_seconds, milisseconds_to_minutes,
    milisseconds_to_hours, milisseconds_to_days,
    //Seconds to
    seconds_to_milisseconds, seconds_to_minutes,
    seconds_to_hours, seconds_to_days,
    //Minutes to
    minutes_to_milisseconds, minutes_to_seconds,
    minutes_to_hours, minutes_to_days,
    //Hours to
    hours_to_milisseconds, hours_to_seconds,
    hours_to_minutes, hours_to_days,
    //Days to
    days_to_milisseconds, days_to_seconds,
    days_to_minutes, days_to_hours
}