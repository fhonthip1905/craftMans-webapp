

const bgMap = {
  yellow: 'rounded-md px-3 py-1.5 text-amber-500 font-semibold bg-neutral-700 hover:outline outline-offset-0 outline-amber-500',
  green: 'bg-green-500 hover:bg-green-600',
  gray: 'bg-gray-200 hover:bg-gray-300',
  stone: 'bg-stone-800',
  transparent: 'bg-transparent'
}

const colorMap = {
  white: 'text-white',
  black: 'text-black',
  yellowtext: 'text-amber-500'
}

const widthMap = {
  full: 'w-full',
  40: 'w-40',
  30: 'w-30',
  20: 'w-20 p-1'

}
const outlineMap = {
  yellow: 'outline outline-amber-500 rounded-lg '
}
export default function ButtonOutline({
  children, 
  bg = 'yellow', 
  color = 'white', 
  wiidth, 
  onClick ,
  outline


}){
  return <button 
  className={`${bgMap[bg]} ${colorMap[color]} ${widthMap[wiidth]} ${outlineMap[outline]} `}
  onClick={onClick}
  >{children}</button>
}
