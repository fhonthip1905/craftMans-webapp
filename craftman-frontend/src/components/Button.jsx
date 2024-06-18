

const bgMap = {
    yellow: 'bg-amber-500',
    green: 'bg-green-500 hover:bg-green-600',
    gray: 'bg-gray-200 hover:bg-gray-300',
    stone: 'bg-stone-800',
    transparent: 'bg-transparent'
  }
  
  const colorMap = {
    white: 'text-white',
    black: 'text-black',
    yellow: 'text-amber-500'
  }
  
  const textMap = {
    bold: 'font-bold'
  }

  const widthMap = {
    full: 'w-full',
    40: 'w-40',
    30: 'w-30',
    20: 'w-20 p-1'
  
  }

  const roundedMap = {
    lg: 'rounded-lg',
    md: 'rounded-md',
  }

  const outlineMap = {
    yellow: 'outline outline-amber-500 rounded-lg '
  }

  const padMap = {
    1: 'px-4 py-1',
    2: 'px-4 py-2'
  }

  const transitionMap = {
    color: 'transition-colors'
  }
  
  const durationMap = {
    300: 'duration-300'
  }

  const easeMap = {
    in: 'ease-in-out'
  }

  const hoverMap = {
    1: 'hover:bg-transparent hover:text-amber-500 hover:border hover:border-amber-500',
    2: 'hover:bg-amber-500 hover:text-white'
  }


  export default function ButtonOutline({
    children, 
    bg = 'yellow', 
    color = 'white', 
    rounded,
    wiidth, 
    onClick ,
    outline,
    text,
    hover,
    ease,
    duration,
    transition,
    p
  
  
  }){
    return <button 
    className={`
    ${bgMap[bg]} 
    ${colorMap[color]} 
    ${widthMap[wiidth]} 
    ${outlineMap[outline]} 
    ${textMap[text]} 
    ${roundedMap[rounded]} 
    ${hoverMap[hover]}
    ${easeMap[ease]}
    ${durationMap[duration]}
    ${transitionMap[transition]}
    ${padMap[p]}
    `}
    onClick={onClick}
    >{children}</button>;
  }
  

  