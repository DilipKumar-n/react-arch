import { useEffect, useState } from 'react'

export default function useFetch(url: string) {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const result = await response.json()
        setData(result)
      } catch (error) {
        setData(error)
      }
    }

    fetchData()
  }, [url])

  return { data }
}
