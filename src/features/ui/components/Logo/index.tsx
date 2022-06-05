import type { ComponentProps } from 'react'
import React from 'react'

type Props = ComponentProps<'svg'>

export function Logo(props: Props) {
  return (
    <svg
      viewBox="0 0 427 285"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M213.5 260.203C320.25 195.152 286.891 63.9388 213.5 24.4636C230.736 -3.33592 403.092 -28.9114 422.552 142.333C408.652 307.462 240.744 289.671 213.5 260.203Z"
        fill="url(#paint0_linear_2_71)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M204.893 260.227C186.234 270.149 164.94 275.771 142.333 275.771C68.6378 275.771 8.89583 216.029 8.89583 142.333C8.89583 68.6378 68.6378 8.89583 142.333 8.89583C164.94 8.89583 186.234 14.5177 204.893 24.4396C167.141 50.0346 142.333 93.2869 142.333 142.333C142.333 191.38 167.141 234.632 204.893 260.227ZM213.5 255.229C176.081 231.592 151.229 189.865 151.229 142.333C151.229 94.8019 176.081 53.0749 213.5 29.4374C250.919 53.0749 275.771 94.8019 275.771 142.333C275.771 189.865 250.919 231.592 213.5 255.229ZM213.5 265.625C192.565 277.735 168.258 284.667 142.333 284.667C63.7248 284.667 0 220.942 0 142.333C0 63.7248 63.7248 0 142.333 0C168.258 0 192.565 6.93124 213.5 19.0417C234.435 6.93124 258.742 0 284.667 0C363.275 0 427 63.7248 427 142.333C427 220.942 363.275 284.667 284.667 284.667C258.742 284.667 234.435 277.735 213.5 265.625ZM222.107 24.4395C240.766 14.5177 262.06 8.89583 284.667 8.89583C358.362 8.89583 418.104 68.6378 418.104 142.333C418.104 216.029 358.362 275.771 284.667 275.771C262.06 275.771 240.766 270.149 222.107 260.227C259.859 234.632 284.667 191.38 284.667 142.333C284.667 93.2869 259.859 50.0346 222.107 24.4395Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2_71"
          x1="421.876"
          y1="70.7008"
          x2="205.263"
          y2="242.87"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFFC44" />
          <stop offset="0.489583" stopColor="#AA65FF" />
          <stop offset="1" stopColor="#84DBFF" />
        </linearGradient>
      </defs>
    </svg>
  )
}
