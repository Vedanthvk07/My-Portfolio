import "./form.css"

import React,{useRef} from 'react'

const Form = (props) => {
 /* const[formInputsValidity,setFormInputsValidity]=useState({
    name:true,
    email:true,
    subject:true,
    text:true
});*/
  const isEmpty=(value)=> value.trim()==='';

const nameInputRef=useRef();
const mailInputRef=useRef();
const subInputRef=useRef();
const textInputRef=useRef();
    const confirmHandler=(event)=>{
        event.preventDefault();
        const enteredName=nameInputRef.current.value;
        const enteredMail=mailInputRef.current.value;
        const enteredSub=subInputRef.current.value;
        const enteredText=textInputRef.current.value;

        const enteredNameIsValid=!isEmpty(enteredName);
        const enteredTextIsValid=!isEmpty(enteredText);
        const enteredMailIsValid=!isEmpty(enteredMail);
        const enteredSubIsValid=!isEmpty(enteredSub);

        /*setFormInputsValidity({
            name:enteredNameIsValid,
            text:enteredTextIsValid,
            mail:enteredMailIsValid,
            sub:enteredSubIsValid
        });*/


        const formIsValid=
        enteredNameIsValid &&
        enteredTextIsValid &&
        enteredSubIsValid &&
        enteredMailIsValid;
        
        if(!formIsValid){
            return;
        }else{
             fetch('https://portfolio-36f03-default-rtdb.firebaseio.com/contact.json',{
              method:'POST',
              body:JSON.stringify({
                name:enteredName,
                mail:enteredMail,
                sub:enteredSub,
                text:enteredText
                
              })
            });
            alert("Form successfully submitted");
        nameInputRef.current.value='';
        mailInputRef.current.value='';
        subInputRef.current.value='';
        textInputRef.current.value='';
        }

        


    };

   
  return (
    <div className="form" onSubmit={confirmHandler}>
    <form>
      <label>Your Name</label>
      <input type="text" ref={nameInputRef}></input>
      <label>Your Email</label>
      <input type="email" ref={mailInputRef}></input>
      <label>Subject</label>
      <input type="text" ref={subInputRef}></input>
      <label>Message</label>
      <textarea rows="6"ref={textInputRef}  placeholder="type your message here"/>
      <button className="btn">Submit</button>
    </form>
    </div>
  )
}

export default Form
