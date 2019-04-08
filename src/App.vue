<template>
  <div id="app">
    <a href="#" @click.prevent="createTask">Create task</a>

    <h2>HOT TASKS</h2>
    <TaskList :tasks="hotTasks" @edit="editTask($event)"/>

    <h2>All tasks</h2>
    <TaskList :tasks="tasks" @edit="editTask($event)"/>
    <TaskForm :task="task" v-on:save="saveTask($event)" v-if="task" :key="task.id"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TaskForm from "./TaskForm";
import {Task, TASK_STATUSES} from "./model/Task";
import TaskList from "./TaskList";

export default {
  name: 'app',
  components: {TaskList, TaskForm, HelloWorld},
  data() {
    return {
      task: null,
      currentTask: null,
      hotTasks: [
        new Task({id: 3, title: 'New task', description: 'description 3', status: TASK_STATUSES.WIP}),
      ],
      tasks: [
        new Task({id: 1, title: 'Title,', description: 'description', status: TASK_STATUSES.NEW}),
        new Task({id: 2, title: 'Task 2', description: 'description2', status: TASK_STATUSES.DONE}),
        new Task({id: 3, title: 'New task', description: 'description 3', status: TASK_STATUSES.WIP}),
      ],
    };
  },
  methods: {
    saveTask() {
      if (!this.task.id) {
        this.task.id = Math.random();

        this.tasks.push(this.task);
      } else {
        this.currentTask.id = this.task.id;
        this.currentTask.title = this.task.title;
        this.currentTask.description = this.task.description;
        this.currentTask.status = this.task.status;
        this.currentTask.createdAt = this.task.createdAt;
      }

      this.currentTask = null;
      this.task = null;
    },
    editTask(task) {
      this.currentTask = task;
      this.task = new Task(task);
    },
    createTask() {
      this.task = new Task();
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
