(function framework7ComponentLoader(e,t){void 0===t&&(t=!0);var a=e.$,s=e.utils,r=(e.getDevice,e.getSupport,e.Class),l=(e.Modal,e.ConstructorMethods),o=(e.ModalMethods,s.extend),n=s.id,i=s.nextTick,c=s.deleteProps;class p extends r{constructor(e,t){void 0===t&&(t={}),super(t,[e]);const s=this,r=o({on:{}},e.params.smartSelect);void 0===r.searchbarDisableButton&&(r.searchbarDisableButton="aurora"!==e.theme),s.useModulesParams(r),s.params=o({},r,t),s.app=e;const l=a(s.params.el).eq(0);if(0===l.length)return s;if(l[0].f7SmartSelect)return l[0].f7SmartSelect;const i=l.find("select").eq(0);if(0===i.length)return s;let c;s.params.setValueText&&(c=a(s.params.valueEl),0===c.length&&(c=l.find(".item-after")),0===c.length&&(c=a('<div class="item-after"></div>'),c.insertAfter(l.find(".item-title"))));let p=t.url;p||(l.attr("href")&&"#"!==l.attr("href")?p=l.attr("href"):i.attr("name")&&(p=`${i.attr("name").toLowerCase()}-select/`)),p||(p=s.params.url);const d=i[0].multiple,m=d?"checkbox":"radio",u=n();function h(){s.open()}function v(){const e=s.$selectEl.val();s.$el.trigger("smartselect:change",e),s.emit("local::change smartSelectChange",s,e),s.vl&&s.vl.clearCache(),s.setValueText()}function f(){let e,t;const r=this,l=r.value;let o,n=[];if("checkbox"===r.type){for(let i=0;i<s.selectEl.options.length;i+=1)e=s.selectEl.options[i],e.value===l&&(e.selected=r.checked),e.selected&&(o=e.dataset?e.dataset.displayAs:a(e).data("display-value-as"),t=o&&void 0!==o?o:e.textContent,n.push(t.trim()));s.maxLength&&s.checkMaxLength()}else e=s.$selectEl.find(`option[value="${l}"]`)[0],e||(e=s.$selectEl.find("option").filter((e=>e.value===l))[0]),o=e.dataset?e.dataset.displayAs:a(e).data("display-as"),t=o&&void 0!==o?o:e.textContent,n=[t],s.selectEl.value=l;s.$selectEl.trigger("change"),s.params.setValueText&&s.$valueEl.text(s.formatValueText(n)),s.params.closeOnSelect&&"radio"===s.inputType&&s.close()}return o(s,{$el:l,el:l[0],$selectEl:i,selectEl:i[0],$valueEl:c,valueEl:c&&c[0],url:p,multiple:d,inputType:m,id:u,inputName:`${m}-${u}`,selectName:i.attr("name"),maxLength:i.attr("maxlength")||t.maxLength}),l[0].f7SmartSelect=s,s.attachEvents=function(){l.on("click",h),l.on("change","select",v)},s.detachEvents=function(){l.off("click",h),l.off("change","select",v)},s.attachInputsEvents=function(){s.$containerEl.on("change",'input[type="checkbox"], input[type="radio"]',f)},s.detachInputsEvents=function(){s.$containerEl.off("change",'input[type="checkbox"], input[type="radio"]',f)},s.useModules(),s.init(),s}setValue(e){const t=this;let s,r,l,o=e,n=[];if(t.multiple){Array.isArray(o)||(o=[o]);for(let e=0;e<t.selectEl.options.length;e+=1)s=t.selectEl.options[e],o.indexOf(s.value)>=0?s.selected=!0:s.selected=!1,s.selected&&(r=s.dataset?s.dataset.displayAs:a(s).data("display-value-as"),l=r&&void 0!==r?r:s.textContent,n.push(l.trim()))}else s=t.$selectEl.find(`option[value="${o}"]`)[0],s&&(r=s.dataset?s.dataset.displayAs:a(s).data("display-as"),l=r&&void 0!==r?r:s.textContent,n=[l]),t.selectEl.value=o;return t.params.setValueText&&t.$valueEl.text(t.formatValueText(n)),t.$selectEl.trigger("change"),t}unsetValue(){const e=this;e.params.setValueText&&e.$valueEl.text(e.formatValueText([])),e.$selectEl.find("option").each((e=>{e.selected=!1,e.checked=!1})),e.$selectEl[0].value=null,e.$containerEl&&e.$containerEl.find(`input[name="${e.inputName}"][type="checkbox"], input[name="${e.inputName}"][type="radio"]`).prop("checked",!1),e.$selectEl.trigger("change")}getValue(){return this.$selectEl.val()}get view(){const{params:e,$el:t}=this;let a;if(e.view&&(a=e.view),a||(a=t.parents(".view").length&&t.parents(".view")[0].f7View),!a&&"page"===e.openIn)throw Error("Smart Select requires initialized View");return a}checkMaxLength(){const e=this,t=e.$containerEl;e.selectEl.selectedOptions.length>=e.maxLength?t.find('input[type="checkbox"]').each((e=>{e.checked?a(e).parents("li").removeClass("disabled"):a(e).parents("li").addClass("disabled")})):t.find(".disabled").removeClass("disabled")}formatValueText(e){const t=this;let a;return a=t.params.formatValueText?t.params.formatValueText.call(t,e,t):e.join(", "),a}setValueText(e){const t=this;let s=[];void 0!==e?s=Array.isArray(e)?e:[e]:t.$selectEl.find("option").each((e=>{const t=a(e);if(e.selected){const a=e.dataset?e.dataset.displayAs:t.data("display-value-as");a&&void 0!==a?s.push(a):s.push(e.textContent.trim())}})),t.params.setValueText&&t.$valueEl.text(t.formatValueText(s))}getItemsData(){const e=this,t=e.app.theme,s=[];let r;return e.$selectEl.find("option").each((l=>{const o=a(l),n=o.dataset(),i=n.optionImage||e.params.optionImage,c=n.optionIcon||e.params.optionIcon,p="ios"===t&&(n.optionIconIos||e.params.optionIconIos),d="md"===t&&(n.optionIconMd||e.params.optionIconMd),m="aurora"===t&&(n.optionIconAurora||e.params.optionIconAurora),u=i||c||p||d||m,h=n.optionColor;let v=n.optionClass||"";o[0].disabled&&(v+=" disabled");const f=o.parent("optgroup")[0],$=f&&f.label;let b=!1;f&&f!==r&&(b=!0,r=f,s.push({groupLabel:$,isLabel:b})),s.push({value:o[0].value,text:o[0].textContent.trim(),selected:o[0].selected,groupEl:f,groupLabel:$,image:i,icon:c,iconIos:p,iconMd:d,iconAurora:m,color:h,className:v,disabled:o[0].disabled,id:e.id,hasMedia:u,checkbox:"checkbox"===e.inputType,radio:"radio"===e.inputType,inputName:e.inputName,inputType:e.inputType})})),e.items=s,s}renderSearchbar(){const e=this;return e.params.renderSearchbar?e.params.renderSearchbar.call(e):$jsx("form",{class:"searchbar"},$jsx("div",{class:"searchbar-inner"},$jsx("div",{class:"searchbar-input-wrap"},$jsx("input",{type:"search",spellcheck:e.params.searchbarSpellcheck||"false",placeholder:e.params.searchbarPlaceholder}),$jsx("i",{class:"searchbar-icon"}),$jsx("span",{class:"input-clear-button"})),e.params.searchbarDisableButton&&$jsx("span",{class:"searchbar-disable-button"},e.params.searchbarDisableText)))}renderItem(e,t){const a=this;if(a.params.renderItem)return a.params.renderItem.call(a,e,t);let s;if(e.isLabel)s=`<li class="item-divider">${e.groupLabel}</li>`;else{let t,l=e.selected;if(a.params.virtualList){const s=a.getValue();l=a.multiple?s.indexOf(e.value)>=0:s===e.value,a.multiple&&(t=a.multiple&&!l&&s.length===parseInt(a.maxLength,10))}const{icon:o,iconIos:n,iconMd:i,iconAurora:c}=e,p=o||n||i||c,d=(void 0===(r=o||n||i||c||"")&&(r=""),r.indexOf(":")>=0?r.split(":")[1]:""),m=function(e){if(void 0===e&&(e=""),e.indexOf(":")>=0){let t=e.split(":")[0];return"f7"===t&&(t="f7-icons"),"material"===t&&(t="material-icons"),t}return e}(o||n||i||c||"");s=$jsx("li",{class:`${e.className||""}${t?" disabled":""}`},$jsx("label",{class:`item-${e.inputType} item-content`},$jsx("input",{type:e.inputType,name:e.inputName,value:e.value,_checked:l}),$jsx("i",{class:`icon icon-${e.inputType}`}),e.hasMedia&&$jsx("div",{class:"item-media"},p&&$jsx("i",{class:`icon ${m}`},d),e.image&&$jsx("img",{src:e.image})),$jsx("div",{class:"item-inner"},$jsx("div",{class:"item-title"+(e.color?` text-color-${e.color}`:"")},e.text))))}var r;return s}renderItems(){const e=this;if(e.params.renderItems)return e.params.renderItems.call(e,e.items);return`\n        ${e.items.map(((t,a)=>`${e.renderItem(t,a)}`)).join("")}\n      `}renderPage(){const e=this;if(e.params.renderPage)return e.params.renderPage.call(e,e.items);let t=e.params.pageTitle;if(void 0===t){const a=e.$el.find(".item-title");t=a.length?a.text().trim():""}const a=e.params.cssClass;return $jsx("div",{class:`page smart-select-page ${a}`,"data-name":"smart-select-page","data-select-name":e.selectName},$jsx("div",{class:"navbar "+(e.params.navbarColorTheme?`color-${e.params.navbarColorTheme}`:"")},$jsx("div",{class:"navbar-bg"}),$jsx("div",{class:"navbar-inner sliding "+(e.params.navbarColorTheme?`color-${e.params.navbarColorTheme}`:"")},$jsx("div",{class:"left"},$jsx("a",{class:"link back"},$jsx("i",{class:"icon icon-back"}),$jsx("span",{class:"if-not-md"},e.params.pageBackLinkText))),t&&$jsx("div",{class:"title"},t),e.params.searchbar&&$jsx("div",{class:"subnavbar"},e.renderSearchbar()))),e.params.searchbar&&$jsx("div",{class:"searchbar-backdrop"}),$jsx("div",{class:"page-content"},$jsx("div",{class:`list smart-select-list-${e.id} ${e.params.virtualList?" virtual-list":""} ${e.params.formColorTheme?`color-${e.params.formColorTheme}`:""}`},$jsx("ul",null,!e.params.virtualList&&e.renderItems(e.items)))))}renderPopup(){const e=this;if(e.params.renderPopup)return e.params.renderPopup.call(e,e.items);let t=e.params.pageTitle;if(void 0===t){const a=e.$el.find(".item-title");t=a.length?a.text().trim():""}const a=e.params.cssClass||"";return $jsx("div",{class:`popup smart-select-popup ${a} ${e.params.popupTabletFullscreen?"popup-tablet-fullscreen":""}`,"data-select-name":e.selectName},$jsx("div",{class:"view"},$jsx("div",{class:"page smart-select-page "+(e.params.searchbar?"page-with-subnavbar":""),"data-name":"smart-select-page"},$jsx("div",{class:"navbar "+(e.params.navbarColorTheme?`color-${e.params.navbarColorTheme}`:"")},$jsx("div",{class:"navbar-bg"}),$jsx("div",{class:"navbar-inner sliding"},t&&$jsx("div",{class:"title"},t),$jsx("div",{class:"right"},$jsx("a",{class:"link popup-close","data-popup":`.smart-select-popup[data-select-name='${e.selectName}']`},e.params.popupCloseLinkText)),e.params.searchbar&&$jsx("div",{class:"subnavbar"},e.renderSearchbar()))),e.params.searchbar&&$jsx("div",{class:"searchbar-backdrop"}),$jsx("div",{class:"page-content"},$jsx("div",{class:`list smart-select-list-${e.id} ${e.params.virtualList?" virtual-list":""} ${e.params.formColorTheme?`color-${e.params.formColorTheme}`:""}`},$jsx("ul",null,!e.params.virtualList&&e.renderItems(e.items)))))))}renderSheet(){const e=this;if(e.params.renderSheet)return e.params.renderSheet.call(e,e.items);const t=e.params.cssClass;return $jsx("div",{class:`sheet-modal smart-select-sheet ${t}`,"data-select-name":e.selectName},$jsx("div",{class:"toolbar toolbar-top "+(e.params.toolbarColorTheme?`color-${e.params.toolbarColorTheme}`:"")},$jsx("div",{class:"toolbar-inner"},$jsx("div",{class:"left"}),$jsx("div",{class:"right"},$jsx("a",{class:"link sheet-close"},e.params.sheetCloseLinkText)))),$jsx("div",{class:"sheet-modal-inner"},$jsx("div",{class:"page-content"},$jsx("div",{class:`list smart-select-list-${e.id} ${e.params.virtualList?" virtual-list":""} ${e.params.formColorTheme?`color-${e.params.formColorTheme}`:""}`},$jsx("ul",null,!e.params.virtualList&&e.renderItems(e.items))))))}renderPopover(){const e=this;if(e.params.renderPopover)return e.params.renderPopover.call(e,e.items);const t=e.params.cssClass;return $jsx("div",{class:`popover smart-select-popover ${t}`,"data-select-name":e.selectName},$jsx("div",{class:"popover-inner"},$jsx("div",{class:`list smart-select-list-${e.id} ${e.params.virtualList?" virtual-list":""} ${e.params.formColorTheme?`color-${e.params.formColorTheme}`:""}`},$jsx("ul",null,!e.params.virtualList&&e.renderItems(e.items)))))}scrollToSelectedItem(){const e=this,{params:t,$containerEl:a}=e;if(!e.opened)return e;if(t.virtualList){let t;e.vl.items.forEach(((e,a)=>{void 0===t&&e.selected&&(t=a)})),void 0!==t&&e.vl.scrollToItem(t)}else{const t=a.find("input:checked").parents("li");if(!t.length)return e;const s=a.find(".page-content, .popover-inner");if(!s.length)return e;s.scrollTop(t.offset().top-s.offset().top-parseInt(s.css("padding-top"),10))}return e}onOpen(e,t){const s=this,r=s.app,l=a(t);if(s.$containerEl=l,s.openedIn=e,s.opened=!0,s.params.virtualList&&(s.vl=r.virtualList.create({el:l.find(".virtual-list"),items:s.items,renderItem:s.renderItem.bind(s),height:s.params.virtualListHeight,searchByItem:(e,t)=>!!(t.text&&removeDiacritics(t.text).toLowerCase().indexOf(e.trim().toLowerCase())>=0)})),s.params.scrollToSelectedItem&&s.scrollToSelectedItem(),s.params.searchbar){let t=l.find(".searchbar");if("page"===e&&"ios"===r.theme&&(t=a(r.navbar.getElByPage(l)).find(".searchbar")),s.params.appendSearchbarNotFound&&("page"===e||"popup"===e)){let e=null;e="string"==typeof s.params.appendSearchbarNotFound?a(`<div class="block searchbar-not-found">${s.params.appendSearchbarNotFound}</div>`):"boolean"==typeof s.params.appendSearchbarNotFound?a('<div class="block searchbar-not-found">Nothing found</div>'):s.params.appendSearchbarNotFound,e&&l.find(".page-content").append(e[0])}const n=o({el:t,backdropEl:l.find(".searchbar-backdrop"),searchContainer:`.smart-select-list-${s.id}`,searchIn:".item-title"},"object"==typeof s.params.searchbar?s.params.searchbar:{});s.searchbar=r.searchbar.create(n)}s.maxLength&&s.checkMaxLength(),s.params.closeOnSelect&&s.$containerEl.find(`input[type="radio"][name="${s.inputName}"]:checked`).parents("label").once("click",(()=>{s.close()})),s.attachInputsEvents(),s.$el.trigger("smartselect:open"),s.emit("local::open smartSelectOpen",s)}onOpened(){const e=this;e.$el.trigger("smartselect:opened"),e.emit("local::opened smartSelectOpened",e)}onClose(){const e=this;e.destroyed||(e.vl&&e.vl.destroy&&(e.vl.destroy(),e.vl=null,delete e.vl),e.searchbar&&e.searchbar.destroy&&(e.searchbar.destroy(),e.searchbar=null,delete e.searchbar),e.detachInputsEvents(),e.$el.trigger("smartselect:close"),e.emit("local::close smartSelectClose",e))}onClosed(){const e=this;e.destroyed||(e.opened=!1,e.$containerEl=null,delete e.$containerEl,e.$el.trigger("smartselect:closed"),e.emit("local::closed smartSelectClosed",e))}openPage(){const e=this;if(e.opened)return e;e.getItemsData();const t=e.renderPage(e.items);return e.view.router.navigate({url:e.url,route:{content:t,path:e.url,on:{pageBeforeIn(t,a){e.onOpen("page",a.el)},pageAfterIn(t,a){e.onOpened("page",a.el)},pageBeforeOut(t,a){e.onClose("page",a.el)},pageAfterOut(t,a){e.onClosed("page",a.el)}}}}),e}openPopup(){const e=this;if(e.opened)return e;e.getItemsData();const t={content:e.renderPopup(e.items),push:e.params.popupPush,swipeToClose:e.params.popupSwipeToClose,on:{popupOpen(t){e.onOpen("popup",t.el)},popupOpened(t){e.onOpened("popup",t.el)},popupClose(t){e.onClose("popup",t.el)},popupClosed(t){e.onClosed("popup",t.el)}}};return e.params.routableModals&&e.view?e.view.router.navigate({url:e.url,route:{path:e.url,popup:t}}):e.modal=e.app.popup.create(t).open(),e}openSheet(){const e=this;if(e.opened)return e;e.getItemsData();const t={content:e.renderSheet(e.items),backdrop:e.params.sheetBackdrop,scrollToEl:e.$el,closeByOutsideClick:!0,push:e.params.sheetPush,swipeToClose:e.params.sheetSwipeToClose,on:{sheetOpen(t){e.onOpen("sheet",t.el)},sheetOpened(t){e.onOpened("sheet",t.el)},sheetClose(t){e.onClose("sheet",t.el)},sheetClosed(t){e.onClosed("sheet",t.el)}}};return e.params.routableModals&&e.view?e.view.router.navigate({url:e.url,route:{path:e.url,sheet:t}}):e.modal=e.app.sheet.create(t).open(),e}openPopover(){const e=this;if(e.opened)return e;e.getItemsData();const t={content:e.renderPopover(e.items),targetEl:e.$el,on:{popoverOpen(t){e.onOpen("popover",t.el)},popoverOpened(t){e.onOpened("popover",t.el)},popoverClose(t){e.onClose("popover",t.el)},popoverClosed(t){e.onClosed("popover",t.el)}}};return e.params.routableModals&&e.view?e.view.router.navigate({url:e.url,route:{path:e.url,popover:t}}):e.modal=e.app.popover.create(t).open(),e}open(e){const t=this;if(t.opened)return t;let a=!1;function s(){a=!0}if(t.$el&&t.$el.trigger("smartselect:beforeopen",{prevent:s}),t.emit("local::beforeOpen smartSelectBeforeOpen",t,s),a)return t;return t[`open${(e||t.params.openIn).split("").map(((e,t)=>0===t?e.toUpperCase():e)).join("")}`](),t}close(){const e=this;return e.opened?(e.params.routableModals&&e.view||"page"===e.openedIn?e.view.router.back():(e.modal.once("modalClosed",(()=>{i((()=>{e.destroyed||(e.modal.destroy(),delete e.modal)}))})),e.modal.close()),e):e}init(){this.attachEvents(),this.setValueText()}destroy(){const e=this;e.emit("local::beforeDestroy smartSelectBeforeDestroy",e),e.$el.trigger("smartselect:beforedestroy"),e.detachEvents(),delete e.$el[0].f7SmartSelect,c(e),e.destroyed=!0}}var d={name:"smartSelect",params:{smartSelect:{el:void 0,valueEl:void 0,setValueText:!0,formatValueText:null,openIn:"page",popupPush:!1,popupSwipeToClose:void 0,sheetPush:!1,sheetSwipeToClose:void 0,sheetBackdrop:!1,pageTitle:void 0,pageBackLinkText:"Back",popupCloseLinkText:"Close",popupTabletFullscreen:!1,sheetCloseLinkText:"Done",searchbar:!1,searchbarPlaceholder:"Search",searchbarDisableText:"Cancel",searchbarDisableButton:void 0,searchbarSpellcheck:!1,closeOnSelect:!1,virtualList:!1,virtualListHeight:void 0,scrollToSelectedItem:!1,formColorTheme:void 0,navbarColorTheme:void 0,routableModals:!1,url:"select/",cssClass:"",renderPage:void 0,renderPopup:void 0,renderSheet:void 0,renderPopover:void 0,renderItems:void 0,renderItem:void 0,renderSearchbar:void 0}},static:{SmartSelect:p},create(){const e=this;e.smartSelect=o(l({defaultSelector:".smart-select",constructor:p,app:e,domProp:"f7SmartSelect"}),{open(t){const a=e.smartSelect.get(t);if(a&&a.open)return a.open()},close(t){const a=e.smartSelect.get(t);if(a&&a.close)return a.close()}})},on:{tabMounted(e){const t=this;a(e).find(".smart-select-init").each((e=>{t.smartSelect.create(o({el:e},a(e).dataset()))}))},tabBeforeRemove(e){a(e).find(".smart-select-init").each((e=>{e.f7SmartSelect&&e.f7SmartSelect.destroy&&e.f7SmartSelect.destroy()}))},pageInit(e){const t=this;e.$el.find(".smart-select-init").each((e=>{t.smartSelect.create(o({el:e},a(e).dataset()))}))},pageBeforeRemove(e){e.$el.find(".smart-select-init").each((e=>{e.f7SmartSelect&&e.f7SmartSelect.destroy&&e.f7SmartSelect.destroy()}))}},clicks:{".smart-select":function(e,t){const a=this;if(!e[0].f7SmartSelect){a.smartSelect.create(o({el:e},t)).open()}}},vnode:{"smart-select-init":{insert(e){const t=e.elm;this.smartSelect.create(o({el:t},a(t).dataset()))},destroy(e){const t=e.elm;t.f7SmartSelect&&t.f7SmartSelect.destroy&&t.f7SmartSelect.destroy()}}}};if(t){if(e.prototype.modules&&e.prototype.modules[d.name])return;e.use(d),e.instance&&(e.instance.useModuleParams(d,e.instance.params),e.instance.useModule(d))}return d}(Framework7, typeof Framework7AutoInstallComponent === 'undefined' ? undefined : Framework7AutoInstallComponent))