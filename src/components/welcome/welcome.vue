<template>
  <div class="py-10 px-5 text-center">
    <h1 class="title">Welcome To <span class="font-weight-bold blue--text" >EduNotes</span></h1>
    <p class="caption mb-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Scrambled it to make a type specimen book.</p>
    <div class="welcome-logo mb-10">

    </div>
    <v-btn rounded large color="primary">Get Started</v-btn>
  </div>
</template>

<script>
export default {
  name: "welcome",
  data: () => ({})
};
</script>

<style>
.welcome-logo{
  width:250px;
  height:250px;
  background:#f0f7ff;
  border-radius:50%;
  border:1px solid #beddfb;
  margin:0 auto;
}
</style>
