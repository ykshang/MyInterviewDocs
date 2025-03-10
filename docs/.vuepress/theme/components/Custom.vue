<script setup lang="ts">
import { ref } from 'vue'

const message = ref('Hello World!')

const value = ref('')
const options = [
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>
<template>
  <div class="my-custom-content">
    {{ message }}
    {{ 11111 }}
    <el-select
    v-model="value"
    clearable
    placeholder="Select"
    style="width: 240px"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
  </div>
</template>




