webpackJsonp([13],{

/***/ 756:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(757)
	__vue_script__ = __webpack_require__(758)
	__vue_template__ = __webpack_require__(759)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\cloud-vue\\src\\components\\taskList.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 757:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 758:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _stringify = __webpack_require__(116);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _tree = __webpack_require__(125);
	
	var _tree2 = _interopRequireDefault(_tree);
	
	__webpack_require__(131);
	
	var _alertmsg = __webpack_require__(94);
	
	var _alertmsg2 = _interopRequireDefault(_alertmsg);
	
	var _actions = __webpack_require__(108);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <style lang = "sass">
	// #taskprogress{
	//     width: 90%;
	//     margin-bottom: 2px;
	// }
	//
	// #taskbtn{
	//     top: 0;
	//
	// }
	//
	//
	//
	//
	// </style>
	// <template>
	// <div class="ol_p">
	//   <div class="main-resource-data clearfix ol_c">
	//     <!-- 文件 -->
	//     <template v-for="mydata in datas"  track-by="$index">
	//       <div class="row main-resource-row-data" @click.stop="openNewfolder(mydata,$index)">
	//
	//         <div class=" col-md-1 col-sm-1 col-xs-1">
	//           <span class="ol_worldbreak">tGHL56356</span>
	//         </div>
	//         <div class=" col-md-1 col-sm-1 col-xs-1">
	//          <span>a20162356</span>
	//
	//
	//
	//         </div>
	//
	//         <div class=" col-md-1 col-sm-1 col-xs-1">
	//
	//           <span class="ol_worldbreak">自定义排序</span>
	//         </div>
	//
	//         <div class=" col-md-1 col-sm-1 col-xs-1">
	//
	//           <span class="ol_worldbreak">home/bmk</span>
	//         </div>
	//         <div class=" col-md-2 col-sm-2 col-xs-2">
	//
	//          <span class="ol_worldbreak">2016年9月20日14:09:57</span>
	//         </div>
	//
	//          <div class=" col-md-2 col-sm-2 col-xs-2">
	//
	//          <span class="ol_worldbreak">2016年9月20日14:09:57</span>
	//         </div>
	//
	//         <div class=" col-md-2 col-sm-2 col-xs-2">
	//
	//          <span class="ol_worldbreak">2016年9月20日14:09:57</span>
	//         </div>
	//
	//         <div class=" col-md-1 col-sm-1 col-xs-1">
	//
	//
	//            <div><button type="button" class="btn btn-primary btn-xs " id="taskbtn">终止</button></div>
	//
	//            <div class="progress progress-striped active " id="taskprogress">
	//             <div class="progress-bar progress-bar-success" role="progressbar" 
	//                 aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" 
	//                 style="width: 40%;">
	//               <span class="sr-only">40% 完成</span>
	//             </div>
	//           </div>
	//
	//         </div>
	//         <div class=" col-md-1 col-sm-1 col-xs-1">
	//
	//          <p><button type="button" class="btn btn-default btn-xs" id="taskbtn"><i class="icon-trash" ></i>预览</button></p>
	//         </div>
	//
	//
	//         <div class="clearfix visible-xs"></div>
	//
	//       </div>
	//       <!-- 弹窗 --> </template>
	//
	//   </div>
	// </div>
	//   <tree-grid v-bind:style="{visibility:showchange}" ></tree-grid>
	//   <modal :show.sync="showModal">
	//     <h3 slot="header">您好</h3>
	//     <h3 slot="body">请您选择一个文件</h3>
	//   </modal>
	//
	// </template>
	// <script>
	exports.default = {
	
	  vuex: {
	    getters: {
	      datas: function datas(_ref) {
	        var mResorce = _ref.mResorce;
	        return mResorce.datas;
	      },
	      userId: function userId(_ref2) {
	        var mResorce = _ref2.mResorce;
	        return mResorce.userId;
	      },
	      isChoseAllfile: function isChoseAllfile(_ref3) {
	        var mResorce = _ref3.mResorce;
	        return mResorce.isChoseAllfile;
	      }, //全选
	      key: function key(_ref4) {
	        var mResorce = _ref4.mResorce;
	        return mResorce.addDatas.length;
	      }
	    },
	
	    actions: {
	      getResource: _actions.getResource, //获取元数据
	      chosefile: _actions.chosefile }
	  },
	  components: {
	    treeGrid: _tree2.default,
	    modal: _alertmsg2.default
	  },
	  data: function data() {
	    return {
	      totalTime: null,
	      files: [], //文件
	      childFolders: [], //文件夹
	
	      myinputValue: null, //修改name 的value
	      isshowicon: true, //是否修改name
	      folderId: null, // 修改名字的文件夹Id
	      mydatas: null, //数组中的单个文件
	      isdisabledIcon: false, //禁止使用重命名
	      choseArr: [], //单选数组
	      iscreatNewfolder: false,
	
	      ///////////////////////没有重置////////////////////
	      istreeshow: true, //文件树显示
	      showchange: 'hidden',
	      showModal: false
	
	    };
	  },
	
	
	  props: [
	  //'mychosekey',//全选
	  "listoperation", "isdatecreatnewfolder"],
	
	  ready: function ready() {
	    //this.getresource(this.user.name)
	
	    var height = $(window).height() - $('.main-contant').outerHeight(true) - $(".breadcrumb").outerHeight(true) - $(".main-resource-title").outerHeight(true) - $(".my-data-select").outerHeight(true);
	
	    $('.main-resource-data').slimscroll({
	      height: height,
	      width: 'auto', //可滚动区域宽度
	      size: '8px', //组件宽度
	      opacity: .3, //滚动条透明度
	      distance: '0px', //组件与侧边之间的距离
	      railColor: '#333', //轨道颜色
	      railOpacity: .2, //轨道透明度
	      railDraggable: true });
	  },
	  created: function created() {
	
	    this.getResource(this, this.userId); //主动触发需要提供vm
	  },
	
	
	  events: {
	    /*choseButtonClik (value) {
	      this.choseAllinput(value)
	     
	    },*/
	
	    titleRename: function titleRename() {
	      //重命名
	      if (this.choseArr.length === 0) {
	        this.myalert();
	
	        return false;
	      } else {
	        var index = this.choseArr[0];
	        var mydatas = this.datas[index];
	        this.renameFolder(mydatas, index);
	      }
	    },
	    creatOneFolder: function creatOneFolder() {
	      this.iscreatNewfolder = true; //新建文件key
	      this.isdatecreatnewfolder = true; //新建文件夹置灰
	      this.creatNewfolder(); //新建文件夹
	    },
	    closeTree: function closeTree() {
	      //显示tree
	      this.showchange = "hidden";
	      this.istreeshow = !this.istreeshow;
	      //this.dalistexchangeforder = false
	    },
	    exchangeforderfn: function exchangeforderfn() {
	      //移动文件
	      if (this.choseArr.length === 0) {
	        this.myalert();
	        //alert("请选择一个文件")
	        return false;
	      } else {
	
	        this.showTree();
	        //this.dalistexchangeforder = true
	      }
	    }
	  },
	  methods: {
	
	    /*文件夹重命名*/
	    renameFolder: function renameFolder(mydatas, index) {
	      if (this.isdisabledIcon) {
	        return false;
	      }
	      this.isshowicon = false; //隐藏图标
	      this.myinputValue = mydatas.name;
	      this.folderId = mydatas.folderId;
	      this.mydatas = mydatas;
	      var myObject = JSON.parse((0, _stringify2.default)(mydatas));
	      myObject.isfolderIsShowNameKey = true;
	      this.datas.$set(index, myObject);
	
	      /*var replace = this.datas.splice(index,1); //
	          replace.isfolderIsShowNameKey = true
	          replace.createTime = mydatas.createTime
	          this.datas.splice(index,0,replace); */
	    },
	
	
	    /*确认重命名文件夹名称 */
	    oktrenameFolder: function oktrenameFolder(el, index) {
	      if (!this.iscreatNewfolder) {
	        // 重命名文件夹
	        var name = this.myinputValue,
	            folderId = this.folderId,
	            _this = this;
	
	        this.$http.get('./FolderAction!RenameFolder?id=' + folderId + '&name=' + name).then(function (ret) {
	          console.log(ret);
	          alert('成功');
	          /*重置*/
	          _this.folderId = null;
	          _this.myinputValue = null;
	
	          var myObject = JSON.parse((0, _stringify2.default)(this.datas[index]));
	          myObject.isfolderIsShowNameKey = false;
	          myObject.name = name;
	          this.datas.$set(index, myObject);
	
	          /*    修改名字
	          var replace = this.datas.splice(index,1); 
	              replace.name = name
	              replace.isfolderIsShowNameKey = false
	              this.datas.splice(index,0,replace); */
	
	          this.isshowicon = true; //隐藏图标
	        }).then(function (err) {
	          console.log(err);
	        });
	      } else {
	        // 新建文件夹
	        console.log(this.myinputValue);
	        console.log(this.folderId);
	        var name = this.myinputValue,
	            folderId = this.folderId,
	            _this = this;
	
	        this.$http.get('./FolderAction!NewFolder?parentFolderId=' + folderId + '&name=' + name + '&testProperty=' + " ").then(function (ret) {
	          console.log(ret);
	          alert('成功');
	          /*重置*/
	          _this.folderId = null;
	          _this.myinputValue = null;
	          _this.iscreatNewfolder = false;
	          _this.isdatecreatnewfolder = false; //恢复新建文件夹
	
	          var myObject = JSON.parse((0, _stringify2.default)(this.datas[index])),
	              tody = new Date();
	          myObject.name = name;
	          myObject.isfolderIsShowNameKey = false;
	          myObject.createTime = tody.getFullYear() + "-" + (tody.getMonth() + 1) + "-" + tody.getDate() + "     " + tody.getHours() + ":" + tody.getMinutes() + ":" + tody.getSeconds();
	          this.datas.$set(index, myObject);
	
	          /*    //修改名字/
	          var replace = this.datas.splice(index,1),
	              tody = new Date();
	              replace.name = name
	              replace.isfolderIsShowNameKey = false
	                replace.createTime = tody.getFullYear()+ "-"+ (tody.getMonth()+1) +"-" + tody.getDate()+  "     "  +tody.getHours() +":"+ tody.getMinutes() + ":"+ tody.getSeconds()
	              this.datas.splice(index,0,replace);*/
	          this.isshowicon = true; //隐藏图标
	        }).then(function (err) {
	          console.log(err);
	        });
	      }
	    },
	
	
	    /*不重命名文件夹名称 */
	    notrenameFolder: function notrenameFolder(index) {
	      if (!this.iscreatNewfolder) {
	
	        var myObject = JSON.parse((0, _stringify2.default)(this.datas[index]));
	        myObject.isfolderIsShowNameKey = false;
	        this.datas.$set(index, myObject);
	
	        /* var replace = this.datas.splice(index,1); //
	             replace.isfolderIsShowNameKey = false;
	             replace.name =this.mydatas.name;
	             replace.createTime = this.mydatas.createTime;
	             this.datas.splice(index,0,replace); 
	            */
	      } else {
	        this.datas.splice(index, 1);
	        this.iscreatNewfolder = false;
	        this.isdatecreatnewfolder = false; //恢复文件夹置灰
	      }
	
	      /* 重置*/
	      this.myinputValue = null;
	      this.folderId = null;
	      this.mydatas = null;
	      this.isshowicon = true; //显示
	    },
	
	    /////////////////////////////////////////////////////////////////////////////////
	
	    /*全选按钮操作*/
	    choseAllinput: function choseAllinput(value) {
	      if (true === value) {
	        for (var i = 0; i < this.datas.length; i++) {
	          if (!this.choseArr.includes(i)) {
	            this.choseArr.push(i);
	          }
	        }
	      } else {
	        console.log(this.key);
	        if (!this.key) {
	
	          this.choseArr.splice(0, this.choseArr.length);
	        }
	      }
	    },
	    creatNewfolder: function creatNewfolder() {
	      var newObj = {},
	          index = 0;
	      newObj.folderId = this.userId;
	      console.log(newObj.folderId);
	      newObj.createTime = "---";
	      newObj.name = "新建文件夹";
	      this.datas.unshift(newObj);
	      var mydatas = this.datas[0];
	
	      this.renameFolder(mydatas, index);
	    },
	    openNewfolder: function openNewfolder(mydata, index) {
	
	      var folderId = mydata.folderId;
	      this.user.name = folderId;
	      console.log(this.user.name);
	      this.choseArr = [], //单选数组
	      this._reset();
	      this.getresource(folderId);
	    },
	    showTree: function showTree() {
	      if (this.istreeshow) {
	        this.showchange = "visible";
	        this.istreeshow = !this.istreeshow;
	        console.log(this.istreeshow);
	      } else {}
	    },
	    myalert: function myalert() {
	
	      this.showModal = true;
	    },
	    _reset: function _reset() {
	      this.datas = []; //总数据
	      this.files = []; //文件
	      this.childFolders = []; //文件夹`
	      this.childFolders = []; //文件夹`
	      this.myinputValue = null; //修改name 的value
	      this.isshowicon = true; //是否修改name
	      this.folderId = null; // 修改名字的文件夹Id
	      this.mydatas = null; //数组中的单个文件
	      this.isdisabledIcon = false; //禁止使用重命名
	      this.iscreatNewfolder = false;
	      this.listoperation = false;
	      this.isdatecreatnewfolder = false;
	    }
	  },
	  watch: {
	    isChoseAllfile: function isChoseAllfile(value) {
	      console.log(value);
	      this.choseAllinput(value);
	    },
	    choseArr: function choseArr() {
	      /* if((this.choseArr.length === this.datas.length) && this.choseArr.length != 0 ){
	          //执行全选
	         
	        }else{
	          //this.mychosekey =false
	          }
	      */
	      //控制移动和重命名的按钮
	      //取消移动和重命名的操作
	      //重命名图标操作
	      if (this.choseArr.length > 1) {
	        this.listoperation = true;
	        this.isdisabledIcon = true;
	      } else {
	        this.listoperation = false;
	        this.isdisabledIcon = false;
	      }
	    }
	  }
	
	};
	
	// </script>
	/* generated by vue-loader */


	//vuex 取数据
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 759:
/***/ function(module, exports) {

	module.exports = "\r\n<div class=\"ol_p\">\r\n  <div class=\"main-resource-data clearfix ol_c\">\r\n    <!-- 文件 -->\r\n    <template v-for=\"mydata in datas\"  track-by=\"$index\">\r\n      <div class=\"row main-resource-row-data\" @click.stop=\"openNewfolder(mydata,$index)\">\r\n\r\n        <div class=\" col-md-1 col-sm-1 col-xs-1\">\r\n          <span class=\"ol_worldbreak\">tGHL56356</span>\r\n        </div>\r\n        <div class=\" col-md-1 col-sm-1 col-xs-1\">\r\n         <span>a20162356</span>\r\n\r\n          \r\n\r\n        </div>\r\n\r\n        <div class=\" col-md-1 col-sm-1 col-xs-1\">\r\n\r\n          <span class=\"ol_worldbreak\">自定义排序</span>\r\n        </div>\r\n\r\n        <div class=\" col-md-1 col-sm-1 col-xs-1\">\r\n\r\n          <span class=\"ol_worldbreak\">home/bmk</span>\r\n        </div>\r\n        <div class=\" col-md-2 col-sm-2 col-xs-2\">\r\n\r\n         <span class=\"ol_worldbreak\">2016年9月20日14:09:57</span>\r\n        </div>\r\n\r\n         <div class=\" col-md-2 col-sm-2 col-xs-2\">\r\n\r\n         <span class=\"ol_worldbreak\">2016年9月20日14:09:57</span>\r\n        </div>\r\n\r\n        <div class=\" col-md-2 col-sm-2 col-xs-2\">\r\n\r\n         <span class=\"ol_worldbreak\">2016年9月20日14:09:57</span>\r\n        </div>\r\n\r\n        <div class=\" col-md-1 col-sm-1 col-xs-1\">\r\n\r\n         \r\n           <div><button type=\"button\" class=\"btn btn-primary btn-xs \" id=\"taskbtn\">终止</button></div>\r\n\r\n           <div class=\"progress progress-striped active \" id=\"taskprogress\">\r\n            <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" \r\n                aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" \r\n                style=\"width: 40%;\">\r\n              <span class=\"sr-only\">40% 完成</span>\r\n            </div>\r\n          </div>\r\n         \r\n        </div>\r\n        <div class=\" col-md-1 col-sm-1 col-xs-1\">\r\n\r\n         <p><button type=\"button\" class=\"btn btn-default btn-xs\" id=\"taskbtn\"><i class=\"icon-trash\" ></i>预览</button></p>\r\n        </div>\r\n\r\n\r\n        <div class=\"clearfix visible-xs\"></div>\r\n\r\n      </div>\r\n      <!-- 弹窗 --> </template>\r\n\r\n  </div>\r\n</div>\r\n  <tree-grid v-bind:style=\"{visibility:showchange}\" ></tree-grid>\r\n  <modal :show.sync=\"showModal\">\r\n    <h3 slot=\"header\">您好</h3>\r\n    <h3 slot=\"body\">请您选择一个文件</h3>\r\n  </modal>\r\n\r\n";

/***/ },

/***/ 760:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(761)
	__vue_template__ = __webpack_require__(762)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\cloud-vue\\src\\components\\taskchosetitle.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 761:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _data = __webpack_require__(14);
	
	var _data2 = _interopRequireDefault(_data);
	
	var _actions = __webpack_require__(108);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <style lang = "sass"></style>
	// <template>
	//   <div class="row  main-resource-title" >
	//     <div class=" col-md-1 col-sm-1 col-xs-1"> <b class="ol_worldbreak">任务编号</b>
	//
	//     </div>
	//     <div class=" col-md-1 col-sm-1 col-xs-1">
	//
	//       <p> <b class="ol_worldbreak">任务名称</b>
	//       </p>
	//     </div>
	//
	//     <div class=" col-md-1 col-sm-1 col-xs-1">
	//
	//       <p>
	//         <b class="ol_worldbreak">软件名称</b>
	//       </p>
	//     </div>
	//
	//     <div class=" col-md-1 col-sm-1 col-xs-1">
	//       <p>
	//         <b class="ol_worldbreak">输入文件</b>
	//       </p>
	//
	//     </div>
	//
	//     <div class=" col-md-2 col-sm-2 col-xs-2">
	//
	//       <p>
	//         <b class="ol_worldbreak">提交时间</b>
	//       </p>
	//     </div>
	//
	//     <div class=" col-md-2 col-sm-2 col-xs-2">
	//
	//       <p>
	//         <b class="ol_worldbreak">结束时间</b>
	//       </p>
	//     </div>
	//
	//     <div class=" col-md-2 col-sm-2 col-xs-2">
	//
	//       <p>
	//         <b class="ol_worldbreak">预计结束时间</b>
	//       </p>
	//     </div>
	//     <div class=" col-md-1 col-sm-1 col-xs-1">
	//
	//       <p>
	//         <div class="btn-group">
	//           <button type="button" class="btn btn-default btn-sm">全部</button>
	//           <button type="button" class="btn btn-default  btn-sm dropdown-toggle" 
	//         data-toggle="dropdown">
	//             <span class="caret"></span>
	//             <span class="sr-only">全部</span>
	//           </button>
	//           <ul class="dropdown-menu" role="menu">
	//             <li>
	//               <a href="#">完成</a>
	//             </li>
	//             <li>
	//               <a href="#">运行中</a>
	//             </li>
	//             <li>
	//               <a href="#">终止</a>
	//             </li>
	//
	//             <li>
	//               <a href="#">报错</a>
	//             </li>
	//             <li>
	//               <a href="#">资源准备中</a>
	//             </li>
	//             <li>
	//               <a href="#">暂停</a>
	//             </li>
	//           </ul>
	//         </div>
	//       </p>
	//     </div>
	//
	//     <div class=" col-md-1 col-sm-1 col-xs-1">
	//
	//       <p>
	//         <b class="ol_worldbreak">操作</b>
	//       </p>
	//     </div>
	//   </div>
	//
	// </template>
	// <script>
	
	exports.default = {
	  vuex: {
	    getters: {
	      isChoseAll: function isChoseAll(_ref) {
	        var mResorce = _ref.mResorce;
	        return mResorce.addDatas.length === mResorce.datas.length;
	      }
	    },
	    actions: {
	      choseAllfile: _actions.choseAllfile
	
	    }
	  },
	  components: {},
	  props: [],
	  ready: function ready() {
	    /* this.$http.get('http://localhost:8888/time')
	       .then(function(ret) {
	         this.totalTime = ret.data.time;
	       })
	       .then(function(err) {
	         console.log(err);
	       })*/
	  },
	  data: function data() {
	    return {
	      isChoseAllkey: false
	    };
	  },
	
	  events: {
	    timeUpdate: function timeUpdate(timeEntry) {
	      console.log(timeEntry);
	      this.totalTime += parseFloat(timeEntry.totalTime);
	    },
	    deleteTime: function deleteTime(timeEntry) {
	      this.totalTime -= parseFloat(timeEntry.totalTime);
	    }
	  },
	  methods: {
	    mychosefn: function mychosefn() {
	      /* console.log(this.isChoseAll)*/
	      this.choseAllfile(this.isChoseAll);
	      /* if(this.isChoseAll){
	         }else {// 全选
	         this.choseAllfile()
	       }*/
	      //this.$dispatch("choseButtonClik",this.isChoseAll)
	    },
	    changkey: function changkey(value) {
	      this.isChoseAllkey = value;
	    }
	  },
	
	  watch: {
	    isChoseAll: function isChoseAll(value) {
	      this.changkey(value);
	    }
	
	  }
	};
	// </script>
	/* generated by vue-loader */

	//import { isChoseAll } from '../vuex/getters'

/***/ },

/***/ 762:
/***/ function(module, exports) {

	module.exports = "\r\n  <div class=\"row  main-resource-title\" >\r\n    <div class=\" col-md-1 col-sm-1 col-xs-1\"> <b class=\"ol_worldbreak\">任务编号</b>\r\n\r\n    </div>\r\n    <div class=\" col-md-1 col-sm-1 col-xs-1\">\r\n\r\n      <p> <b class=\"ol_worldbreak\">任务名称</b>\r\n      </p>\r\n    </div>\r\n\r\n    <div class=\" col-md-1 col-sm-1 col-xs-1\">\r\n\r\n      <p>\r\n        <b class=\"ol_worldbreak\">软件名称</b>\r\n      </p>\r\n    </div>\r\n\r\n    <div class=\" col-md-1 col-sm-1 col-xs-1\">\r\n      <p>\r\n        <b class=\"ol_worldbreak\">输入文件</b>\r\n      </p>\r\n\r\n    </div>\r\n\r\n    <div class=\" col-md-2 col-sm-2 col-xs-2\">\r\n\r\n      <p>\r\n        <b class=\"ol_worldbreak\">提交时间</b>\r\n      </p>\r\n    </div>\r\n\r\n    <div class=\" col-md-2 col-sm-2 col-xs-2\">\r\n\r\n      <p>\r\n        <b class=\"ol_worldbreak\">结束时间</b>\r\n      </p>\r\n    </div>\r\n\r\n    <div class=\" col-md-2 col-sm-2 col-xs-2\">\r\n\r\n      <p>\r\n        <b class=\"ol_worldbreak\">预计结束时间</b>\r\n      </p>\r\n    </div>\r\n    <div class=\" col-md-1 col-sm-1 col-xs-1\">\r\n\r\n      <p>\r\n        <div class=\"btn-group\">\r\n          <button type=\"button\" class=\"btn btn-default btn-sm\">全部</button>\r\n          <button type=\"button\" class=\"btn btn-default  btn-sm dropdown-toggle\" \r\n        data-toggle=\"dropdown\">\r\n            <span class=\"caret\"></span>\r\n            <span class=\"sr-only\">全部</span>\r\n          </button>\r\n          <ul class=\"dropdown-menu\" role=\"menu\">\r\n            <li>\r\n              <a href=\"#\">完成</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\">运行中</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\">终止</a>\r\n            </li>\r\n\r\n            <li>\r\n              <a href=\"#\">报错</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\">资源准备中</a>\r\n            </li>\r\n            <li>\r\n              <a href=\"#\">暂停</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </p>\r\n    </div>\r\n\r\n    <div class=\" col-md-1 col-sm-1 col-xs-1\">\r\n\r\n      <p>\r\n        <b class=\"ol_worldbreak\">操作</b>\r\n      </p>\r\n    </div>\r\n  </div>\r\n\r\n";

/***/ },

/***/ 793:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__vue_script__ = __webpack_require__(794)
	__vue_template__ = __webpack_require__(799)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\cloud-vue\\src\\components\\dataSatistics.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 794:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _personalInforTitle = __webpack_require__(10);
	
	var _personalInforTitle2 = _interopRequireDefault(_personalInforTitle);
	
	var _datastatisticsDe = __webpack_require__(795);
	
	var _datastatisticsDe2 = _interopRequireDefault(_datastatisticsDe);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <style lang = "sass"></style>
	// <template>
	//   <section  class="main-contant">
	//
	//     <personal-infor></personal-infor>
	//   </section>
	//   <section class="main-resource">
	//     <datastatistics></datastatistics>
	//
	//   </section>
	// </template>
	// <script>
	
	exports.default = {
	  components: {
	    personalInfor: _personalInforTitle2.default,
	    datastatistics: _datastatisticsDe2.default
	  },
	  ready: function ready() {},
	  data: function data() {
	    return {
	      totalTime: 0
	
	    };
	  },
	
	  events: {}
	};
	// </script>
	/* generated by vue-loader */

/***/ },

