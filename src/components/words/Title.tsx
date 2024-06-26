import React from 'react'

interface Props {
    title: string
    offsetY: number
    vel: number
}

const Title = ({title,offsetY,vel}: Props) => {
  return  <div
  className="flex items-center gap-2"
  style={{ transform: `translateY(${offsetY * 0.2}px)` }}
>
  <div
    className="w-8 h-2 border-b-2 border-b-yellow-200"
    style={{ transform: `translateY(${offsetY * 0.2}px)` }}
  ></div>
  <p
    className="text-yellow-200"
    style={{ transform: `translateY(${offsetY * 0.2}px)` }}
  >
    {title}
  </p>
</div>

}

export default Title