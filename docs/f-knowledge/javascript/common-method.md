# 常用方法

## 字符串常用方法

| 方法名                                    | 作用                                                               |
|----------------------------------------|------------------------------------------------------------------|
| `charAt(index)`                        | 返回指定索引位置的字符。                                                     |
| `charCodeAt(index)`                    | 返回指定索引位置字符的 Unicode 值。                                           |
| `concat(str1, str2, ...)`              | 将两个或多个字符串连接起来，返回一个新字符串。                                          |
| `includes(searchValue, startIndex)`    | 判断字符串中是否包含指定的子字符串，返回布尔值。                                         |
| `indexOf(searchValue, startIndex)`     | 返回指定子字符串第一次出现的索引位置，如果未找到则返回 -1。                                  |
| `lastIndexOf(searchValue, startIndex)` | 返回指定子字符串最后一次出现的索引位置，如果未找到则返回 -1。                                 |
| `startsWith(searchValue, startIndex)`  | 判断字符串是否以指定的子字符串开头，返回布尔值。                                         |
| `endsWith(searchValue, endIndex)`      | 判断字符串是否以指定的子字符串结尾，返回布尔值。                                         |
| `substring(startIndex, endIndex)`      | 提取字符串中指定索引范围的字符，返回一个新字符串。                                        |
| `slice(startIndex, endIndex)`          | 提取字符串中指定索引范围的字符，返回一个新字符串。不同于 `substring`，`slice` 允许使用负数索引表示倒数位置。 |
| `split(separator, limit)`              | 将字符串分割成子字符串数组，根据指定的分隔符进行分割。                                      |
| `replace(searchValue, replaceValue)`   | 将字符串中的某个子字符串替换为新的字符串，并返回替换后的结果。                                  |
| `toLowerCase()`                        | 将字符串中的字母字符转换为小写，并返回转换后的新字符串。                                     |
| `toUpperCase()`                        | 将字符串中的字母字符转换为大写，并返回转换后的新字符串。                                     |
| `trim()`                               | 去除字符串两端的空格，并返回去除空格后的新字符串。                                        |
| `padStart(targetLength, padString)`    | 在字符串的开头用指定的字符或字符串进行填充，直到字符串达到指定的长度。                              |
| `padEnd(targetLength, padString)`      | 在字符串的末尾用指定的字符或字符串进行填充，直到字符串达到指定的长度。                              |
| `repeat(count)`                        | 将字符串重复指定次数，返回一个由重复字符串组成的新字符串。                                    |
| `match(regexp)`                        | 在字符串中查找与正则表达式匹配的内容，返回匹配结果的数组。                                    |
| `search(regexp)`                       | 在字符串中搜索与正则表达式匹配的内容，返回第一个匹配的索引位置。                                 |
| `substr(startIndex, length)`           | 提取字符串中指定长度的字符，从指定的起始索引开始。                                        |
| `valueOf()`                            | 返回字符串对象的原始值。                                                     |
| `toString()`                           | 返回字符串对象的原始值，等同于 `valueOf()` 方法。                                  |


## 数字常用方法

