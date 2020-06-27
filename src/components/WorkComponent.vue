<template>
  <div class="container">
    <h1 class="works"></h1>
    <p class="error"></p>
    <div class="create-work-container">
      <h2>Create your work!</h2>
      <label for="create-work-title"></label>
      <input type="text" id="create-work-title" v-model="title"/>

      <label for="create-work-description"></label>
      <input type="text" id="create-work-description" v-model="description"/>

      <button v-on:click="createWork">Create!</button>
    </div>
    <div class="works-container">
      <div class="work" v-for="(work, index) in works" :item="work" :index="index" :key="work._id">
        <h2>{{ work.title }}</h2>
        <p>{{ work.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import WorkService from "../WorkService";

export default {
  name: 'WorkComponent',
  data(){
    return {
      works: [],
      error: '',
      title: '',
      description: ''
    }
  },
  async created(){
    try{
      this.works = await WorkService.getWorks();
      console.log(this.works);
    } catch (e) {
      this.error = e.message;
    }
  },
  methods: {
    async createWork(){
      await WorkService.insertWork(this.title, this.description);
      this.works = await WorkService.getWorks();
      console.log(this.works);
    }
  }
}
</script>


<style scoped>

</style>
