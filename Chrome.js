
let inputBtn= document.getElementById('input-btn');
 /*inputBtn.addEventListener("click", function()     Can also use Arrow function
{
      console.log('Button clicked from EventListener')
});  */ 
let myLeads=['www.w3schools.com', 'www.example.com','www.greatLead.com'];
const inputEl= document.getElementById('input-el');
const ulEl=document.getElementById('ul-el');
//console.log(ulEl);
 inputBtn.addEventListener("click", (e) =>{
   e.preventDefault();
    myLeads.push(inputEl.value);
     inputEl.value='';
    renderLeads();
});

        // console.log(myLeads[i]);
    // ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
  
   /*  const div=document.getElementById('div-el');
  
      div.innerHTML="<button>" +'Buy!'+ "</button>";
 
        function container(){
           div.innerHTML +="<p>" +"Thank you for buying" + "<p>";
        }   */

  function renderLeads(){         
 let listItems='';
 for(i=0; i<myLeads.length;i++){
  // listItems += "<li>" + myLeads[i] + "</li>";
  
  //listItems += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + " "+"</a> </li>";
    //Lets write the code in a template string
    listItems += `
    <li>
    <a  target='_blank' href='${myLeads[i]}'>
     ${myLeads[i]}
     </a>
     </li>`
}

  ulEl.innerHTML=listItems;
  }
