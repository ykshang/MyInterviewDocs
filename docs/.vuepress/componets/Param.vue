<template>
  <div class="basic" title="参数格式">
    {{ text }}
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Param',
  props: ["text"],
  data () {
    return {
    };
  },
  mounted () {
  }
};
</script>
<style scoped>
.basic {
  display: inline-block;
  margin: auto 2px;
  padding: 2px 4px;
  font-size: 90%;
  line-height: 1.3rem;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  background-color: #f3f5f7;
  color: #42b983;
  font-weight: bold;
}
.basic:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
