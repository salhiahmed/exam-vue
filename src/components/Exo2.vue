<script setup>
   import facebook from '../assets/images/facebook.png'
   import amazon from '../assets/images/amazon.png'
   import netflix from '../assets/images/netflix.png'
   import google from '../assets/images/google.png'

   const { data } = defineProps(['data'])
   const corr = true
   const excelTableRows= [
      {img: facebook , label: 'فيسبوك'},
      {img: amazon, label: 'أمازون'},
      {img: netflix, label: 'نيتفليكس'},
      {img: google, label: 'غوغل'}
   ]
</script>

<template>
   <div class="flex flex-col flex-1 gap-3">
      <div class="text-sm font-bold">
         التمرين 2: &nbsp;&nbsp; (10 ن)<span class="text-[14px] font-medium">&nbsp;&nbsp;جدول الإكسل التالي يوضح مداخيل
            كبرى شركات التكنولوجيا
            لل 7 سنوات الأخيرة بالمليار دولار</span>
         <span class="text-[11px] font-medium"> (الأرقام عشوائية)</span>
      </div>
      <table class="text-xs font-bold text-center border-collapse table-fixed whitespace-nowrap">
         <tr class="font-[serif]">
            <td class="w-[23px] p-1">
               <img src="../assets/images/triangle.svg" alt="" />
            </td>

            <td v-for="letter in data.exo2Infos.getLettersInterval" class="border border-slate-300 border-b-slate-500 border-t-0 w-[85px] font-normal" style="font-family: 'Noto Sans Display'">
               {{ letter }}
            </td>
         </tr>

         <tr class="h-[32px]">
            <td class="border border-slate-300 w-[23px] border-l-slate-500 border-r-0">
               {{ data.exo2Infos.numLines[0] }}
            </td>
            <td class="border border-slate-500 w-[85px]"></td>
            <td class="border border-slate-500 w-[89.52px] bg-slate-700 text-[16px] text-white">
               2017
            </td>
            <td class="border border-slate-500 w-[89.52px] bg-slate-700 text-[16px] text-white">
               2018
            </td>
            <td class="border border-slate-500 w-[89.52px] bg-slate-700 text-[16px] text-white">
               2019
            </td>
            <td class="border border-slate-500 w-[89.52px] bg-slate-700 text-[16px] text-white">
               2020
            </td>
            <td class="border border-slate-500 w-[89.52px] bg-slate-700 text-[16px] text-white">
               2021
            </td>
            <td class="border border-slate-500 w-[89.52px] bg-slate-700 text-[16px] text-white">
               2022
            </td>
            <td class="border border-slate-500 w-[89.52px] bg-slate-700 text-[16px] text-white">
               2023
            </td>
         </tr>

         <tr v-for="row,i in excelTableRows" class="h-[32px]">
            <td class="border border-slate-300 w-[23px] border-l-slate-500 border-r-0">
               {{ data.exo2Infos.numLines[i+1] }}
            </td>

            <td class="border border-slate-500 w-[85px]">
               <div class="flex items-center gap-1 px-1">
                  <img :src="row.img" alt="" class="h-[16px]" /><span>{{ row.label }}</span>
               </div>
            </td>
            
            <td v-for="nb in data.exo2Infos.excelTable[i]" class="border border-slate-500 w-[89.52px] font-normal text-[16px]">
               {{ nb }}
            </td>             
         </tr>
      </table>
      <div class="flex flex-1">
         <!-- exo 2 - part 1 -->
         <div class="flex flex-col flex-1 gap-2">
            <div class="flex items-center justify-center gap-2 p-1">
               <img src="../assets/images/excel-icon-file.png" alt="" class="w-[16px]" />
               <p class="text-sm font-bold">
                  الجزء الأول:
                  <span class="text-sm font-medium">اكتب عبارات الدوال التالية</span>
               </p>
               <img src="../assets/images/excel-icon-file.png" alt="" class="w-[16px]" />
            </div>

            <div class="flex flex-col justify-between flex-1 pl-3">

               <div v-for="q,i in data.part1" class="flex flex-col gap-2">
                  <p class="text-sm font-normal" x-text="d">{{ q.title }}</p>
                  
                  <div class="flex items-center gap-2" style="direction: ltr">
                     <img src="../assets/images/arrow-left.svg" alt="" class="rotate-180 w-[28px]" />
                     <p v-if="i==0" class="pb-1 tracking-wider text-[13px] text-left" style="font-family: 'Noto Sans Display'">
                        {{ q.func }}
                     </p>
                     <p v-else-if="corr" class="pb-1 tracking-wider text-[13px] text-left text-green-700" style="font-family: 'Noto Sans Display'">
                        {{ q.func }}
                     </p>
                     <p v-else class="pb-1">
                        .....................................................................................................
                     </p>
                  </div>
               </div>

            </div>
         </div>

         <div class="border border-slate-400"></div>
         <!-- exo 2 - part 2 -->
         <div class="flex flex-col flex-1 gap-2">

            <div class="flex items-center justify-center gap-2 p-1">
               <img src="../assets/images/excel-icon-file.png" alt="" class="w-[16px]" />
               <p class="text-sm font-bold">
                  الجزء الثاني:
                  <span class="text-sm font-medium">ماهي نتيجة الدوال التالية ؟</span>
               </p>
               <img src="../assets/images/excel-icon-file.png" alt="" class="w-[16px]" />
            </div>

            <div class="flex flex-col justify-between flex-1 pr-3">

               <div v-for="q,i in data.part2" class="flex items-center justify-between" style="direction: ltr; font-family: 'Noto Sans Display'">
                  <p class="text-[13px] tracking-wider w-[250px]" v-html="q.func"></p>
                  <img src="../assets/images/arrow-left.svg" alt="" class="rotate-180 w-[28px]" />

                  <div v-if="i==0" class="border border-slate-400 w-[60px] h-[25px] flex items-center justify-center text-[15px] font-[tajawal] font-bold">
                     {{ q.result }}
                  </div>
                  <div v-else-if="corr" class="border border-slate-400 w-[60px] h-[25px] flex items-center justify-center text-[15px] text-green-700 font-[tajawal] font-bold">
                     {{ q.result }}
                  </div>
                  <div v-else="i==0" class="border border-slate-400 w-[60px] h-[25px] flex items-center justify-center text-[15px] font-[tajawal] pb-1">
                     .......
                  </div>
               </div>

            </div>
         </div>
      </div>
   </div>
</template>
