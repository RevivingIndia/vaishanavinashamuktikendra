import { useEffect, useState } from 'react'

export function usePageLoad() {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(t)
  }, [])
  return loading
}
