import { a } from "./a.js";

// 获取页面中的 body 元素
const body = document.querySelector("body");

// 创建一个新的文本节点
const textNode = document.createTextNode(a);

// 将文本节点添加到 body 元素中
body.appendChild(textNode);
