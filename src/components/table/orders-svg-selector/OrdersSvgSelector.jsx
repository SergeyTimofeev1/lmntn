import React from 'react'

const OrdersSvgSelector = ({ id }) => {
  switch (id) {
    case 'completed':
      return (
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.2 6.09998L6.42704 10.9L4.80005 9.26379"
            stroke="#333333"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'block':
      return (
        <svg
          width="12"
          height="15"
          viewBox="0 0 12 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.39995 5.36664V4.75712C2.39995 2.73118 4.00567 1.09998 5.99995 1.09998C7.99424 1.09998 9.59995 2.73118 9.59995 4.75712V5.36664M2.39995 5.36664C1.73995 5.36664 1.19995 5.91521 1.19995 6.58569V12.6809C1.19995 13.3514 1.73995 13.9 2.39995 13.9H9.59995C10.26 13.9 10.8 13.3514 10.8 12.6809V6.58569C10.8 5.91521 10.26 5.36664 9.59995 5.36664M2.39995 5.36664H9.59995M5.99995 10.3V8.69997"
            stroke="#FF7E7E"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'canceled':
      return (
        <svg
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.6666 1.83332L1.33325 11.1666M10.6666 11.1666L1.33325 1.83331"
            stroke="#333333"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )
    case 'pending':
      return (
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 4.7V1.5M8 15.5V12.3M11.8 8.5H15M1 8.5H4.2M10.6873 5.81313L12.95 3.55039M3.04976 13.4499L5.3125 11.1871M10.6873 11.1869L12.95 13.4496M3.04976 3.55015L5.3125 5.81289"
            stroke="#333333"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'pending-color':
      return (
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 4.7V1.5M8 15.5V12.3M11.8 8.5H15M1 8.5H4.2M10.6873 5.81313L12.95 3.55039M3.04976 13.4499L5.3125 11.1871M10.6873 11.1869L12.95 13.4496M3.04976 3.55015L5.3125 5.81289"
            stroke="#FFBE40"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'completed-color':
      return (
        <svg
          width="10"
          height="7"
          viewBox="0 0 10 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.20005 1.09998L3.42704 5.89998L1.80005 4.26379"
            stroke="#54D561"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )
    case 'canceled-color':
      return (
        <svg
          width="12"
          height="13"
          viewBox="0 0 12 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.6667 1.83332L1.33337 11.1666M10.6667 11.1666L1.33337 1.83331"
            stroke="#FF7E7E"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      )

    default:
      break
  }
}

export default OrdersSvgSelector