| 方法名                       | 作用                                                     |
|---------------------------|--------------------------------------------------------|
| `toFixed(digits)`         | 将数字格式化为指定小数位数的字符串。                                     |
| `toPrecision(precision)`  | 将数字格式化为指定精度的字符串。                                       |
| `toString(radix)`         | 将数字转换为指定进制的字符串。                                        |
| `toLocaleString()`        | 将数字转换为本地化格式的字符串，根据不同地区的约定进行格式化。                        |
| `valueOf()`               | 返回数字的原始值。                                              |
| `parseFloat(string)`      | 解析一个字符串并返回一个浮点数。                                       |
| `parseInt(string, radix)` | 解析一个字符串并返回一个整数。如果指定了基数，则按照指定的基数进行解析；否则，默认按照十进制解析。      |
| `isFinite(number)`        | 判断一个值是否为有限的数字，如果是数字或可转换为数字，则返回 `true`；否则返回 `false`。    |
| `isNaN(number)`           | 判断一个值是否为 `NaN`（非数字），如果是 `NaN`，则返回 `true`；否则返回 `false`。 |
| `Math.abs(x)`             | 返回一个数的绝对值。                                             |
| `Math.ceil(x)`            | 返回大于或等于给定数字的最小整数。                                      |
| `Math.floor(x)`           | 返回小于或等于给定数字的最大整数。                                      |
| `Math.round(x)`           | 返回一个数字四舍五入到最接近的整数值。                                    |
| `Math.max(x, y, ...)`     | 返回一组数字中的最大值。                                           |
| `Math.min(x, y, ...)`     | 返回一组数字中的最小值。                                           |
| `Math.pow(x, y)`          | 返回一个数字的指数幂。                                            |
| `Math.sqrt(x)`            | 返回一个数字的平方根。                                            |
| `Math.random()`           | 返回一个介于 0 到 1 之间的随机数。                                   |


## 数组常用方法

| 方法名                                     | 作用                                         |
|-----------------------------------------|--------------------------------------------|
| `concat(...args)`                       | 合并两个或多个数组，返回一个新数组。                         |
| `join(separator)`                       | 将数组中的所有元素连接成一个字符串，使用指定的分隔符分隔。              |
| `pop()`                                 | 删除并返回数组的最后一个元素。                            |
| `push(...elements)`                     | 在数组的末尾添加一个或多个元素，并返回添加元素后的数组长度。             |
| `shift()`                               | 删除并返回数组的第一个元素。                             |
| `unshift(...elements)`                  | 在数组的开头添加一个或多个元素，并返回添加元素后的数组长度。             |
| `slice(start, end)`                     | 返回一个从指定开始索引到结束索引（不包括结束索引）的新数组，不会改变原始数组。    |
| `splice(start, deleteCount, ...items)`  | 删除、替换或添加数组的元素，并返回被删除元素组成的新数组。              |
| `reverse()`                             | 反转数组中元素的顺序，会改变原始数组。                        |
| `sort(compareFunction)`                 | 对数组元素进行排序，会改变原始数组。                         |
| `indexOf(searchElement, fromIndex)`     | 返回指定元素在数组中第一次出现的索引位置，如果未找到则返回 -1。          |
| `lastIndexOf(searchElement, fromIndex)` | 返回指定元素在数组中最后一次出现的索引位置，如果未找到则返回 -1。         |
| `includes(searchElement, fromIndex)`    | 判断数组中是否包含指定元素，返回布尔值。                       |
| `forEach(callbackFn, thisArg)`          | 对数组中的每个元素执行一次指定的回调函数。                      |
| `map(callbackFn, thisArg)`              | 使用指定的函数对数组的每个元素进行处理，并返回处理后的新数组。            |
| `filter(callbackFn, thisArg)`           | 使用指定的函数对数组的每个元素进行判断，返回满足条件的元素组成的新数组。       |
| `reduce(callbackFn, initialValue)`      | 从左到右对数组中的每个元素执行一个聚合操作，返回聚合结果。              |
| `reduceRight(callbackFn, initialValue)` | 从右到左对数组中的每个元素执行一个聚合操作，返回聚合结果。              |
| `every(callbackFn, thisArg)`            | 判断数组中的所有元素是否都满足指定的条件，返回布尔值。                |
| `some(callbackFn, thisArg)`             | 判断数组中是否存在满足指定条件的元素，返回布尔值。                  |
| `find(callbackFn, thisArg)`             | 返回数组中满足指定条件的第一个元素，如果未找到则返回 `undefined`。    |
| `findIndex(callbackFn, thisArg)`        | 返回数组中满足指定条件的第一个元素的索引，如果未找到则返回 -1。          |
| `fill(value, start, end)`               | 用指定的值填充数组中的元素，从起始索引到结束索引（不包括结束索引），会改变原始数组。 |
| `isArray(value)`                        | 判断一个值是否为数组类型，返回布尔值。                        |
