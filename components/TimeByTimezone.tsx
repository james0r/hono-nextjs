'use client'

import React, { useEffect } from 'react'

const TimeByTimezone = ({ timezone }: { timezone: string }) => {
  let date = new Date()
  let options = { timeZone: timezone }
  let time = date.toLocaleString('en-US', options)

  const [currentTime, setCurrentTime] = React.useState(time)

  useEffect(() => {

    const intervalId = setInterval(() => {
      date = new Date()
      time = date.toLocaleString('en-US', options)
      setCurrentTime(time)
    }, 1000)

    return () => clearInterval(intervalId)
  }, [time])


  return (
    <div suppressHydrationWarning>
      {currentTime}
    </div>
  )
}

export default TimeByTimezone