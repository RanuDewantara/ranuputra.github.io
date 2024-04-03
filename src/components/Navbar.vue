<template>
  <header class="fixed flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-red-700 text-sm">
    <nav class="max-w-screen-2xl w-full mx-auto sm:flex sm:items-center sm:justify-between" aria-label="Global">
      <div class="flex items-center justify-between p-2 md:px-8">
        <a class="flex-none fill-current text-white py-0" href="#">
          <img src="../assets/img/RPD.png" class="h-10">
        </a>
        <button type="button"
          class="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-x-2 rounded-lg md:hidden"
          data-hs-collapse="#navbar-image-1" aria-controls="navbar-image-1" aria-label="Toggle navigation">
          <svg class="hs-collapse-open:hidden flex-shrink-0 size-6 text-white" xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" x2="21" y1="6" y2="6" />
            <line x1="3" x2="21" y1="12" y2="12" />
            <line x1="3" x2="21" y1="18" y2="18" />
          </svg>
          <svg class="hs-collapse-open:block hidden flex-shrink-0 size-6 text-white" xmlns="http://www.w3.org/2000/svg"
            width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
      <div id="navbar-image-1"
        class="hs-collapse hidden overflow-hidden transition-all px-0 duration-300 basis-full grow sm:block">
        <div
          class="flex flex-col font-semibold uppercase md:gap-5 sm:flex-row sm:items-center font-[Oxanium] sm:justify-end sm:mt-0 text-white">
          <a href="" class="p-3 md:w-28 text-center hover:bg-white hover:text-red-700">Home</a>
          <a href="" class="p-3 md:w-28 text-center hover:bg-white hover:text-red-700">About</a>
          <a href="" class="p-3 md:w-28 text-center hover:bg-white hover:text-red-700">Experience</a>
          <a href="" class="p-3 md:w-28 text-center hover:bg-white hover:text-red-700">Project</a>
          <a href="" class="p-3 md:w-28 text-center hover:bg-white hover:text-red-700">Contact</a>
        </div>
      </div>
    </nav>
  </header>
</template>