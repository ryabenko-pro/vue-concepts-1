<template>
    <input :value="value" @input="onInput" class="importer-input"/>
</template>

<script>
  export default {
    name: "FormInput",
    props: {
      value: {
        type: [String, Number],
        required: true,
      }
    },
    watch: {
      value(value) {
        console.log(`New values from outside: ${value}`);
      }
    },
    methods: {
      onInput(event) {
        this.$emit('input', event.target.value);
      },
    },
  }
</script>

<style scoped>

</style>
