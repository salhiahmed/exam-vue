<script setup>
   const { data } = defineProps(['data'])
   const corr = false
</script>

<template>
   <div class="flex flex-col gap-3">
      <div class="text-sm font-bold">التمرين 1: &nbsp;&nbsp; (10 ن)
         <span class="text-[14px] font-medium">&nbsp;&nbsp;ملء الفراغات اعتمادا على الصورة</span>
      </div>

      <div class="relative">
         <img src="../assets/images/good-luck.png" alt=""
            class="absolute h-[35px] left-[50%] translate-x-[-50%] top-[-58px]" />
         <img src="../assets/images/word(empty).png" alt="" />   

         <div class="absolute top-[2px] right-[3px] h-[16px] w-[730px] flex items-center justify-center font-medium">
            <span style="direction: ltr;">.docx - Word</span>
            <span>{{ data.part1[1].value }}</span>
         </div>

         <div style="direction: ltr;" class="absolute top-[159px] left-[10px] h-[16px] flex items-center justify-center gap-6 text-white font-light text-[11px] font-[calibri]">
            <div class="flex gap-3">PAGE {{ data.part1[2].value }} SUR {{ data.part1[3].value }}</div>
            <div class="flex gap-3">{{ data.part1[4].value }} MOTS</div>
            <img src="../assets/images/word-icon-book.png" alt="" class="w-[12px]">
            <div>FRANÇAIS (FRANCE)</div>
         </div>

         <div v-for="tool,i in data.part2" class="absolute flex flex-col items-center" :style="`top: ${tool.top}px; left: ${tool.left}px`">
            <div class="circle flex items-center justify-center w-[16px] h-[16px] bg-slate-700 rounded-full" :class="tool.o ? 'order-3' : 'order-1'">
               <p class="text-white font-bold text-[10px]">{{ i + 1 }}</p>
            </div>
            <img src="../assets/images/arrow.svg" alt="" class="h-[30px] order-2" :class="tool.o ? 'rotate-180' : ''"/>
            <div class="border-2 border-slate-700 h-[20px]"  :class="tool.o ? 'order-1' : 'order-3'" :style="`width: ${tool.w}px`"></div>
         </div>

      </div>

      <!-- exo 1 - part 1 -->
      <div class="flex h-[200px]">
         <div class="flex flex-col flex-1 gap-2">
            <div class="flex items-center justify-center gap-2 p-1">
               <img src="../assets/images/word-icon-file.png" alt="" class="w-[16px]" />
               <p class="text-sm font-bold">
                  الجزء الأول:
                  <span class="text-sm font-medium">استخرج المعلومات من الصورة</span>
               </p>
               <img src="../assets/images/word-icon-file.png" alt="" class="w-[16px]" />
            </div>

            <div class="flex flex-col justify-between flex-1">
               <div v-for="infoDoc,i in data.part1" class="flex items-center justify-between gap-2 pl-2">
                  <p class="text-sm font-normal w-[112px]">{{ infoDoc.label }}</p>
                  <img src="../assets/images/arrow-left.svg" alt="" />
                  <p v-if="corr" class="flex-1 font-bold text-green-600 text-[15px]">{{ infoDoc.value }}</p>
                  <p v-else>.................................................................</p>
               </div>
            </div>
            
         </div>

         <div class="border border-slate-400"></div>
         <!-- exo 1 - part 2 -->

         <div class="flex flex-col flex-1 gap-2">
            <div class="flex items-center justify-center gap-2 p-1">
               <img src="../assets/images/word-icon-file.png" alt="" class="w-[16px]" />
               <p class="text-sm font-bold">
                  الجزء الثاني:
                  <span class="text-sm font-medium">وظيفة العناصر المُرَقَمَة (باختصار)</span>
               </p>
               <img src="../assets/images/word-icon-file.png" alt="" class="w-[16px]" />
            </div>

            <div class="flex flex-col justify-between flex-1">
               
               <div v-for="tool,i in data.part2" class="flex items-center justify-between gap-2 pr-2">
                  <div class="circle flex items-center justify-center w-[16px] h-[16px] bg-slate-700 rounded-full">
                     <p class="text-white font-bold text-[10px]">{{ i + 1 }}</p>
                  </div>
                  <p v-if="corr" class="flex-1 font-bold text-green-600 text-[15px]">{{ tool.def }}</p>
                  <p v-else>.........................................................................................................</p>
               </div>

<!--                <div class="flex items-center justify-between pr-2">
                  <div class="circle flex items-center justify-center w-[16px] h-[16px] bg-slate-700 rounded-full">
                     <p class="text-white font-bold text-[10px]">2</p>
                  </div>
                  <p>
                     ...........................................................................................................
                  </p>
               </div>

               <div class="flex items-center justify-between pr-2">
                  <div class="circle flex items-center justify-center w-[16px] h-[16px] bg-slate-700 rounded-full">
                     <p class="text-white font-bold text-[10px]">3</p>
                  </div>
                  <p>
                     ...........................................................................................................
                  </p>
               </div>

               <div class="flex items-center justify-between pr-2">
                  <div class="circle flex items-center justify-center w-[16px] h-[16px] bg-slate-700 rounded-full">
                     <p class="text-white font-bold text-[10px]">4</p>
                  </div>
                  <p>
                     ...........................................................................................................
                  </p>
               </div>

               <div class="flex items-center justify-between pr-2">
                  <div class="circle flex items-center justify-center w-[16px] h-[16px] bg-slate-700 rounded-full">
                     <p class="text-white font-bold text-[10px]">5</p>
                  </div>
                  <p>
                     ...........................................................................................................
                  </p>
               </div> -->

            </div>
         </div>
      </div>
   </div>
</template>
