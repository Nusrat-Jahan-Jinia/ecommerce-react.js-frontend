import React from 'react'

export default function Title({name , title}) {
    return (
        <div className="flex">
            <div className="flex my-2 items-center mx-auto">
                <h1 className="text-5xl text-center font-bold ">
                    {name}  <strong className="text-blue-500">{title}</strong>
                </h1>
            </div>
        </div>
    )
}
