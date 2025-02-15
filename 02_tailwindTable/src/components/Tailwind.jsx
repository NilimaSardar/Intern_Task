import React, { useState } from 'react'

const Tailwind = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      document.documentElement.classList.toggle('dark');
    };
  return (
    <main class="p-5">
    <h1 class="text-center text-lg text-blue-500">hello world</h1>

    <div class="my-4 h-10 w-full rounded-md border-2 border-violet-600 bg-violet-200 p-2">
        <p class="text-center font-mono font-extrabold">A div</p>
    </div>

    {/* <!-- Layout --> */}
    <div class="fixed top-0 h-10 w-10 bg-red-500"></div>

    <div class="flex justify-between">
        <div class="h-16 w-16 rounded-full bg-blue-500"></div>
        <div class="h-16 w-16 rounded-full bg-blue-500"></div>
        <div class="h-16 w-16 rounded-full bg-blue-500"></div>
    </div>
    <div class="mt-3 grid grid-cols-3 gap-2">
        <div class="h-12 bg-violet-500"></div>
        <div class="h-12 bg-violet-500"></div>
        <div class="h-12 bg-violet-500"></div>
    </div>
    <div class="hidden md:block">
        <p>I will appear for device resolution &gt; 768px</p>
    </div>
    <div class="hidden max-md:block">
        <p>I will appear for device resolution &lt; 768px</p>
    </div>

    <button class="special-button">Click Me</button>

    <ul class="my-2 space-y-2">
        <li class="bg-white p-2 first:bg-yellow-100">item</li>
        <li class="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">item</li>
        <li class="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">item</li>
        <li class="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">item</li>
        <li class="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">item</li>
        <li class="bg-white p-2 first:bg-yellow-100 odd:bg-blue-200 even:bg-green-200">item</li>
    </ul>

    {/* <!-- Theme dark: --> */}
    <div class="card">
        <h3 class="text-base font-medium tracking-tight text-slate-900 dark:text-white">This is a text element</h3>
        <p class="mt-2 text-sm text-slate-500 dark:text-blue-100">This is an even longer p tag element</p>

        <button id="toggleDark" class="mt-8 rounded-md bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900" onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>


    <p className='text-2xl text-[#973F29] bg-stone-100 p-[16px]'>Chestnut Color</p>
    </main>

  )
}

export default Tailwind