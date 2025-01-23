<template>
  <span class="self-folder">
    <span class="fa fa-folder self-icon1"></span>
    <span class="fa fa-folder-open self-icon2"></span>
    <span class="self-path">{{ path }}</span>
  </span>
</template>

<script>
export default {
  name: 'Folder',
  props: ["path"],

};
</script>
<style scoped>
.self-folder {
  display: inline-block;
  margin: 0 2px;
  padding: 0px 4px;
  line-height: 1.5;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  background-color: #fcf4cf72;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.self-folder:hover>.self-path {
  color: #a98b05;
}
.self-icon2 {
display: none;
}
.self-folder:hover>.self-icon2 {
  display: inline-block;
}
.self-folder:hover>.self-icon1 {
  display: none;
}
.self-icon1, 
.self-icon2 {
  color: #ffb829;
  font-size: 1.1rem;
  width: 1.3rem;
}
.self-path {
  color: #5c4b02;
  text-decoration: underline;
  font-size: 96%;
}
</style>
