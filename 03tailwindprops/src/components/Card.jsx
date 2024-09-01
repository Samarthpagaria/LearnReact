import React from 'react'

export function Card(props) {
    

    return (
        <>
            <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img
          className="w-30 h-30 rounded-2xl mx-auto "
          src="https://images.unsplash.com/photo-1724709972210-4beb408de580?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
          alt=""
          width="300"
          height="512"
        />
        <div className="pt-6 text-center space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I&apos;ve seen scale
              on large teams. It&rsquo;s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
            {props.username}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure> 
        </>
    )
}
export default Card