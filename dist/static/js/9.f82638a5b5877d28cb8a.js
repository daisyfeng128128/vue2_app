webpackJsonp([9,14],{140:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"newFriend-page",methods:{goBack:function(){window.history.back()}}}},174:function(n,e,t){e=n.exports=t(50)(),e.push([n.i,".newFriend[data-v-91166cfe]{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.newFriend .header-btn-nav[data-v-91166cfe]{width:100%;height:40px;line-height:40px;padding-left:20px;box-sizing:border-box;border-bottom:1px solid #d9d9d9}.newFriend .header-btn-nav .goBack[data-v-91166cfe]{color:#1397f4}.newFriend .newFriend-content[data-v-91166cfe]{width:100%;-webkit-box-flex:1;-ms-flex:1;flex:1;padding:15px;box-sizing:border-box;background:#f7f7f7}.newFriend .newFriend-content ul .newFriend-list[data-v-91166cfe]{width:100%;height:120px;border-radius:5px;background:#fff;box-shadow:0 0 3px 3px hsla(0,0%,85%,.4);padding:0 25px;box-sizing:border-box}.newFriend .newFriend-content ul .newFriend-list .newFriend-list-top[data-v-91166cfe]{height:80px;padding-top:20px}.newFriend .newFriend-content ul .newFriend-list .newFriend-list-top span[data-v-91166cfe]{display:inline-block;float:left}.newFriend .newFriend-content ul .newFriend-list .newFriend-list-top span[data-v-91166cfe]:first-of-type{width:42px;height:42px;border-radius:50%;background:green;color:#fff;font-size:13px;text-align:center;line-height:42px;margin-right:15px}.newFriend .newFriend-content ul .newFriend-list .newFriend-list-top span[data-v-91166cfe]:nth-of-type(2){margin-top:10px}.newFriend .newFriend-content ul .newFriend-list .newFriend-list-top span[data-v-91166cfe]:nth-of-type(3){width:55px;height:25px;background:#38adff;text-align:center;line-height:25px;color:#fff;border-radius:5px;font-size:12px;float:right;margin-top:9px}.newFriend .newFriend-content ul .newFriend-list .newFriend-list-top span:nth-of-type(3) a[data-v-91166cfe]{text-decoration:none!important;color:#fff}.newFriend .newFriend-content ul .newFriend-list .newFriend-from[data-v-91166cfe]{text-align:center;font-size:13px;color:#b0b0b0}","",{version:3,sources:["/Users/levo/Web/project/vue2_app/src/pages/main/newFriend.vue"],names:[],mappings:"AACA,4BACE,WAAY,AACZ,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,qBAAuB,CAChC,AACD,4CACI,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,sBAAuB,AACvB,+BAAiC,CACpC,AACD,oDACM,aAAe,CACpB,AACD,+CACI,WAAY,AACZ,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,aAAc,AACd,sBAAuB,AACvB,kBAAoB,CACvB,AACD,kEACM,WAAY,AACZ,aAAc,AACd,kBAAmB,AACnB,gBAAiB,AACjB,yCAAqD,AACrD,eAAgB,AAChB,qBAAuB,CAC5B,AACD,sFACQ,YAAa,AACb,gBAAkB,CACzB,AACD,2FACU,qBAAsB,AACtB,UAAY,CACrB,AACD,yGACY,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,iBAAkB,AAClB,WAAY,AACZ,eAAgB,AAChB,kBAAmB,AACnB,iBAAkB,AAClB,iBAAmB,CAC9B,AACD,0GACY,eAAiB,CAC5B,AACD,0GACY,WAAY,AACZ,YAAa,AACb,mBAAoB,AACpB,kBAAmB,AACnB,iBAAkB,AAClB,WAAY,AACZ,kBAAmB,AACnB,eAAgB,AAChB,YAAa,AACb,cAAgB,CAC3B,AACD,4GACc,+BAAiC,AACjC,UAAY,CACzB,AACD,kFACQ,kBAAmB,AACnB,eAAgB,AAChB,aAAe,CACtB",file:"newFriend.vue",sourcesContent:["\n.newFriend[data-v-91166cfe] {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n.newFriend .header-btn-nav[data-v-91166cfe] {\n    width: 100%;\n    height: 40px;\n    line-height: 40px;\n    padding-left: 20px;\n    box-sizing: border-box;\n    border-bottom: 1px solid #D9D9D9;\n}\n.newFriend .header-btn-nav .goBack[data-v-91166cfe] {\n      color: #1397F4;\n}\n.newFriend .newFriend-content[data-v-91166cfe] {\n    width: 100%;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    padding: 15px;\n    box-sizing: border-box;\n    background: #F7F7F7;\n}\n.newFriend .newFriend-content ul .newFriend-list[data-v-91166cfe] {\n      width: 100%;\n      height: 120px;\n      border-radius: 5px;\n      background: #fff;\n      box-shadow: 0px 0px 3px 3px rgba(217, 217, 217, 0.4);\n      padding: 0 25px;\n      box-sizing: border-box;\n}\n.newFriend .newFriend-content ul .newFriend-list .newFriend-list-top[data-v-91166cfe] {\n        height: 80px;\n        padding-top: 20px;\n}\n.newFriend .newFriend-content ul .newFriend-list .newFriend-list-top span[data-v-91166cfe] {\n          display: inline-block;\n          float: left;\n}\n.newFriend .newFriend-content ul .newFriend-list .newFriend-list-top span[data-v-91166cfe]:nth-of-type(1) {\n            width: 42px;\n            height: 42px;\n            border-radius: 50%;\n            background: green;\n            color: #fff;\n            font-size: 13px;\n            text-align: center;\n            line-height: 42px;\n            margin-right: 15px;\n}\n.newFriend .newFriend-content ul .newFriend-list .newFriend-list-top span[data-v-91166cfe]:nth-of-type(2) {\n            margin-top: 10px;\n}\n.newFriend .newFriend-content ul .newFriend-list .newFriend-list-top span[data-v-91166cfe]:nth-of-type(3) {\n            width: 55px;\n            height: 25px;\n            background: #38ADFF;\n            text-align: center;\n            line-height: 25px;\n            color: #fff;\n            border-radius: 5px;\n            font-size: 12px;\n            float: right;\n            margin-top: 9px;\n}\n.newFriend .newFriend-content ul .newFriend-list .newFriend-list-top span:nth-of-type(3) a[data-v-91166cfe] {\n              text-decoration: none !important;\n              color: #fff;\n}\n.newFriend .newFriend-content ul .newFriend-list .newFriend-from[data-v-91166cfe] {\n        text-align: center;\n        font-size: 13px;\n        color: #b0b0b0;\n}\n"],sourceRoot:""}])},237:function(n,e,t){var i=t(174);"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);t(51)("694bce84",i,!0)},257:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"newFriend"},[t("div",{staticClass:"header-btn-nav",attrs:{id:"header-btn-nav"}},[t("span",{staticClass:"goBack",on:{click:n.goBack}},[n._v("<")]),n._v("\n\t\t   新的好友\n\t")]),n._v(" "),t("div",{staticClass:"newFriend-content"},[t("ul",[t("li",{staticClass:"newFriend-list"},[t("p",{staticClass:"newFriend-list-top"},[t("span",[n._v("小明")]),n._v(" "),t("span",[n._v("王小明")]),n._v(" "),t("span",[t("router-link",{attrs:{to:""}},[t("b",[n._v("添加")])])],1)]),n._v(" "),t("p",{staticClass:"newFriend-from"},[n._v("[手机联系人]王小明")])])])])])},staticRenderFns:[]}},62:function(n,e,t){t(237);var i=t(19)(t(140),t(257),"data-v-91166cfe",null);n.exports=i.exports}});
//# sourceMappingURL=9.f82638a5b5877d28cb8a.js.map