(this["webpackJsonpreact-firebase-auth"]=this["webpackJsonpreact-firebase-auth"]||[]).push([[0],{31:function(e,a,t){e.exports=t(51)},36:function(e,a,t){},51:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(29),l=t.n(c),s=(t(36),t(10)),m=t(11),o=t(13),i=t(12),u=t(17),d=t(3),p=function(e){return r.a.createElement("div",{className:"Home container",align:"center"},r.a.createElement("h5",{className:"mt-5"},"Hello : ",e.user.displayName),r.a.createElement("button",{onClick:e.logOutUser,className:"btn btn-primary"},"Sing Out"))},h=t(22),b=t(19),E=t.n(b);E.a.initializeApp({apiKey:"AIzaSyDid7wdYVVIQ403LURGpoYv_TPRyZ4RtiY",authDomain:"fir-project-2c749.firebaseapp.com",databaseURL:"https://fir-project-2c749.firebaseio.com",projectId:"fir-project-2c749",storageBucket:"fir-project-2c749.appspot.com",messagingSenderId:"326945188628",appId:"1:326945188628:web:aa5531e0a440c6e9a07001"});new E.a.auth.GoogleAuthProvider;var f=E.a.auth(),v=E.a,g=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).handleChange=function(e){n.setState(Object(h.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault();var a=n.state,t=a.email,r=a.password;v.auth().signInWithEmailAndPassword(t,r).then((function(e){n.props.history.push("/home"),console.log(e)})).catch((function(e){n.setState({error:e}),alert(e)}))},n.state={email:"",password:"",error:null},n}return Object(m.a)(t,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.password;return r.a.createElement("div",{className:"Login container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement("div",{className:"card mt-5"},r.a.createElement("div",{className:"card-header"},r.a.createElement("span",{className:"card-title"},"SIGN IN")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"E-Mail Address"),r.a.createElement("input",{type:"email",className:"form-control",name:"email",value:a,onChange:this.handleChange,placeholder:"E-Mail Address..."})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",className:"form-control",name:"password",value:t,onChange:this.handleChange,placeholder:"Password..."})),r.a.createElement("div",{className:"form-check mb-3"},r.a.createElement("label",{className:"form-check-label"},r.a.createElement("input",{type:"checkbox",className:"form-check-input",value:""}),"Remember Me")),r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"submit",value:"Sign In",className:"btn btn-primary btn-block"}),r.a.createElement(u.b,{to:"/register",className:"btn btn-outline-primary btn-block"},"Sing Up"))))))))}}]),t}(n.Component),N=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).handleChange=function(e){n.setState(Object(h.a)({},e.target.name,e.target.value))},n.handleSubmit=function(e){e.preventDefault();var a=n.state,t=a.email,r=a.username,c=a.password;v.auth().createUserWithEmailAndPassword(t,c).then((function(){v.auth().currentUser.updateProfile({displayName:r}).then((function(){n.props.history.push("/home")}))})).catch((function(e){n.setState({error:e}),alert(e)}))},n.state={username:"",email:"",password:"",error:null},n}return Object(m.a)(t,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.username,n=e.password;e.error;return r.a.createElement("div",{className:"Register container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 offset-md-3"},r.a.createElement("div",{className:"card mt-5"},r.a.createElement("div",{className:"card-header"},r.a.createElement("span",{className:"card-title"},"SIGN UP")),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"E-Mail Address"),r.a.createElement("input",{type:"email",className:"form-control",name:"email",value:a,onChange:this.handleChange,placeholder:"E-Mail Address..."})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"User Name"),r.a.createElement("input",{type:"text",className:"form-control",name:"username",value:t,onChange:this.handleChange,placeholder:"User Name..."})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",className:"form-control",name:"password",value:n,onChange:this.handleChange,placeholder:"Password..."})),r.a.createElement("div",{className:"form-group mt-4"},r.a.createElement("input",{type:"submit",className:"btn btn-primary btn-block",value:"Sign Up"}),r.a.createElement(u.b,{to:"/",className:"btn btn-outline-primary btn-block"},"Sign In"))))))))}}]),t}(n.Component),y=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"No Match container"},r.a.createElement("h2",{className:"text-danger"},"Error redirect url missmatch!"))}}]),t}(n.Component),w=function(e){Object(o.a)(t,e);var a=Object(i.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).logOutUser=function(){v.auth().signOut().then(window.location="/")},n.state={user:""},n}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;f.onAuthStateChanged((function(a){a&&e.setState({user:a})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(u.a,{basename:"/"},r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/home",render:function(a){return r.a.createElement(p,Object.assign({},a,{logOutUser:e.logOutUser,user:e.state.user}))}}),r.a.createElement(d.a,{exact:!0,path:"/",component:g}),r.a.createElement(d.a,{exact:!0,path:"/register",component:N}),r.a.createElement(d.a,{exact:!0,component:y}))))}}]),t}(n.Component);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.67d6eeda.chunk.js.map