/***/ 795:
/***/ function(module, exports, __webpack_require__) {

	var __vue_script__, __vue_template__
	__webpack_require__(796)
	__vue_script__ = __webpack_require__(797)
	__vue_template__ = __webpack_require__(798)
	module.exports = __vue_script__ || {}
	if (module.exports.__esModule) module.exports = module.exports.default
	if (__vue_template__) { (typeof module.exports === "function" ? module.exports.options : module.exports).template = __vue_template__ }
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "E:\\cloud-vue\\src\\components\\datastatisticsDe.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, __vue_template__)
	  }
	})()}

/***/ },

/***/ 796:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 797:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _stringify = __webpack_require__(116);
	
	var _stringify2 = _interopRequireDefault(_stringify);
	
	var _tree = __webpack_require__(125);
	
	var _tree2 = _interopRequireDefault(_tree);
	
	__webpack_require__(131);
	
	var _alertmsg = __webpack_require__(94);
	
	var _alertmsg2 = _interopRequireDefault(_alertmsg);
	
	var _taskList = __webpack_require__(756);
	
	var _taskList2 = _interopRequireDefault(_taskList);
	
	var _taskchosetitle = __webpack_require__(760);
	
	var _taskchosetitle2 = _interopRequireDefault(_taskchosetitle);
	
	var _actions = __webpack_require__(108);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// <style lang = "sass">
	// .myprogress{
	//   width: 30%;
	// }
	// </style>
	// <template>
	//
	//   <div class="row">
	//     <div class=" col-lg-3 col-md-12 col-sm-12 col-xs-12">
	//       <div class="panel panel-default">
	//         <div class="panel-heading">
	//           <h3 class="panel-title">运行中的任务</h3>
	//         </div>
	//         <div class="panel-body">1</div>
	//       </div>
	//     </div>
	//
	//     <div class=" col-lg-3 col-md-12 col-sm-12 col-xs-12">
	//       <div class="panel panel-default">
	//         <div class="panel-heading">
	//           <h3 class="panel-title">项目数</h3>
	//         </div>
	//         <div class="panel-body">1</div>
	//       </div>
	//     </div>
	//
	//     <div class=" col-lg-3 col-md-12 col-sm-12 col-xs-12">
	//       <div class="panel panel-default">
	//         <div class="panel-heading">
	//           <h3 class="panel-title">存储资源使用</h3>
	//         </div>
	//         <div class="panel-body">1</div>
	//       </div>
	//     </div>
	//
	//     <div class=" col-lg-3 col-md-12 col-sm-12 col-xs-12">
	//       <div class="panel panel-default">
	//         <div class="panel-heading">
	//           <h3 class="panel-title">消息</h3>
	//         </div>
	//         <div class="panel-body">1</div>
	//       </div>
	//     </div>
	//
	//   </div>
	//
	//   <!-- 第二排 -->
	//
	//   <div class="row">
	//     <div class="  col-lg-8  col-md-12 col-sm-12 col-xs-12">
	//       <!-- 文件 -->
	//       <div class="panel panel-default peson-relation " v-panel="true" >
	//         <div class="panel-heading">
	//           <h3 class="panel-title">教育经历</h3>
	//           <h3 class="panel-title"> <i class="icon-plus-sign"></i>
	//           </h3>
	//         </div>
	//         <div class="panel-body ol_p">
	//           <div class="cotainer change ol_c">
	//             <template v-for="mydata in datas"  track-by="$index">
	//               <div class="row main-resource-row-data" @click.stop="openNewfolder(mydata,$index)">
	//
	//                 <div class=" col-md-1 col-sm-1 col-xs-1">
	//                   <button type="button" class="btn btn-primary btn-xs">完成</button>
	//                 </div>
	//                 <div class=" col-md-5 col-sm-5 col-xs-5">
	//                   <ul class="intruduce">
	//                     <li> <b>reftrans_demon_2012</b>
	//                     </li>
	//                     <li>
	//                       创建的时间：
	//                       <time>2016年9月20日</time>
	//                     </li>
	//                     <li>
	//                       项目编号：
	//                       <span>reftrans_demon_2012</span>
	//                     </li>
	//                   </ul>
	//
	//                 </div>
	//
	//                 <div class=" col-md-4 col-sm-4 col-xs-4">
	//
	//                   <div>项目进度：</div>
	//                   <div class="progress progress-striped active myprogress">
	//                     <div class="progress-bar progress-bar-success" role="progressbar" 
	//                 aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" 
	//                 style="width: 40%;">
	//                       <span class="sr-only">40% 完成</span>
	//                     </div>
	//                   </div>
	//                 </div>
	//
	//                 <div class=" col-md-2 col-sm-2 col-xs-2">
	//
	//                   <p>---</p>
	//                 </div>
	//
	//
	//                 <div class="clearfix visible-xs"></div>
	//
	//               </div>
	//               <!-- 弹窗 --> </template>
	//
	//           </div>
	//
	//         </div>
	//       </div>
	//
	//     </div>
	//     <div class=" col-lg-4 col-md-12 col-sm-12 col-xs-12">
	//         <div class="panel panel-default peson-relation " v-panel="true" >
	//         <div class="panel-heading">
	//           <h3 class="panel-title">教育经历</h3>
	//           <h3 class="panel-title"> <i class="icon-plus-sign"></i>
	//           </h3>
	//         </div>
	//         <div class="panel-body">
	//           <div class="cotainer change ">
	//              <div class=" col-md-6 col-sm-6 col-xs-6">主题</div>
	//              <div class=" col-md-6 col-sm-6 col-xs-6">内容</div>
	//           </div>
	//           <div class="cotainer change ">
	//              <div class=" col-md-6 col-sm-6 col-xs-6">主题</div>
	//              <div class=" col-md-6 col-sm-6 col-xs-6">内容</div>
	//           </div>
	//
	//         </div>
	//       </div>
	//
	//
	//     </div>
	//   </div>
	//
	//
	//    <!-- 第三排 -->
	//
	//   <div class="row">
	//     <div class="  col-lg-8  col-md-12 col-sm-12 col-xs-12">
	//       <!-- 文件 -->
	//        <div class="panel panel-default peson-relation " v-panel="true" >
	//         <div class="panel-heading">
	//           <h3 class="panel-title">教育经历</h3>
	//           <h3 class="panel-title"> <i class="icon-plus-sign"></i>
	//           </h3>
	//         </div>
	//         <div class="panel-body">
	//             <chosetitle></chosetitle>
	//             <task-List></task-List>
	//
	//
	//         </div>
	//       </div>
	//
	//     </div>
	//     <div class=" col-lg-4 col-md-12 col-sm-12 col-xs-12">
	//         <div class="panel panel-default peson-relation " v-panel="true" >
	//         <div class="panel-heading">
	//           <h3 class="panel-title">教育经历</h3>
	//           <h3 class="panel-title"> <i class="icon-plus-sign"></i>
	//           </h3>
	//         </div>
	//         <div class="panel-body">
	//           <div class="cotainer change ">
	//              <div class=" col-md-6 col-sm-6 col-xs-6">主题</div>
	//              <div class=" col-md-6 col-sm-6 col-xs-6">内容</div>
	//           </div>
	//           <div class="cotainer change ">
	//              <div class=" col-md-6 col-sm-6 col-xs-6">主题</div>
	//              <div class=" col-md-6 col-sm-6 col-xs-6">内容</div>
	//           </div>
	//
	//         </div>
	//       </div>
	//
	//
	//     </div>
	//   </div>
	//
	//   <tree-grid v-bind:style="{visibility:showchange}" ></tree-grid>
	//   <modal :show.sync="showModal">
	//     <h3 slot="header">您好</h3>
	//     <h3 slot="body">请您选择一个文件</h3>
	//   </modal>
	//
	// </template>
	//
	//
	// <script>
	exports.default = {
	
	  vuex: {
	    getters: {
	      datas: function datas(_ref) {
	        var mResorce = _ref.mResorce;
	        return mResorce.datas;
	      },
	      userId: function userId(_ref2) {
	        var mResorce = _ref2.mResorce;
	        return mResorce.userId;
	      },
	      isChoseAllfile: function isChoseAllfile(_ref3) {
	        var mResorce = _ref3.mResorce;
	        return mResorce.isChoseAllfile;
	      }, //全选
	      key: function key(_ref4) {
	        var mResorce = _ref4.mResorce;
	        return mResorce.addDatas.length;
	      }
	    },
	
	    actions: {
	      getResource: _actions.getResource, //获取元数据
	      chosefile: _actions.chosefile }
	  },
	  components: {
	    treeGrid: _tree2.default,
	    modal: _alertmsg2.default,
	    chosetitle: _taskchosetitle2.default,
	    taskList: _taskList2.default
	  },
	  data: function data() {
	    return {
	      totalTime: null,
	      files: [], //文件
	      childFolders: [], //文件夹
	
	      myinputValue: null, //修改name 的value
	      isshowicon: true, //是否修改name
	      folderId: null, // 修改名字的文件夹Id
	      mydatas: null, //数组中的单个文件
	      isdisabledIcon: false, //禁止使用重命名
	      choseArr: [], //单选数组
	      iscreatNewfolder: false,
	
	      ///////////////////////没有重置////////////////////
	      istreeshow: true, //文件树显示
	      showchange: 'hidden',
	      showModal: false
	
	    };
	  },
	
	
	  props: [
	  //'mychosekey',//全选
	  "listoperation", "isdatecreatnewfolder"],
	
	  ready: function ready() {
	    //this.getresource(this.user.name)
	
	    var height = $(window).height() - $('.main-contant').outerHeight(true) - $(".breadcrumb").outerHeight(true) - $(".main-resource-title").outerHeight(true) - $(".my-data-select").outerHeight(true);
	
	    $('.main-resource-data').slimscroll({
	      height: height,
	      width: 'auto', //可滚动区域宽度
	      size: '8px', //组件宽度
	      opacity: .3, //滚动条透明度
	      distance: '0px', //组件与侧边之间的距离
	      railColor: '#333', //轨道颜色
	      railOpacity: .2, //轨道透明度
	      railDraggable: true });
	  },
	  created: function created() {
	
	    this.getResource(this, this.userId); //主动触发需要提供vm
	  },
	
	
	  events: {
	    /*choseButtonClik (value) {
	      this.choseAllinput(value)
	     
	    },*/
	
	    titleRename: function titleRename() {
	      //重命名
	      if (this.choseArr.length === 0) {
	        this.myalert();
	
	        return false;
	      } else {
	        var index = this.choseArr[0];
	        var mydatas = this.datas[index];
	        this.renameFolder(mydatas, index);
	      }
	    },
	    creatOneFolder: function creatOneFolder() {
	      this.iscreatNewfolder = true; //新建文件key
	      this.isdatecreatnewfolder = true; //新建文件夹置灰
	      this.creatNewfolder(); //新建文件夹
	    },
	    closeTree: function closeTree() {
	      //显示tree
	      this.showchange = "hidden";
	      this.istreeshow = !this.istreeshow;
	      //this.dalistexchangeforder = false
	    },
	    exchangeforderfn: function exchangeforderfn() {
	      //移动文件
	      if (this.choseArr.length === 0) {
	        this.myalert();
	        //alert("请选择一个文件")
	        return false;
	      } else {
	
	        this.showTree();
	        //this.dalistexchangeforder = true
	      }
	    }
	  },
	  methods: {
	
	    /*文件夹重命名*/
	    renameFolder: function renameFolder(mydatas, index) {
	      if (this.isdisabledIcon) {
	        return false;
	      }
	      this.isshowicon = false; //隐藏图标
	      this.myinputValue = mydatas.name;
	      this.folderId = mydatas.folderId;
	      this.mydatas = mydatas;
	      var myObject = JSON.parse((0, _stringify2.default)(mydatas));
	      myObject.isfolderIsShowNameKey = true;
	      this.datas.$set(index, myObject);
	
	      /*var replace = this.datas.splice(index,1); //
	          replace.isfolderIsShowNameKey = true
	          replace.createTime = mydatas.createTime
	          this.datas.splice(index,0,replace); */
	    },
	
	
	    /*确认重命名文件夹名称 */
	    oktrenameFolder: function oktrenameFolder(el, index) {
	      if (!this.iscreatNewfolder) {
	        // 重命名文件夹
	        var name = this.myinputValue,
	            folderId = this.folderId,
	            _this = this;
	
	        this.$http.get('./FolderAction!RenameFolder?id=' + folderId + '&name=' + name).then(function (ret) {
	          console.log(ret);
	          alert('成功');
	          /*重置*/
	          _this.folderId = null;
	          _this.myinputValue = null;
	
	          var myObject = JSON.parse((0, _stringify2.default)(this.datas[index]));
	          myObject.isfolderIsShowNameKey = false;
	          myObject.name = name;
	          this.datas.$set(index, myObject);
	
	          /*    修改名字
	          var replace = this.datas.splice(index,1); 
	              replace.name = name
	              replace.isfolderIsShowNameKey = false
	              this.datas.splice(index,0,replace); */
	
	          this.isshowicon = true; //隐藏图标
	        }).then(function (err) {
	          console.log(err);
	        });
	      } else {
	        // 新建文件夹
	        console.log(this.myinputValue);
	        console.log(this.folderId);
	        var name = this.myinputValue,
	            folderId = this.folderId,
	            _this = this;
	
	        this.$http.get('./FolderAction!NewFolder?parentFolderId=' + folderId + '&name=' + name + '&testProperty=' + " ").then(function (ret) {
	          console.log(ret);
	          alert('成功');
	          /*重置*/
	          _this.folderId = null;
	          _this.myinputValue = null;
	          _this.iscreatNewfolder = false;
	          _this.isdatecreatnewfolder = false; //恢复新建文件夹
	
	          var myObject = JSON.parse((0, _stringify2.default)(this.datas[index])),
	              tody = new Date();
	          myObject.name = name;
	          myObject.isfolderIsShowNameKey = false;
	          myObject.createTime = tody.getFullYear() + "-" + (tody.getMonth() + 1) + "-" + tody.getDate() + "     " + tody.getHours() + ":" + tody.getMinutes() + ":" + tody.getSeconds();
	          this.datas.$set(index, myObject);
	
	          /*    //修改名字/
	          var replace = this.datas.splice(index,1),
	              tody = new Date();
	              replace.name = name
	              replace.isfolderIsShowNameKey = false
	                replace.createTime = tody.getFullYear()+ "-"+ (tody.getMonth()+1) +"-" + tody.getDate()+  "     "  +tody.getHours() +":"+ tody.getMinutes() + ":"+ tody.getSeconds()
	              this.datas.splice(index,0,replace);*/
	          this.isshowicon = true; //隐藏图标
	        }).then(function (err) {
	          console.log(err);
	        });
	      }
	    },
	
	
	    /*不重命名文件夹名称 */
	    notrenameFolder: function notrenameFolder(index) {
	      if (!this.iscreatNewfolder) {
	
	        var myObject = JSON.parse((0, _stringify2.default)(this.datas[index]));
	        myObject.isfolderIsShowNameKey = false;
	        this.datas.$set(index, myObject);
	
	        /* var replace = this.datas.splice(index,1); //
	             replace.isfolderIsShowNameKey = false;
	             replace.name =this.mydatas.name;
	             replace.createTime = this.mydatas.createTime;
	             this.datas.splice(index,0,replace); 
	            */
	      } else {
	        this.datas.splice(index, 1);
	        this.iscreatNewfolder = false;
	        this.isdatecreatnewfolder = false; //恢复文件夹置灰
	      }
	
	      /* 重置*/
	      this.myinputValue = null;
	      this.folderId = null;
	      this.mydatas = null;
	      this.isshowicon = true; //显示
	    },
	
	    /////////////////////////////////////////////////////////////////////////////////
	
	    /*全选按钮操作*/
	    choseAllinput: function choseAllinput(value) {
	      if (true === value) {
	        for (var i = 0; i < this.datas.length; i++) {
	          if (!this.choseArr.includes(i)) {
	            this.choseArr.push(i);
	          }
	        }
	      } else {
	        console.log(this.key);
	        if (!this.key) {
	
	          this.choseArr.splice(0, this.choseArr.length);
	        }
	      }
	    },
	    creatNewfolder: function creatNewfolder() {
	      var newObj = {},
	          index = 0;
	      newObj.folderId = this.userId;
	      console.log(newObj.folderId);
	      newObj.createTime = "---";
	      newObj.name = "新建文件夹";
	      this.datas.unshift(newObj);
	      var mydatas = this.datas[0];
	
	      this.renameFolder(mydatas, index);
	    },
	    openNewfolder: function openNewfolder(mydata, index) {
	
	      var folderId = mydata.folderId;
	      this.user.name = folderId;
	      console.log(this.user.name);
	      this.choseArr = [], //单选数组
	      this._reset();
	      this.getresource(folderId);
	    },
	    showTree: function showTree() {
	      if (this.istreeshow) {
	        this.showchange = "visible";
	        this.istreeshow = !this.istreeshow;
	        console.log(this.istreeshow);
	      } else {}
	    },
	    myalert: function myalert() {
	
	      this.showModal = true;
	    },
	    _reset: function _reset() {
	      this.datas = []; //总数据
	      this.files = []; //文件
	      this.childFolders = []; //文件夹`
	      this.childFolders = []; //文件夹`
	      this.myinputValue = null; //修改name 的value
	      this.isshowicon = true; //是否修改name
	      this.folderId = null; // 修改名字的文件夹Id
	      this.mydatas = null; //数组中的单个文件
	      this.isdisabledIcon = false; //禁止使用重命名
	      this.iscreatNewfolder = false;
	      this.listoperation = false;
	      this.isdatecreatnewfolder = false;
	    }
	  },
	  watch: {
	    isChoseAllfile: function isChoseAllfile(value) {
	      console.log(value);
	      this.choseAllinput(value);
	    },
	    choseArr: function choseArr() {
	      /* if((this.choseArr.length === this.datas.length) && this.choseArr.length != 0 ){
	          //执行全选
	         
	        }else{
	          //this.mychosekey =false
	          }
	      */
	      //控制移动和重命名的按钮
	      //取消移动和重命名的操作
	      //重命名图标操作
	      if (this.choseArr.length > 1) {
	        this.listoperation = true;
	        this.isdisabledIcon = true;
	      } else {
	        this.listoperation = false;
	        this.isdisabledIcon = false;
	      }
	    }
	  }
	
	};
	
	// </script>
	/* generated by vue-loader */


	//vuex 取数据
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 798:
/***/ function(module, exports) {

	module.exports = "\r\n\r\n  <div class=\"row\">\r\n    <div class=\" col-lg-3 col-md-12 col-sm-12 col-xs-12\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">\r\n          <h3 class=\"panel-title\">运行中的任务</h3>\r\n        </div>\r\n        <div class=\"panel-body\">1</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\" col-lg-3 col-md-12 col-sm-12 col-xs-12\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">\r\n          <h3 class=\"panel-title\">项目数</h3>\r\n        </div>\r\n        <div class=\"panel-body\">1</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\" col-lg-3 col-md-12 col-sm-12 col-xs-12\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">\r\n          <h3 class=\"panel-title\">存储资源使用</h3>\r\n        </div>\r\n        <div class=\"panel-body\">1</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\" col-lg-3 col-md-12 col-sm-12 col-xs-12\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">\r\n          <h3 class=\"panel-title\">消息</h3>\r\n        </div>\r\n        <div class=\"panel-body\">1</div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!-- 第二排 -->\r\n\r\n  <div class=\"row\">\r\n    <div class=\"  col-lg-8  col-md-12 col-sm-12 col-xs-12\">\r\n      <!-- 文件 -->\r\n      <div class=\"panel panel-default peson-relation \" v-panel=\"true\" >\r\n        <div class=\"panel-heading\">\r\n          <h3 class=\"panel-title\">教育经历</h3>\r\n          <h3 class=\"panel-title\"> <i class=\"icon-plus-sign\"></i>\r\n          </h3>\r\n        </div>\r\n        <div class=\"panel-body ol_p\">\r\n          <div class=\"cotainer change ol_c\">\r\n            <template v-for=\"mydata in datas\"  track-by=\"$index\">\r\n              <div class=\"row main-resource-row-data\" @click.stop=\"openNewfolder(mydata,$index)\">\r\n\r\n                <div class=\" col-md-1 col-sm-1 col-xs-1\">\r\n                  <button type=\"button\" class=\"btn btn-primary btn-xs\">完成</button>\r\n                </div>\r\n                <div class=\" col-md-5 col-sm-5 col-xs-5\">\r\n                  <ul class=\"intruduce\">\r\n                    <li> <b>reftrans_demon_2012</b>\r\n                    </li>\r\n                    <li>\r\n                      创建的时间：\r\n                      <time>2016年9月20日</time>\r\n                    </li>\r\n                    <li>\r\n                      项目编号：\r\n                      <span>reftrans_demon_2012</span>\r\n                    </li>\r\n                  </ul>\r\n\r\n                </div>\r\n\r\n                <div class=\" col-md-4 col-sm-4 col-xs-4\">\r\n\r\n                  <div>项目进度：</div>\r\n                  <div class=\"progress progress-striped active myprogress\">\r\n                    <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" \r\n                aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" \r\n                style=\"width: 40%;\">\r\n                      <span class=\"sr-only\">40% 完成</span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\" col-md-2 col-sm-2 col-xs-2\">\r\n\r\n                  <p>---</p>\r\n                </div>\r\n               \r\n\r\n                <div class=\"clearfix visible-xs\"></div>\r\n\r\n              </div>\r\n              <!-- 弹窗 --> </template>\r\n\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\" col-lg-4 col-md-12 col-sm-12 col-xs-12\">\r\n        <div class=\"panel panel-default peson-relation \" v-panel=\"true\" >\r\n        <div class=\"panel-heading\">\r\n          <h3 class=\"panel-title\">教育经历</h3>\r\n          <h3 class=\"panel-title\"> <i class=\"icon-plus-sign\"></i>\r\n          </h3>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n          <div class=\"cotainer change \">\r\n             <div class=\" col-md-6 col-sm-6 col-xs-6\">主题</div>\r\n             <div class=\" col-md-6 col-sm-6 col-xs-6\">内容</div>\r\n          </div>\r\n          <div class=\"cotainer change \">\r\n             <div class=\" col-md-6 col-sm-6 col-xs-6\">主题</div>\r\n             <div class=\" col-md-6 col-sm-6 col-xs-6\">内容</div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n   <!-- 第三排 -->\r\n\r\n  <div class=\"row\">\r\n    <div class=\"  col-lg-8  col-md-12 col-sm-12 col-xs-12\">\r\n      <!-- 文件 -->\r\n       <div class=\"panel panel-default peson-relation \" v-panel=\"true\" >\r\n        <div class=\"panel-heading\">\r\n          <h3 class=\"panel-title\">教育经历</h3>\r\n          <h3 class=\"panel-title\"> <i class=\"icon-plus-sign\"></i>\r\n          </h3>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n            <chosetitle></chosetitle>\r\n            <task-List></task-List>\r\n\r\n\r\n        </div>\r\n      </div>\r\n    \r\n    </div>\r\n    <div class=\" col-lg-4 col-md-12 col-sm-12 col-xs-12\">\r\n        <div class=\"panel panel-default peson-relation \" v-panel=\"true\" >\r\n        <div class=\"panel-heading\">\r\n          <h3 class=\"panel-title\">教育经历</h3>\r\n          <h3 class=\"panel-title\"> <i class=\"icon-plus-sign\"></i>\r\n          </h3>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n          <div class=\"cotainer change \">\r\n             <div class=\" col-md-6 col-sm-6 col-xs-6\">主题</div>\r\n             <div class=\" col-md-6 col-sm-6 col-xs-6\">内容</div>\r\n          </div>\r\n          <div class=\"cotainer change \">\r\n             <div class=\" col-md-6 col-sm-6 col-xs-6\">主题</div>\r\n             <div class=\" col-md-6 col-sm-6 col-xs-6\">内容</div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n  \r\n  <tree-grid v-bind:style=\"{visibility:showchange}\" ></tree-grid>\r\n  <modal :show.sync=\"showModal\">\r\n    <h3 slot=\"header\">您好</h3>\r\n    <h3 slot=\"body\">请您选择一个文件</h3>\r\n  </modal>\r\n\r\n";

/***/ },

/***/ 799:
/***/ function(module, exports) {

	module.exports = "\r\n  <section  class=\"main-contant\">\r\n\r\n    <personal-infor></personal-infor>\r\n  </section>\r\n  <section class=\"main-resource\">\r\n    <datastatistics></datastatistics>\r\n    \r\n  </section>\r\n";

/***/ }

});
//# sourceMappingURL=13.chunk.js.map