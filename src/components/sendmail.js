import axios from "axios";
import React, { useState } from "react";
import "../styles/send.css";
export default function Sendmail() {
  let intial = {
    sub: " ",
    content: " ",
  };
  const [content, setContent] = useState(intial);
  function maildatachanged(event) {
    let value = event.target.value;
    let name = event.target.name;
    setContent((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  console.log(content);
  function sendmail(event) {
    event.preventDefault();
    console.log(content, "form submitted");
    setContent(intial);
    mailsender();
    async function mailsender() {
      let res = await axios.post(
        "https://jodemailer.onrender.com/sendmail",

        { content },
        {
          "Content-Type": "application/json",
        }
      );
      alert(`mail send successfully`);
      console.log(res);
    }
    console.log(content, "form submitted");
  }
  return (
    <div className="sendMail">
      <h2 id="sendHeading">SEND MAIL</h2>
      <form onSubmit={sendmail}>
        <div className="input-box">
          <label>Subject</label>
          <input
            type="text"
            onChange={maildatachanged}
            required
            id="sub"
            name="sub"
            value={content.sub}
          />
        </div>
        <div className="input-box">
          <label>Content</label>

          <textarea
            type="text"
            onChange={maildatachanged}
            // className="input-box"
            required
            id="content"
            name="content"
            value={content.content}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Send To All Users
        </button>
      </form>
    </div>
  );
}
