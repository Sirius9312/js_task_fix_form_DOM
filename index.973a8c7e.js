function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function t(e){for(var t="",r=e.split("").filter(function(e){return e===e.toUpperCase()}),n=e.replaceAll(/[A-Z]/g," ").slice(1).split(" "),l=0;l<r.length;l++)t+=r[l]+n[l]+" ";return t.slice(0,t.length-1)}for(var r,n=function(t){if(Array.isArray(t))return e(t)}(r=document.querySelectorAll(".field-text"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);if("Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,r)}}(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),l=0;l<n.length;l++){var o=document.createElement("label");o.classList.add("field-label"),o.htmlFor=n[l].id,o.textContent=t(n[l].name.slice(0,1).toUpperCase()+n[l].name.slice(1)),n[l].parentNode.appendChild(o),n[l].setAttribute("placeholder",t(n[l].name.slice(0,1).toUpperCase()+n[l].name.slice(1)))}
//# sourceMappingURL=index.973a8c7e.js.map