<template>
  <section class="p-16 bg-back flex items-center justify-center md:justify-around md:items-start">
    <!-- this div is for the contact section -->
    <div class="hidden md:block">
      <h2 class="font-bold text-main">Contact info</h2>
      <div class="mt-4">
        <!-- these ones contain the phone number stuff -->
        <div class="flex items-start">
          <div class="">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-6"
            >
              <g clip-path="url(#clip0_151_277)">
                <path
                  d="M1.30779 1.72978L8.62029 0.0422764C9.41483 -0.140536 10.2305 0.274308 10.5539 1.01962L13.9289 8.89462C14.2242 9.58368 14.0273 10.3923 13.4437 10.8634L9.18279 14.3509C11.714 19.7438 16.1367 24.2298 21.6422 26.8102L25.1297 22.5493C25.6078 21.9657 26.4094 21.7688 27.0984 22.0641L34.9734 25.4391C35.7258 25.7696 36.1406 26.5852 35.9578 27.3798L34.2703 34.6923C34.0945 35.4516 33.4195 36.0001 32.625 36.0001C14.618 36.0001 -2.67029e-05 21.4102 -2.67029e-05 3.37509C-2.67029e-05 2.58759 0.541382 1.90556 1.30779 1.72978Z"
                  fill="#EF4444"
                />
              </g>
              <defs>
                <clipPath id="clip0_151_277">
                  <rect
                    width="36"
                    height="36"
                    fill="white"
                    transform="matrix(-1 0 0 1 36 0)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="pl-4">
            <p class="text-light">Phone</p>
            <h3 class="font-bold">+237 676 60 29 92</h3>
          </div>
        </div>
        <div class="flex items-start mt-4">
          <div class="">
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-6"
            >
              <g clip-path="url(#clip0_151_280)">
                <path
                  d="M33.4688 0.225024L0.878932 19.0266C-0.393725 19.7578 -0.232006 21.5297 1.03362 22.0641L8.50784 25.2L28.7086 7.39689C29.0953 7.05236 29.6438 7.57971 29.3133 7.98049L12.375 28.6172V34.2773C12.375 35.9367 14.3789 36.5906 15.3633 35.3883L19.8282 29.9531L28.5891 33.6234C29.5875 34.0453 30.7266 33.4195 30.9094 32.3438L35.9719 1.96877C36.211 0.548461 34.6852 -0.4781 33.4688 0.225024Z"
                  fill="#EF4444"
                />
              </g>
              <defs>
                <clipPath id="clip0_151_280">
                  <rect width="36" height="36" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="pl-4">
            <p class="text-light">Email</p>
            <h3 class="font-bold">contact@chopnow.com</h3>
          </div>
        </div>
        <div class="flex items-start mt-4">
          <div class="">
            <svg
              width="36"
              height="48"
              viewBox="0 0 36 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="w-6"
            >
              <g clip-path="url(#clip0_151_282)">
                <path
                  d="M16.1501 47.0316C2.52844 27.2842 0 25.2575 0 18C0 8.05884 8.05884 0 18 0C27.9412 0 36 8.05884 36 18C36 25.2575 33.4716 27.2842 19.8499 47.0316C18.956 48.3229 17.0439 48.3228 16.1501 47.0316ZM18 25.5C22.1422 25.5 25.5 22.1422 25.5 18C25.5 13.8578 22.1422 10.5 18 10.5C13.8578 10.5 10.5 13.8578 10.5 18C10.5 22.1422 13.8578 25.5 18 25.5Z"
                  fill="#EF4444"
                />
              </g>
              <defs>
                <clipPath id="clip0_151_282">
                  <rect width="36" height="48" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div class="pl-4">
            <p class="text-light">Location</p>
            <h3 class="font-bold">Nkolmesseng - Yaounde</h3>
          </div>
        </div>
      </div>
    </div>

    <!-- this is the form element -->
    <div class="bg-white w-96 rounded-lg flex flex-col items-center pb-4  px-3 md:px-5">
        <h2 class="font-bold mt-4">Send us an E-mail</h2>
      <form action="" class=" flex flex-col w-full">
        <div class="mt-4 md:mt-6">
          <input class="w-full rounded-md bg-form px-4 py-1" type="text" placeholder="Name">
        </div>
        <div class="mt-4 md:mt-6">
          <input class="w-full rounded-md bg-form px-4 py-1" type="email" placeholder="Email">
        </div>

        <div class=" mt-4 md:mt-6">
          <textarea name="" id="" cols="" rows="5"
            class=" rounded-md bg-form w-full px-4 py-1"
            placeholder="Message"
          ></textarea>
        </div>
        <input class="mt-6 md:mt-8 w-full rounded-lg bg-main text-white px-3 py-1 hover:shadow-md transition-shadow duration-300 ease-in" type="button" value="Submit">
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contactsection",
};
</script>

<style>
</style>