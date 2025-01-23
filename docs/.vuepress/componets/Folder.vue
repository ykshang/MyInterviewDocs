<template>
  <div class="self-folder">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Folder',
};
</script>
<style scoped>
.self-folder {
  display: inline-block;
  margin: auto 2px;
  padding: 1px 4px;
  font-size: 85%;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}
</style>
