import{c as i,Z as n}from"./index.e00926ea.js";const a={dark:{type:Boolean,default:null}};function d(t,e){return i(()=>t.dark===null?e.dark.isActive:t.dark)}const r={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},u=Object.keys(r);r.all=!0;function s(t){const e={};for(const o of u)t[o]===!0&&(e[o]=!0);return Object.keys(e).length===0?r:(e.horizontal===!0?e.left=e.right=!0:e.left===!0&&e.right===!0&&(e.horizontal=!0),e.vertical===!0?e.up=e.down=!0:e.up===!0&&e.down===!0&&(e.vertical=!0),e.horizontal===!0&&e.vertical===!0&&(e.all=!0),e)}function c(t,e){return e.event===void 0&&t.target!==void 0&&t.target.draggable!==!0&&typeof e.handler=="function"&&t.target.nodeName.toUpperCase()!=="INPUT"&&(t.qClonedBy===void 0||t.qClonedBy.indexOf(e.uid)===-1)}function f(){if(window.getSelection!==void 0){const t=window.getSelection();t.empty!==void 0?t.empty():t.removeAllRanges!==void 0&&(t.removeAllRanges(),n.is.mobile!==!0&&t.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}export{d as a,f as c,s as g,c as s,a as u};