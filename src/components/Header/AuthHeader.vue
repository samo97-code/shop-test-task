<template>
 <div class="sticky top-0 h-[60px] w-full bg-[#676b70] flex items-center z-[1]">
   <div class="main-container flex items-center justify-between">
     <img src="src/assets/images/logo.png" alt="logo" class="w-[40px] h-[40px]">

     <div class="flex gap-x-4">
       <router-link to="/">
         <span class="text-white font-semibold">Login</span>
       </router-link>

       <router-link to="/register">
         <span class="text-white font-semibold">Register</span>
       </router-link>
     </div>
   </div>
 </div>
</template>


