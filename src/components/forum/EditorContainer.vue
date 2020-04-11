<template>
  <div>
    <div class="editor">
      <h2>The Complete Crash Course for You to Develop things much better</h2>
      <v-divider></v-divider>
      <editor-content class="mt-4 editor__content" :editor="editor" />
    </div>
    <v-footer fixed>
      <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
        <v-toolbar
          v-bind="{
            color: 'grey lighten-4',
            flat: true,
            dense: true
          }"
        >
          <v-btn
            text
            small
            class="menubar__button"
            :class="{ 'is-active': isActive.bold() }"
            @click="commands.bold"
          >
            <v-icon>mdi-format-bold </v-icon>
          </v-btn>

          <v-btn
            text
            small
            class="menubar__button"
            :class="{ 'is-active': isActive.italic() }"
            @click="commands.italic"
          >
            <v-icon>mdi-format-italic </v-icon>
          </v-btn>

          <v-btn
            text
            small
            class="menubar__button"
            :class="{ 'is-active': isActive.bullet_list() }"
            @click="commands.bullet_list"
          >
            <v-icon>mdi-format-list-bulleted </v-icon>
          </v-btn>

          <v-btn
            text
            small
            class="menubar__button"
            :class="{ 'is-active': isActive.ordered_list() }"
            @click="commands.ordered_list"
          >
            <v-icon>mdi-format-list-numbered</v-icon>
          </v-btn>
        </v-toolbar>
      </editor-menu-bar>
    </v-footer>
  </div>
</template>

<script>
import { Editor, EditorContent, EditorMenuBar } from "tiptap";
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  HorizontalRule,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History,
  Placeholder
} from "tiptap-extensions";

export default {
  name: "EditorContainer",
  components: {
    EditorContent,
    EditorMenuBar
  },
  data() {
    return {
      editor: new Editor({
        extensions: [
          new Blockquote(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new Heading({ levels: [1, 2, 3] }),
          new HorizontalRule(),
          new ListItem(),
          new OrderedList(),
          new TodoItem(),
          new TodoList(),
          new Link(),
          new Bold(),
          new Code(),
          new Italic(),
          new Strike(),
          new Underline(),
          new History(),
          new Placeholder({
            emptyEditorClass: "is-editor-empty",
            emptyNodeClass: "is-empty",
            emptyNodeText: "Write your answer",
            showOnlyWhenEditable: true,
            showOnlyCurrent: true
          })
        ],
        content: ""
      }),
      linkUrl: null,
      linkMenuIsActive: false
    };
  },
  methods: {
    showLinkMenu(attrs) {
      this.linkUrl = attrs.href;
      this.linkMenuIsActive = true;
      this.$nextTick(() => {
        this.$refs.linkInput.focus();
      });
    },
    hideLinkMenu() {
      this.linkUrl = null;
      this.linkMenuIsActive = false;
    },
    setLinkUrl(command, url) {
      command({ href: url });
      this.hideLinkMenu();
    }
  }
};
</script>

<style>
.ProseMirror {
  outline: none;
}
.editor p {
  font-size: 14px;
  margin: 0 !important;
  padding: 0 !important;
}
.editor p.is-editor-empty:first-child::before {
  content: attr(data-empty-text);
  float: left;
  color: #aaa;
  pointer-events: none;
  height: 0;
}
/* *:focus {
    outline: none;
}  */
</style>
<style scoped>
.v-toolbar__content {
  margin: 0;
  padding: 0 !important;
}
</style>
