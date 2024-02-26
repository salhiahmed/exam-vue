<script setup>
   const { i } = defineProps(['i'])
</script>
<template>
    <div>
        <div class="flex items-center justify-between p-2 text-white bg-slate-700">
            <img src="../assets/images/algeria-flag.png" alt="" class="w-[16px]">
            <p class="font-semibold">الجمهورية الجزائرية الديمقراطية الشعبية</p>
            <p class="text-sm font-bold">|</p>
            <p class="font-medium">وزارة التربية الوطنية</p>
            <p class="text-sm font-bold">|</p>
            <p class="font-medium">مديرية التربية لولاية الطارف</p>
            <p class="text-sm font-bold">|</p>
            <p class="">ثانوية علاقي صالح</p>
            <img src="../assets/images/algeria-flag.png" alt="" class="w-[16px]">
        </div>

        <div class="flex items-start">
            <div class="flex items-center justify-between flex-1 p-2 shadow-lg bg-slate-300 text-slate-950">

                <div class="flex items-center gap-1">
                    <img src="../assets/images/test.png" alt="" class="w-[16px]">
                    <p>امتحان 2 معلوماتية</p>
                </div>

                <div class="flex items-center gap-1">
                    <img src="../assets/images/calendar.png" alt="" class="w-[16px]">
                    <p>2024/2023</p>
                </div>

                <div class="flex items-center gap-1">
                    <img src="../assets/images/time.png" alt="" class="w-[16px]">
                    <p>1 ســـا</p>
                </div>
                <div class="flex items-center gap-1">
                    <img src="../assets/images/student.png" alt="" class="w-[16px]">
                    <p>اللقب والاسم: ................................................................ 1 أدبي ...</p>
                </div>
                <div class="flex justify-center items-center w-[16px] h-[16px] border border-slate-700 rounded font-bold text-[10px]">
                    <p>{{ i+1 }}</p>
                </div> 
                
            </div>
            <div class="relative p-1 pl-0">
                <img src="../assets/images/computer.png" alt="" class="w-[60px]">
                <div class="absolute flex flex-col gap-[3px] items-center justify-end pb-1 top-[5px] left-[1px] w-[58px] h-[37px]">
                    <div class="border border-slate-700 w-[20px]"></div>
                    <p class="leading-[7px] font-bold">20</p>
                </div>
            </div>
        </div>
    </div>
</template>


