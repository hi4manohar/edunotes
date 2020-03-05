<template>
  
  <div class="pa-5">
    <v-icon>mdi-arrow-left</v-icon>
    <h1 class="title text-center">Choose Your <span class="font-weight-bold blue--text" >Board</span></h1>
    <p class="caption  text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    <v-list three-line>
      <template v-for="(item, index) in items">
        <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
        ></v-subheader>

        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>

        <v-list-item v-else :key="item.title" class="mb-2">
          <v-list-item-avatar>
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
    
  </div>
</template>

<script>
export default {
  name: "chooseboard",
  data: () => ({
      items: [
        { header: 'Boards' },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'CBSE',
          subtitle: "Central Board ",
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'ICSE',
          subtitle: "Foreign Board",
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'BSEB',
          subtitle: "Bihar Board",
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'HSBC',
          subtitle: "Haryana Board",
        },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'MPSC',
          subtitle: "Madhya Pradesh Board",
        },
      ],
    }),
};
</script>

<style scoped>
.v-list-item{
  border:1px solid #ddd;
  border-radius:10px;
}
</style>
