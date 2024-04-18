import{h as i,r as e,c as r}from"./p-d7399561.js";const s=()=>i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},i("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),i("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),t=()=>i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},i("polyline",{points:"9 18 15 12 9 6"})),a=()=>i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},i("polyline",{points:"15 18 9 12 15 6"})),o=()=>i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",class:"search-bar-icon"},i("circle",{cx:"11",cy:"11",r:"8"}),i("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})),n=class{constructor(i){e(this,i),this.previousNav=r(this,"previousNav",7),this.nextNav=r(this,"nextNav",7),this.search=r(this,"search",7),this.focusChange=r(this,"focusChange",7),this.value=void 0,this.placeholder=void 0,this.hasNavigation=void 0,this.focused=void 0,this.placeholderWidth=void 0}handleSearch(e){e.preventDefault(),this.value=e.target.value}handleFocus(){this.focused=!0}handleBlur(){this.value||(this.focused=!1)}componentDidLoad(){this.handlePlaceholderSize()}handlePlaceholderSize(){setTimeout((()=>{this.placeholderWidth=this.placeholderElement.offsetWidth}),50)}handleValueChange(){this.search.emit(this.value)}watchPropHandler(e){this.focusChange.emit(e)}handleClick(){this.focused=!0,setTimeout((()=>{this.input.focus()}),50)}handleClear(e){return e.preventDefault(),e.stopImmediatePropagation(),this.value="",this.focused=!1,!1}handleNext(e){e.stopImmediatePropagation(),e.preventDefault(),this.nextNav.emit()}handlePrevious(e){e.stopImmediatePropagation(),e.preventDefault(),this.previousNav.emit()}render(){return i("div",{class:{"search-bar":!0,"search-bar--is-active":this.focused||!!this.value,"search-bar--has-navigation":this.hasNavigation},onClick:()=>this.handleClick()},i("span",{class:"search-bar__search-icon search-bar__icon"},i(o,null)),i("div",{class:"search-bar__placeholder",ref:e=>this.placeholderElement=e,"aria-hidden":!0},this.placeholder),i("input",{type:"text",value:this.value,placeholder:this.placeholder,ref:e=>this.input=e,style:{width:(this.placeholderWidth||0)+"px"},onInput:e=>this.handleSearch(e),onFocus:()=>this.handleFocus(),onBlur:()=>this.handleBlur()}),i("span",{class:"search-bar__controls"},i("span",{class:"search-bar__control-prev",onClick:e=>this.handlePrevious(e)},i(a,null)),i("span",{class:"search-bar__control-next",onClick:e=>this.handleNext(e)},i(t,null)),i("div",{class:"search-bar__control-clear",onClick:e=>this.handleClear(e)},i(s,null))))}static get watchers(){return{placeholder:["handlePlaceholderSize"],value:["handleValueChange"],focused:["watchPropHandler"]}}};n.style=':host{display:block}.search-bar{position:relative;font-family:var(--plyr-font-family, "San Francisco", -apple-system, BlinkMacSystemFont, ".SFNSText-Regular", Avenir, "Avenir Next", "Helvetica Neue", "Segoe UI", Helvetica, Arial, sans-serif);font-size:16px;color:#ddd;z-index:1;display:flex;align-items:center;gap:10px}.search-bar>*{height:41px}.search-bar__controls{display:flex;align-items:stretch;position:absolute;right:0}.search-bar__controls svg{display:block;width:25px;height:25px}.search-bar__placeholder{height:0;font-weight:bold;visibility:hidden;position:absolute;transition:none;white-space:nowrap}.search-bar input{z-index:1;box-sizing:border-box;background:transparent;border:none;color:#fff;font-size:16px;transition:width 0.25s ease;outline:none;padding:0}.search-bar input::placeholder{color:#fff}.search-bar__control-prev,.search-bar__control-next,.search-bar__control-clear{opacity:0;visibility:hidden;transition:0.3s cubic-bezier(0.165, 0.84, 0.44, 1);transform-origin:center center;padding:0;border:0;background:0;cursor:pointer;display:flex;flex-direction:column;justify-content:center;z-index:1}.search-bar__control-clear{transform:scale(0.5)}.search-bar--is-active input{width:300px !important;padding-right:26px}.search-bar--is-active.search-bar--has-navigation .search-bar__control-prev,.search-bar--is-active.search-bar--has-navigation .search-bar__control-next{opacity:1;visibility:visible}.search-bar--is-active.search-bar--has-navigation input{padding-right:80px}.search-bar--is-active .search-bar__control-clear{transform:scale(1);opacity:1;visibility:visible;cursor:pointer}.search-bar__icon{width:20px;height:20px;flex-grow:0;flex-shrink:0;cursor:pointer}.search-bar__icon svg{width:20px;height:20px}';export{n as presto_search_bar_ui};