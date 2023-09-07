import React from 'react'

export default function HeaderSection(props) {
  return (
        <div className="col h-[50px]">
              <div className="text-center">
                <p className="text-[48px]">{props.name}</p>
              </div>
        </div>
  )
}
