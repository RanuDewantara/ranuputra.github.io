<template>
  <header
    class="fixed flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-red-800 text-sm">
    <nav class="relative max-w-screen-lg w-full py-2 mx-auto sm:flex items-center sm:justify-between lg:px-8"
      aria-label="Global">
      <div class="flex items-center justify-between">
        <a class="flex-none text-xl font-semibold" href="#" aria-label="Brand">
          <img src="../assets/img/RPD.png" class="w-24 px-3 mx-auto">
        </a>
        <div class="sm:hidden px-3">
          <button type="button"
            class="hs-collapse-toggle flex justify-center items-center text-sm font-semibold bg-red-900 rounded-md disabled:opacity-50 disabled:pointer-events-none"
            data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation"
            aria-label="Toggle navigation">
            <svg class="hs-collapse-open:hidden" width="34" height="34" fill="white" viewBox="0 0 16 16">
              <path fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
            </svg>
            <svg class="hs-collapse-open:block flex-shrink-0 hidden" width="34" height="34" fill="white"
              viewBox="0 0 16 16">
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
        </div>
      </div>
      <div id="navbar-collapse-with-animation"
        class="font-[Oxanium] font-semibold text-white uppercase max-w-screen-md hs-collapse hidden overflow-hidden transition-all duration-300 sm:block md:px-2">
        <div class="flex flex-col gap-x-0 items-center text-center justify-between md:flex-row md:gap-y-0 md:mt-0">
          <a class="w-full py-3 hover:bg-white hover:text-red-700 md:w-[100px]" href="#">Home</a>
          <a class="w-full py-3 hover:bg-white hover:text-red-700 md:w-[100px]" href="#">About</a>
          <a class="w-full py-3 hover:bg-white hover:text-red-700 md:w-[100px]" href="#">Experience</a>
          <a class="w-full py-3 hover:bg-white hover:text-red-700 md:w-[100px]" href="#">Project</a>
          <a class="w-full py-3 hover:bg-white hover:text-red-700 md:w-[100px]" href="#">Contact</a>
        </div>
      </div>
    </nav>
  </header>
</template>