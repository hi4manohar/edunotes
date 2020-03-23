<template>
  <v-app>
    <v-app-bar
      absolute
      color="deep-orange lighten-5"
      elevate-on-scroll>
        <v-btn icon light @click="$router.go(-1)">
          <v-icon color="grey darken-2">mdi-arrow-left</v-icon>
        </v-btn>
        <v-toolbar-title class="pl-1 subtitle-1">Notifications</v-toolbar-title>
        <v-spacer></v-spacer>
    </v-app-bar>
    <v-content justify="center">
      <v-card>
        <v-list two-line>
          <template v-for="(item, index) in items">
            <v-subheader
              v-if="item.header"
              :key="item.header"
              inset
            >
              {{ item.header }}
            </v-subheader>

            <v-divider
              v-else-if="item.divider"
              :key="index"
              inset
            ></v-divider>

            <v-list-item
              v-else
              :key="item.title"
              ripple
              
            >
              <v-list-item-avatar>
                <img :src="item.avatar">
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="item.title"></v-list-item-title>
                <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-card>
      <br>
      <p class="text-center"><strong>v1.00</strong><br>App Updated</p>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "Notifications",
  data () {
      return {
        items: [
          {
            header: 'Today',
          },
          { divider: true },
          {
            avatar: 'https://picsum.photos/250/300?image=660',
            title: 'Meeting @ Noon',
            subtitle:
              "<span class='font-weight-bold'>Spike Lee</span> &mdash; I'll be in your neighborhood",
          },
          {
            avatar: 'https://picsum.photos/250/300?image=821',
            title: 'Summer BBQ <span class="grey--text text--lighten-1"></span>',
            subtitle:
              "<span class='font-weight-bold'>to Operations support</span> &mdash; Wish I could come.",
          },
          {
            avatar: 'https://picsum.photos/250/300?image=783',
            title: 'Yes yes',
            subtitle:
              "<span class='font-weight-bold'>Bella</span> &mdash; Do you have Paris recommendations",
          },
          {
            header: 'Yesterday',
          },
          { divider: true },
          {
            avatar: 'https://picsum.photos/250/300?image=1006',
            title: 'Dinner tonight?',
            subtitle:
              "<span class='font-weight-bold'>LaToya</span> &mdash; Do you want to hang out?",
          },
          {
            avatar: 'https://picsum.photos/250/300?image=146',
            title: 'So long',
            subtitle:
              "<span class='font-weight-bold'>Nancy</span> &mdash; Do you see what time it is?",
          },
          {
            header: 'Last Week',
          },
          { divider: true },
          {
            avatar: 'https://picsum.photos/250/300?image=1008',
            title: 'Breakfast?',
            subtitle:
              "<span class='font-weight-bold'>LaToya</span> &mdash; Do you want to hang out?",
          },
          {
            avatar: 'https://picsum.photos/250/300?image=839',
            title:
              'Winter Porridge <span class="grey--text text--lighten-1"></span>',
            subtitle:
              "<span class='font-weight-bold'>cc: Daniel</span> &mdash; Tell me more...",
          },
          {
            avatar: 'https://picsum.photos/250/300?image=145',
            title: 'Oui oui',
            subtitle:
              "<span class='font-weight-bold'>Nancy</span> &mdash; Do you see what time it is?",
          },
        ],
      }
    },
};
</script>
<style scoped="">
  .v-content {
    margin-top: 56px;
    height: calc(100vh - 56px);
    overflow: auto;
    padding:10px;
  }
</style>
