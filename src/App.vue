<script setup>
  import Page from './components/Page.vue'
  import dataGen from './utils/dataGen.js'
  import data from './utils/data.js'
  import Header from './components/Header.vue'
  import Content from './components/Content.vue'
  import Exo1 from './components/Exo1.vue'
  import Exo2 from './components/Exo2.vue'
</script>

<template>
<!--   {{console.log([...Array(40)].map((e, i) => dataGen(i + 1)))}} -->

  <div class="flex flex-col gap-5 print:gap-0">
    <Page v-for="d,i in data">
      <Header :i="i"/>
      <Content>
         <Exo1 :data="d.exo1" />
        <Exo2 :data="d.exo2" />
      </Content>
    </Page>
  </div>


  
</template>

