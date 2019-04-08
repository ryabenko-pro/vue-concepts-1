<template>
  <div class="hello">
    <FormInput :value="value" @input="$emit('input', $event)"/>
    <!--<FormInput v-model="value"/>-->

    <!--<input type="button" @click="message = Math.random()" value="randomize"/>-->
  </div>
</template>

<script>
import FormInput from "./util/FormInput";
export default {
  name: 'HelloWorld',
  components: {FormInput},
  props: {
    value: String
  },
  data() {
    return {
      message: this.value,
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
