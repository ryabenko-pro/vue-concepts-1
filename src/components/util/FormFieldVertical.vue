<template>
    <div class="form-group">
        <label :for="idValue">{{ title }}</label>

        <slot>
            <input :value="value" v-on:input="$emit('input', $event.target.value)" :id="idValue" type="text" class="form-control" placeholder="Title"/>
        </slot>

        <slot name="error"></slot>
    </div>
</template>

<script>
  export default {
    name: "FormFieldVertical",
    props: {
      id: {
        required: false,
      },
      title: String,
      value: {
        require: true,
      }
    },
    data() {
      return {
        idValue: this.id || `id-generated-${Math.random() * 1000000}`,
      };
    },
    mounted() {
      if (this.$slots.default) {
        const node = this.$slots.default[0].elm;

        node.id = this.idValue;
      }
    },
  }
</script>

<style scoped>

</style>
