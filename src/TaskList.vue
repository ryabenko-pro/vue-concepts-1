<template>
    <table class="table table-striped">
        <thead>
        <th>Title</th>
        <th>Status</th>
        <th>Description</th>
        <th>Created at</th>
        <th></th>
        </thead>
        <tbody>
        <tr v-for="task in tasks">
            <td>
                {{ task.title }}
            </td>
            <td>
                {{ task.description }}
            </td>
            <td>
                {{ task.status }}
            </td>
            <td>
                {{ task.createdAt }}
            </td>
            <td>
                <a href="#" @click.prevent="$emit('edit', task)">Edit</a>
            </td>
        </tr>
        </tbody>
    </table>
</template>

<script>

  export default {
    name: "TaskList",
    props: {
      tasks: {
        type: Array,
        required: true,
      }
    },
    // methods: {
    //   foo() {
    //       this.$emit('event', 'arguments');
    //       this.$on('event')
    //   }
    // },

  }
</script>

<style scoped>

</style>
