// If you wanna format the time for the Database
export const formatTimeForDatabase = (hours: number, minutes: number) => {
	const time = new Date()
	time.setHours(hours)
	time.setMinutes(minutes)
	const formattedTime = time.getTime()
	return formattedTime
}