console.log("DOM");

//DAY 1-DOM

// //Used to create HTML Elements Dynamically

// //STEP1: creation of element

// var element=document.createElement("div");  // its a inbuilt method which takes  element name as parameter Used to create a new element in a document whatever tag we need to have we need to give this in the bracket

// // STEP 2:giving the content to the element

// element.innerHTML="This is a div tag created dynamically";

// //STEP3:Appending the content to the body of the document

// document.body.append(element);

// var p = document.createElement("p");
// p.innerHTML="This is My first Dynamic Tag";
// document.body.append(p);

//More details about Inner HTML-Content and  Nested eLements
//Inner Text is a alternative to Inner HTML
//Inner HTML=>used to access the html content inside the elements
//Inner Text=>used to accesss the  text content inside the element

// var element=document.createElement("div");
// var span=document.createElement("span");
// span.innerHTML="<p>My Dyanamic DOM Page</p>";  //o/p:My Dyanamic DOM Page
// //span.innerText="<p>My Dyanamic DOM Page</p>";  //<p>My Dyanamic DOM Page</p>

// element.append(span);
// document.body.append(element);

//Giving attrributes to the elements created,We can use setAttribute Method here
//It can have two parameters that should be attribute name and attribute value
//Both should be string

// var tag=document.createElement("div");
// tag.setAttribute("class","container");
// tag.innerHTML="New Attribute Creation";
// document.body.append(tag);

// var div1=document.createElement("div");
// div1.setAttribute("class","container");
// var div2=document.createElement("div");
// div2.setAttribute("class","row");
// var div3=document.createElement("div");
// div3.setAttribute("class","col");
// div3.innerHTML="This is tag";
// div2.append(div3);
// div1.append(div2);
// document.body.append(div1);


// var ele=document.createElement("p");
// ele.setAttribute("class","container");
// ele.innerHTML="This is Dynamic Tag";
// document.body.append(ele);


//DAY 2-DOM

//document.getElementById()
//This method is applicable only if you have id element in the HTML File.Element should be in the 
//html File.It returns the HTML element and we can extract in js file
//Note:If no element present it will return null


// var ele=document.getElementById("demo");
// console.log(ele);

//document.getElementsByClassName()
//This is applicable only if you have an class name in html elements
//output of this is array type 





