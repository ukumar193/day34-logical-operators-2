import React,{useRef} from 'react'

function MarkSheet() {
     let NameInputRef = useRef();
     let rollInputRef = useRef();
     let telInputRef = useRef();
     let engInputRef = useRef();
     let hinInputRef = useRef();
     let matInputRef = useRef();
     let sciInputRef = useRef();
     let socInputRef = useRef();

     let resultRef = useRef();
     let telSpaRef = useRef();
     let matSpaRef = useRef();
     let engSpaRef = useRef();
     let hinSpaRef = useRef();
     let sciSpaRef = useRef();
     let socSpaRef = useRef();

     let totalonClick =()=>{
          let name     = NameInputRef.current.value;
          let roll     = Number(rollInputRef.current.value);
          let telMarks = Number(telInputRef.current.value);
          let engMarks = Number(engInputRef.current.value);
          let hinMarks = Number(hinInputRef.current.value);
          let matMarks = Number(matInputRef.current.value);
          let sciMarks = Number(sciInputRef.current.value);
          let socMarks = Number(socInputRef.current.value);
     
          let result ;
     
        let totalmarks =telMarks+engMarks+hinMarks+matMarks+sciMarks+socMarks;
        let per = (totalmarks/600)*100;
     //    if(telMarks<34||engMarks<34||hinMarks<34||matMarks<34||sciMarks<34||socMarks<34) 
     //    {result ="fail"}
     //      else{ result ="pass"};
     if(telMarks >34 &engMarks >34& hinMarks>34& matMarks>34& sciMarks>34& socMarks>34)
     {result ="pass"}
     else{result="fail"}
     
      resultRef.current.innerHTML=(`roll no.${roll} ${name}  ${result} and  got ${totalmarks} with ${per} % `);
     }
     let telonChange=()=>{
          let marks =telInputRef.current.value
           if(marks >=0 && marks <=100)
     {if(marks>=35){telSpaRef.current.innerHTML="pass";
          telSpaRef.current.style.backgroundColor="green"}
     else{telSpaRef.current.innerHTML="fail";
          telSpaRef.current.style.backgroundColor="red"
  }

     }   else{telSpaRef.current.innerHTML="invalid";
          telSpaRef.current.style.backgroundColor="yellow"
  }   }
     let engonChange=()=>{
          let marks =engInputRef.current.value
          if(marks >=0 && marks <=100){
          if(marks >=35){engSpaRef.current.innerHTML="pass";
               engSpaRef.current.style.backgroundColor="green"}
   else{engSpaRef.current.innerHTML="fail";
          engSpaRef.current.style.backgroundColor="red"}
          }
          else{engSpaRef.current.innerHTML="invalid";
               engSpaRef.current.style.backgroundColor="yellow"
               }
     }
     
     return (
    <div>
     <form>
     <div>
     <label>Name</label>
     <input ref={NameInputRef} onFocus={()=>{NameInputRef.current.style.backgroundColor="blue"}} 
     onBlur={()=>{NameInputRef.current.style.backgroundColor=""}}></input>
     <span></span>
     </div>
     <div>
     <label>Roll Number</label>
     <input ref={rollInputRef} onFocus={()=>{rollInputRef.current.style.backgroundColor="blue"}} 
     onBlur={()=>{rollInputRef.current.style.backgroundColor=""}}></input>
     <span></span>
     </div>
     <div>
     <label>Telugu</label>
     <input ref={telInputRef} onChange={()=>{
       telonChange();   
     }} onFocus={()=>{telInputRef.current.style.backgroundColor="blue"}} 
     onBlur={()=>{telInputRef.current.style.backgroundColor=""}}
     ></input>
     <span ref={telSpaRef}></span>
     </div>
     <div>
     <label>English</label>
     <input ref={engInputRef} onChange={()=>{
          engonChange();
       }} onFocus={()=>{engInputRef.current.style.backgroundColor="blue"}} 
     onBlur={()=>{engInputRef.current.style.backgroundColor=""}}
     ></input>
     <span ref={engSpaRef}></span>
     </div>
     <div>
     <label>Hindi</label>
     <input ref={hinInputRef} onChange={()=>{
          if(hinInputRef.current.value>34)
          {hinSpaRef.current.innerHTML="pass";
          hinSpaRef.current.style.backgroundColor="green"
          }  
     else{hinSpaRef.current.innerHTML="fail";
     hinSpaRef.current.style.backgroundColor="red"
     }      
     }} onFocus={()=>{hinInputRef.current.style.backgroundColor="blue"}} 
     onBlur={()=>{hinInputRef.current.style.backgroundColor=""}}
     ></input>
     <span ref={hinSpaRef}></span>
     </div>
     <div>
     <label>Maths</label>
     <input ref={matInputRef} onChange={()=>{
          if(matInputRef.current.value>34)
          {matSpaRef.current.innerHTML="pass";
          matSpaRef.current.style.backgroundColor="green"
          }  
     else{matSpaRef.current.innerHTML="fail";
     matSpaRef.current.style.backgroundColor="red"
     }      
     }} onFocus={()=>{matInputRef.current.style.backgroundColor="blue"}} 
     onBlur={()=>{matInputRef.current.style.backgroundColor=""}}
     ></input>
     <span ref={matSpaRef}></span>
     </div>
     <div>
     <label>Science</label>
     <input ref={sciInputRef} onChange={()=>{
          if(sciInputRef.current.value>34)
          {sciSpaRef.current.innerHTML="pass";
          sciSpaRef.current.style.backgroundColor="green"
          }  
     else{sciSpaRef.current.innerHTML="fail";
     sciSpaRef.current.style.backgroundColor="red"
     }      
     }} onFocus={()=>{sciInputRef.current.style.backgroundColor="blue"}} 
     onBlur={()=>{sciInputRef.current.style.backgroundColor=""}}
     ></input>
     <span ref={sciSpaRef}></span>
     </div>
     <div>
     <label>Social</label>
     <input ref={socInputRef} onChange={()=>{
          if(socInputRef.current.value>34)
          {socSpaRef.current.innerHTML="pass";
          socSpaRef.current.style.backgroundColor="green"
          }  
     else{socSpaRef.current.innerHTML="fail";
     socSpaRef.current.style.backgroundColor="red"
     }      
     }} onFocus={()=>{socInputRef.current.style.backgroundColor="blue"}} 
     onBlur={()=>{socInputRef.current.style.backgroundColor=""}}
     ></input>
     <span ref={socSpaRef}></span>
     </div>
     <button type='button' onClick={()=>{
    /* let name     = NameInputRef.current.value;
     let roll     = Number(rollInputRef.current.value);
     let telMarks = Number(telInputRef.current.value);
     let engMarks = Number(engInputRef.current.value);
     let hinMarks = Number(hinInputRef.current.value);
     let matMarks = Number(matInputRef.current.value);
     let sciMarks = Number(sciInputRef.current.value);
     let socMarks = Number(socInputRef.current.value);

     let result ;

   let totalmarks =telMarks+engMarks+hinMarks+matMarks+sciMarks+socMarks;
   let per = (totalmarks/600)*100;
//    if(telMarks<34||engMarks<34||hinMarks<34||matMarks<34||sciMarks<34||socMarks<34) 
//    {result ="fail"}
//      else{ result ="pass"};
if(telMarks >34 &engMarks >34& hinMarks>34& matMarks>34& sciMarks>34& socMarks>34)
{result ="pass"}
else{result="fail"}

 resultRef.current.innerHTML=(`roll no.${roll} ${name}  ${result} and  got ${totalmarks} with ${per} % `);*/
 totalonClick();
 
  }}>submit</button>

<p ref={resultRef}>Result</p>
     </form>
    </div>
  )
}

export default MarkSheet