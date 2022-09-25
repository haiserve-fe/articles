import{_ as s,c as n,o as a,a as l}from"./app.5799a5e1.js";const p="/articles/assets/useEffect.bee606bd.jpg",e="/articles/assets/reactCommit.445cd070.jpg",b=JSON.parse('{"title":"React useEffect \u524D\u4E16\u4ECA\u751F","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4E3A\u4EC0\u4E48\u6709 React Hook","slug":"\u4E3A\u4EC0\u4E48\u6709-react-hook","link":"#\u4E3A\u4EC0\u4E48\u6709-react-hook","children":[]},{"level":2,"title":"useEffect \u542B\u4E49","slug":"useeffect-\u542B\u4E49","link":"#useeffect-\u542B\u4E49","children":[]},{"level":2,"title":"useEffect \u7528\u6CD5","slug":"useeffect-\u7528\u6CD5","link":"#useeffect-\u7528\u6CD5","children":[]},{"level":2,"title":"\u6E90\u7801\u8868\u73B0","slug":"\u6E90\u7801\u8868\u73B0","link":"#\u6E90\u7801\u8868\u73B0","children":[{"level":3,"title":"\u6E90\u7801\u6D41\u7A0B\u56FE","slug":"\u6E90\u7801\u6D41\u7A0B\u56FE","link":"#\u6E90\u7801\u6D41\u7A0B\u56FE","children":[]},{"level":3,"title":"\u521D\u59CB\u5316\u65F6","slug":"\u521D\u59CB\u5316\u65F6","link":"#\u521D\u59CB\u5316\u65F6","children":[]},{"level":3,"title":"dispatcher \u662F\u4EC0\u4E48\uFF1F","slug":"dispatcher-\u662F\u4EC0\u4E48\uFF1F","link":"#dispatcher-\u662F\u4EC0\u4E48\uFF1F","children":[]},{"level":3,"title":"mountEffect \u539F\u7406","slug":"mounteffect-\u539F\u7406","link":"#mounteffect-\u539F\u7406","children":[]},{"level":3,"title":"HookFlags","slug":"hookflags","link":"#hookflags","children":[]},{"level":3,"title":"\u66F4\u65B0\u65F6","slug":"\u66F4\u65B0\u65F6","link":"#\u66F4\u65B0\u65F6","children":[]},{"level":3,"title":"commit \u9636\u6BB5\u8C03\u7528\u65F6\u673A","slug":"commit-\u9636\u6BB5\u8C03\u7528\u65F6\u673A","link":"#commit-\u9636\u6BB5\u8C03\u7528\u65F6\u673A","children":[]}]},{"level":2,"title":"useEffect \u95EE\u7B54","slug":"useeffect-\u95EE\u7B54","link":"#useeffect-\u95EE\u7B54","children":[{"level":3,"title":"useEffect \u4F9D\u8D56\u9879\u5BF9\u6BD4\u662F\u6D45\u6BD4\u8F83\u5417","slug":"useeffect-\u4F9D\u8D56\u9879\u5BF9\u6BD4\u662F\u6D45\u6BD4\u8F83\u5417","link":"#useeffect-\u4F9D\u8D56\u9879\u5BF9\u6BD4\u662F\u6D45\u6BD4\u8F83\u5417","children":[]},{"level":3,"title":"useEffect \u4E0E useLayoutEffect \u533A\u522B","slug":"useeffect-\u4E0E-uselayouteffect-\u533A\u522B","link":"#useeffect-\u4E0E-uselayouteffect-\u533A\u522B","children":[]},{"level":3,"title":"useEffect \u4E00\u5B9A\u8981\u5199\u5728\u51FD\u6570\u9876\u5C42\u5417?","slug":"useeffect-\u4E00\u5B9A\u8981\u5199\u5728\u51FD\u6570\u9876\u5C42\u5417","link":"#useeffect-\u4E00\u5B9A\u8981\u5199\u5728\u51FD\u6570\u9876\u5C42\u5417","children":[]},{"level":3,"title":"useEffect \u53EF\u4EE5\u5199 async \u5417","slug":"useeffect-\u53EF\u4EE5\u5199-async-\u5417","link":"#useeffect-\u53EF\u4EE5\u5199-async-\u5417","children":[]},{"level":3,"title":"\u5982\u679C\u6709\u591A\u4E2A\u903B\u8F91\uFF0C\u4F7F\u7528\u591A\u4E2A useEffect \u8FD8\u662F\u4E00\u4E2A useEffect","slug":"\u5982\u679C\u6709\u591A\u4E2A\u903B\u8F91\uFF0C\u4F7F\u7528\u591A\u4E2A-useeffect-\u8FD8\u662F\u4E00\u4E2A-useeffect","link":"#\u5982\u679C\u6709\u591A\u4E2A\u903B\u8F91\uFF0C\u4F7F\u7528\u591A\u4E2A-useeffect-\u8FD8\u662F\u4E00\u4E2A-useeffect","children":[]}]},{"level":2,"title":"useEffect \u672A\u6765\u53D1\u5C55","slug":"useeffect-\u672A\u6765\u53D1\u5C55","link":"#useeffect-\u672A\u6765\u53D1\u5C55","children":[{"level":3,"title":"useEffect \u4F9D\u8D56\u9879\u662F\u5FC5\u586B\u7684\u5417","slug":"useeffect-\u4F9D\u8D56\u9879\u662F\u5FC5\u586B\u7684\u5417","link":"#useeffect-\u4F9D\u8D56\u9879\u662F\u5FC5\u586B\u7684\u5417","children":[]}]},{"level":2,"title":"\u603B\u7ED3","slug":"\u603B\u7ED3","link":"#\u603B\u7ED3","children":[]},{"level":2,"title":"\u53C2\u8003\u6587\u7AE0","slug":"\u53C2\u8003\u6587\u7AE0","link":"#\u53C2\u8003\u6587\u7AE0","children":[]}],"relativePath":"react/useEffect/index.md"}'),o={name:"react/useEffect/index.md"},c=l("",72),r=[c];function t(F,y,D,C,A,i){return a(),n("div",null,r)}const d=s(o,[["render",t]]);export{b as __pageData,d as default};