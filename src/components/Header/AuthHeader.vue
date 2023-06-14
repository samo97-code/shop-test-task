<template>
 <div class="sticky top-0 h-[60px] w-full bg-[#676b70] flex items-center z-[1]">
   <div class="main-container flex items-center justify-between">
     <img src="https://img.freepik.com/free-vector/yellow-black-briday-shopping-sale_1017-21800.jpg?w=740&t=st=1686737502~exp=1686738102~hmac=29112c328ce8dadf7d4cb4662052c87df7d066c99fef415a669a90b051a7c1c2" alt="logo" class="w-[40px] h-[40px]">

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


