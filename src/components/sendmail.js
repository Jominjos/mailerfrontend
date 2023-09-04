import React, { useEffect, useState } from "react";

export default function Sendmail(){
    let intial = {
        sub: " ",
        content : " "
    }
    const [content,setContent] = useState(intial)
    function maildatachanged(event){
        let value = event.target.value
        let name = event.target.name
        setContent((prev) => {
            return {
                ...prev,
                [name] : value,
            }
        })
        
    }
    console.log(content)
    function sendmail(){
        console.log(content,'form submitted')
    }
    return(
        <div className="addUser">
            <form onSubmit={sendmail}>
                <div className="input-box">
                    <label >
                        subject
                    </label>
                    <input type="text" 
                        
                        onChange={maildatachanged}
                        required
                        id="sub"
                        name="sub"
                        value={content.sub}
                    />
                </div>
                <div className="input-box">
                    <label >
                        Content
                    </label>
                    <textarea type="text" 
                        onChange={maildatachanged}
                        // className="input-box"
                        required
                        id="content"
                        name="content"
                        value={content.content}
                    />
                </div>
                <button type="submit" className="btn btn-primary">send mail to all users</button>
            </form>
        </div>
    )
}