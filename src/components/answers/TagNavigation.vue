<template>
  <div>
    <v-list shaped>
      <v-subheader>All Tags</v-subheader>
      <v-list-item
        key="false"
        :class="activeTagsIndexProp === false ? 'v-list-item--active' : ''"
        @click="toggleTags(-1)"
      >
        <v-list-item-icon>
          <v-icon></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>All Tags</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item-group v-model="activeTagsIndexProp" color="primary">
        <v-list-item
          v-for="(tag, i) in answersTags"
          :key="i + 1"
          @click="toggleTags(i)"
        >
          <v-list-item-icon>
            <v-icon v-text="tag.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="tag.tags"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "TagNavigation",
  data: () => ({}),

  computed: {
    ...mapState({
      answersTags: state => state.answers.answersTags,
      activeTagsIndex: state => state.answers.activeTagsIndex
    }),
    activeTagsIndexProp: {
      get() {
        return this.activeTagsIndex === false || this.activeTagsIndex == "-1"
          ? false
          : this.activeTagsIndex;
      },
      set() {
        return "hi";
      }
    }
  },

  methods: {
    toggleTags(index) {
      this.$emit("toggleTagsParent", index);
    }
  }
};
</script>
