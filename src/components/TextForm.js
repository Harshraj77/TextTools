import React, { useState } from "react";
//module not working on deployment
// import { jsPDF } from "jspdf"; //jspdf module


//convert text to uppercase
export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to uppercase","success")
  };

// const savetxt= ()=>{
//   const element = document.createElement('a');
//   const file =new Blob(text,{
//     type: 'text/plain'
//   });
//   element.href = URL.createObjectURL(file);
//   element.download ='myfile.txt';
//   document.body.appendChild(element);
//   element.click();
// }

  //convert text to lowercase
  const handleDownClick = () => {
    let downtext = text.toLowerCase();
    setText(downtext);
    props.showAlert("Text converted to lowercase","success")
  };

  //clear
  const handleclearonclick = () => {
    let newtext = "";
    setText(newtext);
    props.showAlert("Text cleared","success")
  };

  // //saving text as a pdf file
  // const ftnsave = () => {
  //   const doc = new jsPDF("l", "px", [1080, 1350]); //(landsacpe,resolution in,resolution)
  //   doc.setFontSize(12);
  //   doc.html(document.querySelector("#ans")).then(() => {
  //     doc.save("report.pdf");
  //   });
  //   //1
  //   //  doc.text(text,10,10);
  //   //  doc.save("file.pdf");
  //   //2
  //   // doc.html(ReactDOMServer.renderToStaticMarkup(text), {
  //   //   callback: () => {
  //   //     doc.save("myDocument.pdf");
  //   //   }
  //   // });
  //   //3
  //   // const report = new jsPDF('landscape','pt','a4');
  //   // doc.html(document.querySelector('#ans')).then(() => {
  //   //     doc.save('report.pdf');
  //  //  });
  //  };

  //copy text
  const handleCopy = ()=> {
     navigator.clipboard.writeText(text);
     props.showAlert("Copied to Clipboard!","success")
  }

  //remove extra space
  const removespace = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed successfully!","success")
  }

  const handleOnChange = (event) => {
    //here event is a listner which litens to the event being performed
    setText(event.target.value); //we set the value of text as text + what we typed in
  };

  const [text, setText] = useState("");
  //text = "new text"; //wrong way to change state
  // setText("new text"); // right way to change text
   
  let btn = text.length ===0 ? true :false
  
  return (
    <div className="textForm">
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h3 className="heading">{props.heading} </h3>
        <div className="mb-3">
          {/* the "value" inside the textarea is set as "text"
        onChange is an event that is when text is changed inside box we call function handleOnChange */}
          <textarea
            className="form-control"
            onChange={handleOnChange}
            value={text}
            id="mybox"
            rows="8"
            style={{backgroundColor: props.mode==='light'?'white':'#beb9b9',color: props.mode==='dark'?'black':'black'}}
          ></textarea>
        </div>
        <div className="Buttons">
        <div className="flex">
          <button disabled={btn} className={`btn btn-${props.mode==='light'?'secondary':'light'} m-2`} onClick={handleUpClick}>
            Convert to Upper Case
          </button>
          <button disabled={btn} className={`btn btn-${props.mode==='light'?'secondary':'light'} m-2`} onClick={handleDownClick}>
            Convert to Lower Case
          </button>
          <button disabled={btn} className={`btn btn-${props.mode==='light'?'secondary':'light'} m-2`} onClick={handleclearonclick}>
            Clear
          </button>
          {/* <button disabled={btn}  className={`btn btn-${props.mode==='light'?'secondary':'light'} m-2`} onClick={ftnsave}>
            Save as Pdf
          </button> */}
          {/* <button disabled={btn} className={`btn btn-${props.mode==='light'?'secondary':'light'} m-2`} onClick={savetxt}>
            Save as .txt
          </button> */}
          <button disabled={btn} className={`btn btn-${props.mode==='light'?'secondary':'light'} m-2`} onClick={handleCopy}>Copy</button>
          <button disabled={btn} className={`btn btn-${props.mode==='light'?'secondary':'light'} m-2`} onClick={removespace}>Remove Extra Spaces</button>
        </div>
        </div>
      </div>
      <div className="container" style={{color: props.mode==='dark'?'white':'black',fontFamily: 'Ibarra Real Nova'}}>
        <h2>Your Text Summay</h2>
        <p>
          Word/s: {text===''?'0':text.split(/\s+/).filter((element)=> {return element.length!==0}).length}  
        </p>
        <p>Characters : {text.length}</p>
        <p>{text===''?'0':0.008 * text.split(/\s+/).filter((element)=> {return element.length!==0}).length} Minutes Read</p>
        {/* <h2>Text Preview</h2>
        <p className=="" id="ans">
          {text}
        </p> */}
        <div className="card">
          <div className={`card-header bg-${props.mode} text-${props.mode==='light'?'black':'white'} text-center`} style={{fontFamily: 'Cormorant SC'}}>Text Preview</div>
          <div className='card-body'  style={{backgroundColor: props.mode==='light'?'white':'grey',color: props.mode==='dark'?'white':'black'}}>
            <p className="card-text " id="ans">{text.length>0?text:"No Text to Preview"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
