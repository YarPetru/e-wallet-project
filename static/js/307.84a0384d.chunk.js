"use strict";(self.webpackChunke_wallet_project=self.webpackChunke_wallet_project||[]).push([[307],{3307:function(e,r,a){a.r(r),a.d(r,{default:function(){return v}});var n=a(5705),c=a(3284),s=a(8535),t=a(8174),i=a(5122),d=a(6828),o={form:"NewCardForm_form__d36Sw",fieldWrapper:"NewCardForm_fieldWrapper__BhHdC",input:"NewCardForm_input__2PBNi",errorMessage:"NewCardForm_errorMessage__XxiXd",buttonsWrapper:"NewCardForm_buttonsWrapper__RBGDf",formBtn:"NewCardForm_formBtn__ShhKG",cancelBtn:"NewCardForm_cancelBtn__X5gDj"},l=a(4348),u=a.n(l),m=a(184);c.kM(c.Z_,"integer",(function(){return this.matches(/^\d+$/,"The field should have digits only")}));var p=c.Ry().shape({cardNumber:c.Z_().integer().length(16).required("Card number is a requred field"),expiry:c.Z_().required("Expiry is a requred field"),cvv:c.Z_().integer().length(3).required("CVV is a requred field"),cardHolder:c.Z_(),amount:c.Z_().integer().required("Amount is a requred field"),currency:c.Z_().required("You have to choose a currency")}),N={cardNumber:"",expiry:"",cvv:"",cardHolder:"",amount:"",currency:""},h=function(){var e=(0,s.v9)((function(e){return e.wallet.cards})),r=(0,s.I0)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(d.Z,{title:"Adding Cards"}),(0,m.jsx)(n.J9,{initialValues:N,validationSchema:p,onSubmit:function(a,n){var c=e.map((function(e){return e.cardNumber}));c.includes(a.cardNumber)&&t.Am.warn("You already have card with the same number",{toastId:"warn1"}),!c.includes(a.cardNumber)&&u()(a.cardNumber)&&r(i.Z0(a.amount,a.cardHolder,a.cardNumber,a.currency,a.cvv,a.expiry))&&n.resetForm(),!1===u()(a.cardNumber)&&t.Am.warn("\ud83d\ude22 You entered the invalid card number - it does not satisfy the luhn algorithm. Try again, please",{toastId:"warn2"})},children:(0,m.jsxs)(n.l0,{className:o.form,children:[(0,m.jsxs)("div",{className:o.fieldWrapper,children:[(0,m.jsx)(n.gN,{className:"".concat(o.input," ").concat(o.cardNumberInput),id:"cardNumber",name:"cardNumber",placeholder:"XXXX-XXXX-XXXX-XXXX"}),(0,m.jsx)(n.Bc,{className:o.errorMessage,name:"cardNumber",component:"div"})]}),(0,m.jsxs)("div",{className:o.fieldWrapper,children:[(0,m.jsx)(n.gN,{className:"".concat(o.input," ").concat(o.expiryInput),id:"expire",name:"expiry",type:"month",min:"2022-09",max:"2030-12"}),(0,m.jsx)(n.Bc,{className:o.errorMessage,name:"expiry",component:"div"})]}),(0,m.jsxs)("div",{className:o.fieldWrapper,children:[(0,m.jsx)(n.gN,{className:"".concat(o.input," ").concat(o.cvvInput),id:"cvv",name:"cvv",placeholder:"CVV"}),(0,m.jsx)(n.Bc,{className:o.errorMessage,name:"cvv",component:"div"})]}),(0,m.jsx)("div",{className:o.fieldWrapper,children:(0,m.jsx)(n.gN,{className:"".concat(o.input," ").concat(o.cardHolderInput),id:"cardHolder",name:"cardHolder",placeholder:"Card Holder Name"})}),(0,m.jsxs)("div",{className:o.fieldWrapper,children:[(0,m.jsx)(n.gN,{className:"".concat(o.input," ").concat(o.amountInput),id:"amount",name:"amount",placeholder:"Amount"}),(0,m.jsx)(n.Bc,{className:o.errorMessage,name:"amount",component:"div"})]}),(0,m.jsxs)("div",{className:o.fieldWrapper,children:[(0,m.jsxs)(n.gN,{className:o.input,as:"select",id:"currency",name:"currency",children:[(0,m.jsx)("option",{className:o.option,value:"",children:"Select a currency"}),(0,m.jsx)("option",{className:o.option,value:"UAH",children:"UAH"}),(0,m.jsx)("option",{className:o.option,value:"USD",children:"USD"}),(0,m.jsx)("option",{className:o.option,value:"EUR",children:"EUR"})]}),(0,m.jsx)(n.Bc,{className:o.errorMessage,name:"currency",component:"div"})]}),(0,m.jsxs)("div",{className:o.buttonsWrapper,children:[(0,m.jsx)("button",{className:o.formBtn,type:"submit",children:"Add Card"}),(0,m.jsx)("button",{className:"".concat(o.formBtn," ").concat(o.cancelBtn),type:"reset",children:"Cancel"})]})]})})]})},v=function(){return(0,m.jsx)(h,{})}},4348:function(e){var r;e.exports=(r=[0,2,4,6,8,1,3,5,7,9],function(e){if("string"!==typeof e)throw new TypeError("Expected string input");if(!e)return!1;for(var a,n=e.length,c=1,s=0;n;)a=parseInt(e.charAt(--n),10),s+=(c^=1)?r[a]:a;return s%10===0})}}]);
//# sourceMappingURL=307.84a0384d.chunk.js.map