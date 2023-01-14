import React from 'react'

type TScrollArrow = {
  color?: string
  isMobile?: boolean
}

const ScrollArrow = ({ color = '#fff', isMobile }: TScrollArrow) => {
  return isMobile ? (
    <svg
      width='21'
      height='8'
      viewBox='0 0 21 8'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M20.74 3.74L0.739951 3.74'
        stroke={color}
        strokeMiterlimit='10'
      />
      <path
        d='M3.73995 6.74L0.739951 3.7376L3.73995 0.739998'
        stroke={color}
        strokeMiterlimit='10'
      />
    </svg>
  ) : (
    <svg
      width='52'
      height='14'
      viewBox='0 0 52 14'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M51.1886 6.78016L2.2986 6.78016'
        stroke={color}
        strokeMiterlimit='10'
      />
      <path
        d='M7.86828 13.0302L1.61828 6.78015L7.86828 0.540155'
        stroke={color}
        strokeMiterlimit='10'
      />
    </svg>
  )
}

export default ScrollArrow
