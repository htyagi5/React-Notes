//function to render and add the required element  


// function customRender(reactElement,container){
// const domElement= document.createElement(reactElement.type);
// domElement.innerHTML=reactElement.Children;
// domElement.setAttribute('href',reactElement.props.href);
// domElement.setAttribute('target',reactElement.props.target);
// container.appendChild(domElement)
// }

// or

function customRender(reactElement,container){
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.Children;
    for(const prop in reactElement.props){
     if(prop==="children")continue;
     domElement.setAttribute(prop,reactElement.props[prop]);
    }
    container.appendChild(domElement);
}
//element defining  ->tells how react intenally make a tree
const reactElement={
type: "a",
props:{
    href:"https://google.com",
    target:"_blank"
},
Children:"click here this is anchorized"
}
//select the elemen₺ in which we have to add html
const mainContainer=document.querySelector("#root")

customRender(reactElement,mainContainer);
