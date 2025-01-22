# 主页

## 组件清单

### 1. \<Codes\>

```vue
<Codes>element.addEventListener</Codes>
<Codes b>element.addEventListener</Codes>
```

**显示效果：**
<Codes>element.addEventListener</Codes>
<Codes b>element.addEventListener</Codes>

### 2. \<b\>

```vue
<b>11223344</b>
```

**显示效果：**
<b>11223344</b>

### 3. \<CodeBold\>

<b>存了一些代码。作参考，不做引用</b>

```vue
<!-- t: tip -->
<!-- w: warn -->
<!-- e: error -->
<!-- s: sucess -->
<!-- b: bold -->
<CodeBold s>111</CodeBold>
<CodeBold e>222</CodeBold>
<CodeBold w>333</CodeBold>
<CodeBold t>444</CodeBold>
<CodeBold s b>555</CodeBold>
<CodeBold e b>666</CodeBold>
```

**显示效果：**
<CodeBold s>111</CodeBold>
<CodeBold e>222</CodeBold>
<CodeBold w>333</CodeBold>
<CodeBold t>444</CodeBold>
<CodeBold s b>555</CodeBold>
<CodeBold e b>666</CodeBold>

### 4. no-line-numbers

如果我们想隐藏某一个代码块的行号

```
>     ``` js no-line-numbers
>     function createCounter() {
>       let count = 0; // 外层闭包
>       // 内层闭包
>       return function() {
>         return ++count; // 可以访问上一层的count，并一直保持引用
>       };
>     }
>     ```
```

**实际效果：**

```js no-line-numbers
function createCounter() {
  let count = 0; // 外层闭包
  // 内层闭包
  return function () {
    return ++count; // 可以访问上一层的count，并一直保持引用
  };
}
```
