<template>
    <component :is="horizontal ? 'FormFieldHorizontal' : 'FormFieldVertical'"  :id="id" :title="title" :value="value" @input="$emit('input', $event)">
        <slot></slot>
    </component>
</template>

<script>
  import FormFieldHorizontal from "./FormFieldHorizontal";
  import FormFieldVertical from "./FormFieldVertical";
  export default {
    name: "FormFieldWrapper",
    components: {FormFieldVertical, FormFieldHorizontal},
    props: {
      id: {
        required: false,
      },
      title: String,
      value: {
        require: true,
      }
    },
    computed: {
      horizontal: {
        get() {
          return this.$root.$data.form.horizontal;
        },
        set(value) {
          this.$root.$data.form.horizontal = !!value;
        }
      }
    },
  }
</script>

<style scoped>

</style>
