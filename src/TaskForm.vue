<template>
    <form @submit.prevent="doCreateTask">
        <FormFieldWrapper title="Task title" v-model="task.title" id="task-title">
            <div class="alert alert-error" style="color: red;" slot="error" v-if="!task.title || task.title.length < 10">
                Title is too short
            </div>
        </FormFieldWrapper>

        <FormFieldWrapper title="Description" v-model="task.description">
            <textarea v-model.lazy="task.description" class="form-control" rows="3"></textarea>

            <div class="alert alert-error" style="color: red;" slot="error" v-if="!task.description || task.description.length < 10">
                Description is too short
            </div>
        </FormFieldWrapper>

        <FormFieldWrapper title="Task status" v-model="task.status">
            <select class="form-control" id="exampleFormControlSelect1" v-model="task.status">
                <option v-for="status in statuses">{{ status }}</option>
            </select>
        </FormFieldWrapper>

        <input type="submit" class="btn btn-primary btn-block"/>
    </form>
</template>

<script>
  import {Task, TASK_STATUSES} from "./model/Task";
  import FormFieldWrapper from "./components/util/FormFieldWrapper";

  export default {
    name: "TaskForm",
    components: {FormFieldWrapper},
    props: {
      task: {
        type: Task,
        required: true,
      },
    },
    data() {
      return {
        statuses: TASK_STATUSES,
      };
    },
    methods: {
      doCreateTask() {
        this.$emit('save', this.task);
      },
    },
  }
</script>

<style scoped>

</style>
