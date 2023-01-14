import React, { useEffect, useState } from 'react'

export type TUseMarketData = {
  url: string
  locale: string
}

export type TUseMarketError = {
  message: string
}

export function useMarketData<T>(
  url: string,
  locale: string,
  callback?: () => void
): T {
  const [marketData, setMarketData] = useState<T>({} as T)
  const getData = async () => {
    try {
      const values = await fetch(url)
      const responseData = await values.json()
      if (responseData?.success === false) {
        return
      }
      setMarketData(responseData?.data?.data?.ContentNode?.content)
    } catch (err) {
      const error = err as TUseMarketError
      throw new Error(error.message)
    } finally {
      callback && callback()
    }
  }
  useEffect(() => {
    getData()
  }, [locale])
  return marketData
}