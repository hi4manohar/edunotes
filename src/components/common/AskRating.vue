<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-card-title class="headline">Rate our App on Playstore!</v-card-title>
        <v-card-text>If you enjoy using <strong>Edunotes</strong>, please take a few seconds to rate 5 star on Playstore. It really helps!</v-card-text>
        <div class="text-center">
          <v-rating v-model="rating"></v-rating>
        </div>
        <v-card-actions class="justify-space-between">
          <v-btn text @click="openRatingUrl(false)">Remind Me Later</v-btn>
          <a :href="marketUrl" target="_blank">
            <v-btn
              color="primary"
              text
              @click="openRatingUrl()"
            >
              Rate Now
            </v-btn>
          </a>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { momentFilter } from '../../filters';
import * as appConfig from "../../config/index.config";
import { cordovaMixin } from "../../mixins";
export default {
    name: 'AskRating',
    mixins: [cordovaMixin],
    props: ['dialogStatus'],
    data () {
      return {
        dialog: false,
        rating: 5,
        marketUrl: appConfig.appMarketUrl
      }
    },
    created() {
      // this.loadArticles("initial");
    },

    methods: {
      openRatingUrl(input = true) {
        this.dialog = false;
        let configs = JSON.parse(localStorage.getItem('configUser'));
        if( input ) {
          configs.rateAction = 1;
          localStorage.setItem('configUser', JSON.stringify(configs));
        } else {
          configs.rateAction = 0;
          //ask after 2 days later
          configs.askOn = momentFilter.getTwoDaysLater();
          localStorage.setItem('configUser', JSON.stringify(configs));

        }
      }
    },

    mounted() {

      if( this.isCordova() === false ) {
        this.marketUrl = appConfig.appPlayUrl;
      }

      if( this.dialogStatus ) {
        this.dialog = true;
      }
      try {
        let configs = JSON.parse(localStorage.getItem('configUser'));
        
        if( !configs.installation_date )
          return false;
          
        if( !configs.rateAction && momentFilter.diffTodayDate(configs.installation_date) >= 2 ) {
          if( configs.askOn && !momentFilter.diffTodayDate(configs.askOn)) {
            this.dialog = true;
          }
          if( !configs.askOn ) {
            this.dialog = true;
          }
        }

      } catch(err) {
        console.log(err);
      }
    }
}
</script>