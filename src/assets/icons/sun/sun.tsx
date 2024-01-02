export const Sun = () => {
  return (
    <svg height={'24px'} strokeLinecap={'round'} width={'24px'}>
      <circle
        cx={'12'}
        cy={'12'}
        fill={'currentColor'}
        r={'6'}
        style={{ transformOrigin: 'center' }}
      ></circle>
      <g
        fill={'#ef5d39'}
        stroke={'currentColor'}
        strokeWidth={'2px'}
        style={{
          transformOrigin: 'center',
          transition: 'transform 0.5s cubic-bezier(0.5, 1.5, 0.75, 1.25)',
        }}
      >
        <line x1={'12'} x2={'12'} y1={'1'} y2={'3'}></line>
        <line x1={'12'} x2={'12'} y1={'21'} y2={'23'}></line>
        <line x1={'4.22'} x2={'5.64'} y1={'4.22'} y2={'5.64'}></line>
        <line x1={'18.36'} x2={'19.78'} y1={'18.36'} y2={'19.78'}></line>
        <line x1={'1'} x2={'3'} y1={'12'} y2={'12'}></line>
        <line x1={'21'} x2={'23'} y1={'12'} y2={'12'}></line>
        <line x1={'4.22'} x2={'5.64'} y1={'19.78'} y2={'18.36'}></line>
        <line x1={'18.36'} x2={'19.78'} y1={'5.64'} y2={'4.22'}></line>
      </g>
    </svg>
  )
}
