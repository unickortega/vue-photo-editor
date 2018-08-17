(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.VuePhotoEditor = {})));
}(this, (function (exports) { 'use strict';

  (function(){ if(typeof document !== 'undefined'){ var head=document.head||document.getElementsByTagName('head')[0], style=document.createElement('style'), css=".editor-container[data-v-e5c7b356] { -webkit-touch-callout: none; user-select: none; position: relative; height: 300px; overflow: hidden; background: black; } .editor-container .back-drop[data-v-e5c7b356] { height: 100%; width: 100%; opacity: 0.5; z-index: 10; position: absolute; background: black; } .editor-container .backdrop-image[data-v-e5c7b356] { position: absolute; z-index: 9; -webkit-touch-callout: none; user-select: none; } .editor-container .front-image-container[data-v-e5c7b356] { margin: auto; position: absolute; top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%); overflow: hidden; height: 250px; width: 250px; z-index: 11; } .editor-container .front-image-container .frame[data-v-e5c7b356] { border: 3px solid white; position: absolute; width: 100%; height: 100%; top: 0px; left: 0px; } .editor-container .front-image-container .frame .lines .h-line[data-v-e5c7b356] { height: 2px; width: 100%; background: white; position: absolute; } .editor-container .front-image-container .frame .lines .v-line[data-v-e5c7b356] { height: 100%; width: 2px; background: white; position: absolute; } .editor-container .front-image-container .image[data-v-e5c7b356] { position: absolute; } .photo-options[data-v-e5c7b356] { padding: 0px 15px; } .file-input[data-v-e5c7b356] { display: none; } .loading[data-v-e5c7b356] { position: fixed; top: 0px; left: 0px; width: 100%; height: 100%; z-index: 1000; } .loading .background[data-v-e5c7b356] { background: black; opacity: 0.75; position: absolute; left: 0px; top: 0px; width: 100%; height: 100%; } .loading .loading-icon[data-v-e5c7b356] { position: absolute; top: 50%; left: 50%; transform: translateX(-50%) translateY(-50%); width: 60px; } "; style.type='text/css'; if (style.styleSheet){ style.styleSheet.cssText = css; } else { style.appendChild(document.createTextNode(css)); } head.appendChild(style); } })();




















































  var component = {render: function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('div',{ref:"modal",staticClass:"modal fade",attrs:{"tabindex":"-1","role":"dialog"}},[_c('div',{staticClass:"modal-dialog modal-dialog-centered modal-lg"},[_c('div',{staticClass:"modal-content"},[_c('div',{staticClass:"modal-header"},[_c('h5',{staticClass:"modal-title"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_vm._m(0)]),_vm._v(" "),_c('div',{staticClass:"modal-body",staticStyle:{"padding":"0px"}},[_c('div',{ref:"editor-container",staticClass:"editor-container"},[_c('img',{ref:"backdrop-image",staticClass:"backdrop-image",attrs:{"src":_vm.image_source}}),_vm._v(" "),_c('div',{ref:"backdrop",staticClass:"back-drop"}),_vm._v(" "),_c('div',{ref:"result-image-container",staticClass:"front-image-container"},[_c('img',{ref:"result-image",staticClass:"image",attrs:{"draggable":"false","src":_vm.image_source}}),_vm._v(" "),_vm._m(1)])]),_vm._v(" "),_c('div',{staticClass:"photo-options"},[_c('div',{staticClass:"form-group"},[_c('label',{attrs:{"for":"customRange3"}},[_vm._v("Zoom Picture")]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.zoom),expression:"zoom"}],ref:"zoom-range",staticClass:"custom-range",attrs:{"type":"range","step":"5","value":"0","min":"0","max":"300","id":"customRange3"},domProps:{"value":(_vm.zoom)},on:{"__r":function($event){_vm.zoom=$event.target.value;}}})]),_vm._v(" "),_c('div',{staticClass:"form-group text-center"},[_c('input',{ref:"file-input",staticClass:"file-input",attrs:{"type":"file","id":"inputGroupFile01","accept":"image/x-png,image/jpeg"}}),_vm._v(" "),_c('button',{staticClass:"btn btn-default",attrs:{"type":"button"},on:{"click":_vm.triggerFileInput}},[_vm._v("Change Photo")])])])]),_vm._v(" "),_c('div',{staticClass:"modal-footer"},[_c('button',{staticClass:"btn btn-secondary",attrs:{"type":"button","data-dismiss":"modal"}},[_vm._v("Close")]),_vm._v(" "),_c('button',{staticClass:"btn btn-success",attrs:{"type":"button","data-dismiss":"modal"},on:{"click":_vm.saveImage}},[_vm._v("Save")])])])])]),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.busy),expression:"busy"}],staticClass:"loading"},[_c('div',{staticClass:"background"}),_vm._v(" "),_c('img',{staticClass:"loading-icon",attrs:{"src":_vm.public_path+'/images/loading.gif',"alt":""}})])])},staticRenderFns: [function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"close",attrs:{"type":"button","data-dismiss":"modal","aria-label":"Close"}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("×")])])},function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"frame"},[_c('div',{staticClass:"lines"},[_c('div',{staticClass:"v-line",staticStyle:{"left":"33.3333%"}}),_vm._v(" "),_c('div',{staticClass:"v-line",staticStyle:{"left":"66.6666%"}}),_vm._v(" "),_c('div',{staticClass:"h-line",staticStyle:{"top":"33.3333%"}}),_vm._v(" "),_c('div',{staticClass:"h-line",staticStyle:{"top":"66.6666%"}})])])}],_scopeId: 'data-v-e5c7b356',
    name: 'vue-photo-editor',

    props: {
      resultImageDimension:{
        type: Object,
        default: function () { return ({
          height: 250,
          width: 250
        }); }
      },
      title:{
        type: String,
        default: 'Photo'
      }
    },
    data : function () { return ({
      editorDimension:{
        height: 250,
        width: 250
      },
      public_path: location.origin,
      images: [],
      zoom:0,
      position: {top:0, left:0},
      resolution: 0.80,
      image_source: location.origin+'/images/photo.png',
      busy: false,
      image_source_dimensions: {},
      preffered_diameter: 250
    }); },
    methods: {
      show: function show(image_source){
        this.position = {top: 0, left: 0}, this.zoom = 0;
        this.image_source = image_source;
        jQuery(this.$refs.modal).modal('show');
      },
      triggerFileInput: function triggerFileInput(){
        this.$refs['file-input'].click();
      },
      loading: function loading(bol){
        this.busy = bol;
      },
      setInitDimension: function setInitDimension(){
        var resultImage = jQuery(this.$refs['result-image']);
        
        console.log(this.image_source_dimensions.width +'--'+ this.editorDimension.width);

        if(this.image_source_dimensions.width > this.image_source_dimensions.height){
          if(this.image_source_dimensions.width <= this.editorDimension.width){
            this.setImageDimention('100%', 'initial');
          }
          else
          {
            this.setImageDimention('initial', '100%');
          }
        }
        else{
          if(this.image_source_dimensions.height <= this.editorDimension.height)
          {
            this.setImageDimention('initial', '100%');
          }
          else
          {
            this.setImageDimention('100%', 'initial');
          }
        }
      },
      setInitialPosition: function setInitialPosition(){
        var resultImageContainer = this.$refs['result-image-container'];
        var left = ((jQuery(resultImageContainer).width()) / 2) - (this.image_source_dimensions.width / 2);
        var top = ((jQuery(resultImageContainer).height()) / 2) - (this.image_source_dimensions.height / 2);
        this.setImageResultPosition(left, top, true);

      },
      calculateImageSourceDimensions: function calculateImageSourceDimensions(){
        var img = new Image();
        var $this = this;
        img.onload = function(){

          if(img.width > img.height){
            var _w = ($this.editorDimension.height / img.height) * img.width;
            if(_w < $this.editorDimension.width){
              $this.image_source_dimensions.width = $this.editorDimension.width;
              $this.image_source_dimensions.height = ($this.image_source_dimensions.width / img.width) * img.height;
            }
            else{
              $this.image_source_dimensions.height = $this.editorDimension.height;
              $this.image_source_dimensions.width = ($this.image_source_dimensions.height / img.height) * img.width;
            }
          }
          else{
            var _h = ($this.editorDimension.width / img.width) * img.height;
            if(_h < $this.editorDimension.height){
              $this.image_source_dimensions.height = $this.editorDimension.height;
              $this.image_source_dimensions.width = ($this.image_source_dimensions.height / img.height) * img.width;
            }
            else{
              $this.image_source_dimensions.width = $this.editorDimension.width;
              $this.image_source_dimensions.height = ($this.image_source_dimensions.width / img.width) * img.height;
            }
          }
          $this.zoom = 0;
          $this.position = {top: 0, left: 0}, $this.setInitDimension();
          $this.setInitialPosition();
        };
        img.src = this.image_source;
      },
      setImageDimention: function setImageDimention(width, height){
        var resultImage = jQuery(this.$refs['result-image']);
        var backdropImage = jQuery(this.$refs['backdrop-image']);
        resultImage.css({width: width, height: height});
        backdropImage.css({width: resultImage.width(), height: resultImage.height()});
        
      },
      setImageResultPosition: function setImageResultPosition(x, y, force){
        var resultImage = jQuery(this.$refs['result-image']);
        var resultImageContainer = jQuery(this.$refs['result-image-container']);
        var _x = resultImage.position().left;
        var _y = resultImage.position().top;
        var percent = this.zoom / 100;
        var width_result = this.image_source_dimensions.width + ( this.image_source_dimensions.width * percent);
        var height_result = this.image_source_dimensions.height + ( this.image_source_dimensions.height * percent);

        if((x <= 0 && (x + width_result) >= jQuery(resultImageContainer).width()) || force){
          _x = x;
        }
        else if((x + width_result) < jQuery(resultImageContainer).width()){
          _x = -(width_result - resultImageContainer.width());
        }
        if((y <= 0 && (y + height_result) >= jQuery(resultImageContainer).height()) || force){
          _y = y;
        }
        else if((y + height_result) < jQuery(resultImageContainer).height()){
          _y = -(height_result - resultImageContainer.height());
        }

        this.position = {top: _y, left: _x};
        
        jQuery(resultImage).css({ left: _x, top: _y });
        this.setImageBackdropPosition();
      },
      setImageBackdropPosition: function setImageBackdropPosition(){
        var backdropImage = this.$refs['backdrop-image'];
        var backdrop = this.$refs['backdrop'];
        var resultImage = this.$refs['result-image'];
        var resultImageContainer = this.$refs['result-image-container'];
        
        var leftCenter = (jQuery(resultImage).width() / 2) + jQuery(resultImage).position().left;
        var topCenter = (jQuery(resultImage).height() / 2) + jQuery(resultImage).position().top;
        var xChange = leftCenter - ((jQuery(resultImageContainer).width()) / 2 );
        var yChange = topCenter - ((jQuery(resultImageContainer).height()) / 2 );
        var posX = ((jQuery(backdrop).width() / 2) - (jQuery(backdropImage).width() / 2)) + xChange;
        var posY = ((jQuery(backdrop).height() / 2) - (jQuery(backdropImage).height() / 2)) + yChange;
        jQuery(backdropImage).css({ left : posX, top: posY });
      },
      zoomImage: function zoomImage(value){
        var resultImage = jQuery(this.$refs['result-image']);
        this.zoom = value;
        var percent = value / 100;
        var width_result = this.image_source_dimensions.width + ( this.image_source_dimensions.width * percent);
        var height_result = this.image_source_dimensions.height + ( this.image_source_dimensions.height * percent);
        var centerPos = this.returnCenter();

        if(this.image_source_dimensions.width > this.image_source_dimensions.height){
          var _w = (this.editorDimension.height / this.image_source_dimensions.height) * this.image_source_dimensions.width;
          if(_w < this.editorDimension.width){
            this.setImageDimention(width_result, 'initial');
          }
          else{
            this.setImageDimention('initial', height_result);
          }
        }
        else{
          var _h = (this.editorDimension.width / this.image_source_dimensions.width) * this.image_source_dimensions.height;
          if(_h < this.editorDimension.height){
            this.setImageDimention('initial', height_result);
          }
          else{
            this.setImageDimention(width_result, 'initial');
          }
        }
        var left = centerPos.left - (width_result / 2);
        var top = centerPos.top - (height_result / 2);
        if(parseInt(left + width_result) <= parseInt(this.editorDimension.width)){
          left = -(width_result - this.editorDimension.width);
        }
        else{
          left = parseInt( width_result + left ) >= parseInt(this.editorDimension.width) ? left : 0;
        }
        if(parseInt(top + height_result) <= parseInt(this.editorDimension.height)){
          top = parseInt(-(height_result - this.editorDimension.height));
        }
        else{
          top = parseInt( height_result + top ) >= parseInt(this.editorDimension.height) ? top : 0;
        }
        this.setImageResultPosition(left, top);
      },
      returnCenter: function returnCenter(){
        var resultImage = jQuery(this.$refs['result-image']);
        var leftCenter = (jQuery(resultImage).width() / 2) + jQuery(resultImage).position().left;
        var topCenter = (jQuery(resultImage).height() / 2) + jQuery(resultImage).position().top;
        return {left: leftCenter, top: topCenter};
      },
      saveImage: function saveImage(){
        var resultImage = jQuery(this.$refs['result-image']);
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext("2d");
        var img = new Image();
        var $this = this;

        img.onload = function(){
          canvas.height = $this.resultImageDimension.height;
          canvas.width = $this.resultImageDimension.width;

          var img_width = img.width;
          var img_height = img.height;
          var prefered_dimension = img_width > img_height ? img_height : img_width;
          var zoom = $this.zoom / 100;
          var cal_zoom_dimension = prefered_dimension * (prefered_dimension / ((zoom * prefered_dimension) + prefered_dimension));
          var resolution = $this.resolution;

          // step 1
          var oc = document.createElement('canvas'),
              octx = oc.getContext('2d');

          if((cal_zoom_dimension * resolution) > canvas.width){
            oc.width = img.width * resolution;
            oc.height = img.height * resolution;
          }
          else{
            oc.width = img.width;
            oc.height = img.height;
          }

          octx.drawImage(img, 0, 0, oc.width, oc.height);
          
          prefered_dimension = oc.width > oc.height ? oc.height : oc.width;
          var oc_width = oc.width;
          var oc_height = oc.height;
          if((prefered_dimension / 2) > canvas.width){
            oc_width = (oc.width * resolution);
            oc_height = (oc.height * resolution);
            var temp_oc = document.createElement('canvas'),
            _octx = temp_oc.getContext('2d');
            temp_oc.width = oc_width;
            temp_oc.height = oc_height;
            _octx.drawImage(oc, 0, 0, oc_width, oc_height);
            oc = temp_oc;
          }

          // step 2
          
          prefered_dimension = (oc_width > oc_height ? oc_height : oc_width);
          var h_w_r_t_c_w = ($this.editorDimension.height / $this.editorDimension.width) * oc_width;
          var xcal_per = oc_width / ((zoom * oc_width) + oc_width);
          var ycal_per = h_w_r_t_c_w / ((zoom * h_w_r_t_c_w) + h_w_r_t_c_w);
          var xzoom = xcal_per == Infinity ? oc_width : (oc_width * xcal_per);
          var yzoom = ycal_per == Infinity ? h_w_r_t_c_w : (h_w_r_t_c_w * ycal_per);
          if(oc_width > oc_height){
            var _w = ($this.editorDimension.height / oc_height) * oc_width;
            if(_w > $this.editorDimension.width){
              h_w_r_t_c_w = ($this.editorDimension.width / $this.editorDimension.height) * oc_height;
              ycal_per = oc_height / ((zoom * oc_height) + oc_height);
              xcal_per = h_w_r_t_c_w / ((zoom * h_w_r_t_c_w) + h_w_r_t_c_w);
              yzoom = ycal_per == Infinity ? oc_height : (oc_height * ycal_per);
              xzoom = xcal_per == Infinity ? h_w_r_t_c_w : (h_w_r_t_c_w * xcal_per);
            }
          }

          var leftPos = oc_width * (($this.position.left) / ($this.image_source_dimensions.width + (zoom * $this.image_source_dimensions.width))) * -1;
          var topPos = oc_height * (($this.position.top) / ($this.image_source_dimensions.height + (zoom * $this.image_source_dimensions.height))) * -1;

          // step 3, resize to final size
          ctx.drawImage(oc, leftPos, topPos, xzoom, yzoom,
          0, 0, canvas.width, canvas.height);

          console.log(canvas.toDataURL());
          
          $this.$emit('update', canvas.toDataURL());
        };

        img.src = $this.image_source;
      },
      setEditorDimensions: function setEditorDimensions(){
        if(this.resultImageDimension.width > this.resultImageDimension.height){
          this.editorDimension.height = this.preffered_diameter;
          this.editorDimension.width = (this.preffered_diameter / this.resultImageDimension.height) * this.resultImageDimension.width;
        }
        else{
          this.editorDimension.width = this.preffered_diameter;
          this.editorDimension.height = (this.preffered_diameter / this.resultImageDimension.width) * this.resultImageDimension.height;
        }
        jQuery(this.$refs['result-image-container']).css({'height': this.editorDimension.height, 'width': this.editorDimension.width});
      }
    },
    mounted: function mounted(){
      var $this = this;
      var resultImage = jQuery($this.$refs['result-image']);

      this.setEditorDimensions();
      
      jQuery(this.$refs['file-input']).change(function(){
        if(this.files && this.files[0]){
          var reader = new FileReader();
          reader.onload = function(e){
            $this.image_source = e.target.result;
            $this.calculateImageSourceDimensions();
          };
          reader.readAsDataURL(this.files[0]);
        }
      });

      jQuery(this.$refs.modal).on('shown.bs.modal', function (e) {
        $this.calculateImageSourceDimensions();
      });
      jQuery(this.$refs['editor-container'])
      .bind('mousedown', dragStart)
      .bind('touchstart', dragStart);
      jQuery(document).bind('mousemove', dragMove)
      .bind('touchmove', dragMove);

      jQuery(document).bind('mouseup', dragEnd)
      .bind('touchend', dragEnd);

      jQuery(this.$refs['zoom-range'])[0].addEventListener('input', function(){
        $this.zoomImage(this.value);
      });

      var dragging = false;
      var originalMousePos = {};
      function dragStart(e){
        dragging = true;
        originalMousePos.top = e.clientY;
        originalMousePos.left = e.clientX;
      }
      function dragMove(e){
        if(dragging){
          var x = e.clientX - originalMousePos.left;
          var y = e.clientY - originalMousePos.top;
          var resultImage = $this.$refs['result-image'];
          $this.setImageResultPosition(jQuery(resultImage).position().left + x, jQuery(resultImage).position().top + y);
          originalMousePos.top = e.clientY;
          originalMousePos.left = e.clientX;
        }
      }
      function dragEnd(e){
        dragging = false;
      }
    }
  }

  // Import vue component

  // install function executed by Vue.use()
  function install(Vue) {
  	if (install.installed) { return; }
  	install.installed = true;
  	Vue.component('VuePhotoEditor', component);
  }

  // Create module definition for Vue.use()
  var plugin = {
  	install: install,
  };

  // To auto-install when vue is found
  var GlobalVue = null;
  if (typeof window !== 'undefined') {
  	GlobalVue = window.Vue;
  } else if (typeof global !== 'undefined') {
  	GlobalVue = global.Vue;
  }
  if (GlobalVue) {
  	GlobalVue.use(plugin);
  }

  // It's possible to expose named exports when writing components that can
  // also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
  // export const RollupDemoDirective = component;

  exports.install = install;
  exports.default = component;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
