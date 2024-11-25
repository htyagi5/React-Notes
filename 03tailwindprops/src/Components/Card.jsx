import React from 'react'

// function Card(props) {  //har function me props(object) ka access hota hai
    // console.log("props",props);
    // console.log(props.userName);//this way we can use access myObject elements
    function Card({userName ,btntext="visit me"}) { //this dereferencing technique
        
    return (
        <>
        <figure className="  p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="img1.jpeg" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        {userName}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
      <br />
      <button className='mt-2 inline-flex cursor-pointer  text-blue-400'>{btntext ||"VISIT  ME"}</button>  {/*this or button help if variable(btntext) pass nhi kiya to or condition will apply */}
    </figcaption>
  </div>
</figure>
</>
    )
}

export default Card
