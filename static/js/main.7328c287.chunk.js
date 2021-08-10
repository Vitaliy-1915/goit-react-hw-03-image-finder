(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{19:function(e,n,t){},20:function(e,n,t){},45:function(e,n,t){"use strict";t.r(n);var a,i,o,r,c,s,p,l=t(0),d=t.n(l),g=t(11),h=t.n(g),u=(t(19),t(20),t(10)),m=t(5),b=t(6),x=t(8),f=t(7),j=t(12),v=t.n(j),O=t(3),y=t(4),w=y.a.header(a||(a=Object(O.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),k=y.a.form(i||(i=Object(O.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),S=y.a.button(o||(o=Object(O.a)(['\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url("https://image.flaticon.com/icons/svg/149/149852.svg");\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  :hover {\n    opacity: 1;\n  }\n']))),C=y.a.span(r||(r=Object(O.a)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]))),I=y.a.input(c||(c=Object(O.a)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),N=t(1),z=function(e){Object(x.a)(t,e);var n=Object(f.a)(t);function t(){var e;Object(m.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=n.call.apply(n,[this].concat(i))).state={imageName:"",error:null},e.handleSubmit=function(n){n.preventDefault(),""!==e.state.imageName.trim()?(e.props.onSubmit(e.state.imageName),e.setState({imageName:""})):alert("Enter images and photos")},e.handleFormChange=function(n){e.setState({imageName:n.currentTarget.value.toLowerCase()})},e}return Object(b.a)(t,[{key:"render",value:function(){return Object(N.jsx)(w,{children:Object(N.jsxs)(k,{onSubmit:this.handleSubmit,children:[Object(N.jsx)(S,{type:"submit",children:Object(N.jsx)(C,{children:"Search"})}),Object(N.jsx)(I,{id:this.state.id,type:"text",name:"imageName",value:this.state.imageName,onChange:this.handleFormChange,autocomplete:"off",placeholder:"Search images and photos"})]})})}}]),t}(l.Component),M=y.a.li(s||(s=Object(O.a)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]))),L=y.a.img(p||(p=Object(O.a)(["\n  width: 100%;\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n\n  :hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"])));var F,E=function(e){var n=e.smallImage,t=e.tag,a=e.onClick;return Object(N.jsx)(M,{onClick:a,children:Object(N.jsx)(L,{src:n,alt:t})})},A=y.a.ul(F||(F=Object(O.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"])));var B,P=function(e){var n=e.images,t=e.openModal;return Object(N.jsx)(A,{children:n.map((function(e){var n=e.id,a=e.webformatURL,i=e.largeImageURL,o=e.tags;return Object(N.jsx)(E,{tag:o,smallImage:a,onClick:function(){return t(i,o)}},n)}))})},T=y.a.button(B||(B=Object(O.a)(["\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n\n  :hover,\n  :focus {\n    background-color: #303f9f;\n  }\n"])));var U,D,K=function(e){var n=e.onClick;return Object(N.jsx)(T,{type:"button",onClick:n,children:"Load more"})},J=y.a.div(U||(U=Object(O.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]))),R=y.a.div(D||(D=Object(O.a)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 24px);\n"]))),W=function(e){Object(x.a)(t,e);var n=Object(f.a)(t);function t(){var e;Object(m.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=n.call.apply(n,[this].concat(i))).handleKeyPress=function(n){"Escape"===n.code&&e.props.onClose()},e.handleBackdropClick=function(n){n.currentTarget===n.target&&e.props.onClose()},e}return Object(b.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this.props.image;return Object(N.jsx)(J,{onClick:this.handleBackdropClick,children:Object(N.jsx)(R,{children:Object(N.jsx)("img",{src:e.src,alt:e.alt})})})}}]),t}(l.Component);var _,q={FetchImages:function(e,n){return fetch("https://pixabay.com/api/?q=".concat(e,"&page=").concat(n,"&key=21859800-af94843fb327cc57780ddd667&image_type=photo&orientation=horizontal&per_page=12")).then((function(n){return n.ok?n.json():Promise.reject(new Error("There is no images with name ".concat(e)))}))}},H=y.a.div(_||(_=Object(O.a)(["\n  text-align: center;\n  padding: 5px;\n  background-color: #61dafb78;\n"]))),G=function(e){Object(x.a)(t,e);var n=Object(f.a)(t);function t(){var e;Object(m.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=n.call.apply(n,[this].concat(i))).state={imageName:"",page:1,images:[],modalIsOpen:!1,selectedImage:null,status:"idle",error:null},e.getImages=function(){var n=e.state,t=n.imageName,a=n.page;q.FetchImages(t,a).then((function(e){return e.hits})).then((function(n){return e.setState((function(e){return{images:[].concat(Object(u.a)(e.images),Object(u.a)(n)),status:"resolved"}}))})).catch((function(n){return e.setState({error:n,status:"rejected"})}))},e.resetState=function(){e.setState({page:1,images:[],status:"idle"})},e.formSubmit=function(n){e.resetState(),e.setState({imageName:n})},e.onLoadMore=function(){e.setState((function(e){return{page:e.page+1}}))},e.openModal=function(n,t){e.setState({modalIsOpen:!0,selectedImage:{src:n,alt:t}})},e.closeModal=function(){return e.setState({modalIsOpen:!1})},e}return Object(b.a)(t,[{key:"componentDidUpdate",value:function(e,n){var t=this.state.images;if(n.imageName!==this.state.imageName)return this.setState({status:"pending",page:1,images:[]}),void this.getImages();n.page!==this.state.page&&(this.setState({status:"pending"}),this.getImages()),n.images!==t&&window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,n=e.images,t=e.error,a=e.status,i=e.selectedImage,o=e.modalIsOpen;return Object(N.jsxs)(H,{children:[Object(N.jsx)(z,{onSubmit:this.formSubmit}),o&&Object(N.jsx)(W,{image:i,onClose:this.closeModal}),"idle"===a&&Object(N.jsx)("h1",{children:"Start your search "}),"pending"===a&&Object(N.jsx)(v.a,{type:"Watch",color:"#00BFFF",height:300,width:300,timeout:3e3}),"rejected"===a&&Object(N.jsx)("h1",{children:t.message}),"resolved"===a&&Object(N.jsx)(P,{images:n,openModal:this.openModal}),"resolved"===a&&n.length<1&&Object(N.jsx)("h2",{children:"invalid name!!!"}),n.length>0&&Object(N.jsx)(K,{onClick:this.onLoadMore})]})}}]),t}(l.Component);var Q=function(){return Object(N.jsx)("div",{className:"App",children:Object(N.jsx)(G,{})})};h.a.render(Object(N.jsx)(d.a.StrictMode,{children:Object(N.jsx)(Q,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.7328c287.chunk.js.map