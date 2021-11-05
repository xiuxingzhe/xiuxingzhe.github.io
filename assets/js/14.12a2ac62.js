(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{179:function(e,t,s){"use strict";s.r(t);var n=s(0),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),s("ol",[s("li",[e._v("什么是package.json？简单地说：就是管理npm包的文件，包含了项目所依赖的npm包、项目的配置信息。")]),e._v(" "),s("li",[e._v("创建方式：npm init，按照系统提示填写相关信息即可（回车设置为空）。")]),e._v(" "),s("li",[e._v("具体配置说明，详见"),s("a",{attrs:{href:"http://blog.csdn.net/woxueliuyun/article/details/39294375",target:"_blank",rel:"noopener noreferrer"}},[e._v("package.json字段全解"),s("OutboundLink")],1)])]),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("升级了Node.js v8.0后，自带的npm也升级到了5.0,那么 npm5有什么变化呢?")]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),s("p",[e._v("我们先来看一段"),s("a",{attrs:{href:"https://docs.npmjs.com/files/package-lock.json",target:"_blank",rel:"noopener noreferrer"}},[e._v("官方解释"),s("OutboundLink")],1)]),e._v(" "),e._m(5),e._v(" "),s("p",[e._v("大致意思：\npackage-lock.json是当 node_modules 或 package.json 发生变化时自动生成的文件。它记录了整个 node_modules 文件夹的树状结构，甚至连模块的下载地址都记录了，重新安装时只需下载文件即可。因此重装模块速度非常快。")]),e._v(" "),s("p",[e._v("然而，npm5.0在提升速度的同时也挖了一个大大的坑：")]),e._v(" "),e._m(6),e._v(" "),s("p",[e._v("直接执行 ==npm install== 时，如果不存在 package-lock.json 文件，它会根据安装模块后的 node_modules 目录结构来创建；\n如果已经存在 package-lock.json 文件，则它只会根据 package-lock.json 文件指定的结构来下载模块，并不会理会 package.json 文件。")]),e._v(" "),s("p",[e._v("目前GitHub上已有相关issue了：https://github.com/npm/npm/issues/16866")]),e._v(" "),s("p",[e._v("【参考文档】")]),e._v(" "),e._m(7)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"npm5-0新增package-lock-json文件挖的坑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#npm5-0新增package-lock-json文件挖的坑"}},[this._v("#")]),this._v(" npm5.0新增package-lock."),t("strong",[this._v("json")]),this._v("文件挖的坑")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"一、从package-json说起"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、从package-json说起"}},[this._v("#")]),this._v(" 一、从package.json说起")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"二、npm5-0的变化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、npm5-0的变化"}},[this._v("#")]),this._v(" 二、npm5.0的变化")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("使用 ==npm install xxx== 命令安装模块时，不再需要 ==--save== 选项，会自动将模块依赖信息保存到 package.json 文件；")]),e._v(" "),s("li",[e._v("安装模块操作（改变 node_modules 文件夹内容）会生成或更新 package-lock.json 文件")]),e._v(" "),s("li",[e._v("发布的模块不会包含 "),s("strong",[e._v("package-lock.json")]),e._v(" 文件")]),e._v(" "),s("li",[e._v("如果手动修改了 package.json 文件中已有模块的版本，直接执行 ==npm install== 不会安装新指定的版本，只能通过 ==npm install name@version== 更新")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"三、package-lock-json的含义-npm5的坑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、package-lock-json的含义-npm5的坑"}},[this._v("#")]),this._v(" 三、package-lock.json的含义&npm5的坑")])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("package-lock.json is automatically generated for any operations where npm modifies either the node_modules tree, or package.json. It describes the exact tree that was generated, such that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("以后修改 package.json 文件相应模块的版本号，再执行 ==npm install== 不会更新了，只能手动 ==npm install name@version== 指定版本号来安装。\n然后它会自动更新 package-lock.json 文件。")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("https://docs.npmjs.com/files/package.json")]),this._v(" "),t("li",[this._v("http://blog.csdn.net/zmrdlb/article/details/53190696")]),this._v(" "),t("li",[this._v("http://blog.csdn.net/aaa333qwe/article/details/78021704")]),this._v(" "),t("li",[this._v("https://docs.npmjs.com/files/package-lock.json")])])}],!1,null,null,null);t.default=a.exports}}]);