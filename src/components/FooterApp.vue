<script>
import LogoBrand from './LogoBrand.vue';

export default{
    components:{
        LogoBrand
    }
}
</script>
<template>
    <footer class="bg-black/60 text-white border-b border-fuchsia-200 shadow-lg lg:p-4w">
<div class="container mx-auto p-4 flex justify-between items-center ">
    <LogoBrand/>
<!-- footer icons -->
 
<RouterLink
to="/"
class=" hover:text-gray-400"
>
<i class="fab fa-facebook"></i>
</RouterLink>

<RouterLink
to="/"
class=" hover:text-gray-400"
>
<i class="fab fa-twitter"></i>
</RouterLink>

<RouterLink
to="/"
class=" hover:text-gray-400"
>
<i class="fab fa-instagram"></i>
</RouterLink>

<RouterLink
to="/"
class=" hover:text-gray-400"
>
<i class="fab fa-linkedin"></i>
</RouterLink>


<RouterLink
to="/"
class="  hover:text-gray-400"
>
<i class="fab fa-pinterest "></i>
</RouterLink>

</div>
    </footer>
</template>