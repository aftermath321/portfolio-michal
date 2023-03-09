import React from 'react';

const Contact = () => {
  return (
    <div
      className="mx-auto flex justify-center items-center h-screen w-full text-[#131313] tracking-wider"
      name="contact"
    >
      <form
        method="POST"
        action="https://getform.io/f/dc4e4d8a-dc96-4d03-9948-0b991af7de68"
        className="h-[100%] flex flex-col max-w-[600px] w-full"
      >
        <div className="py-4 text-center justify-center items-center">
          <h2 className="text-5xl py-4 text-[#ffffff] text-bold">
            Write to me!
          </h2>
          <p className="text-[#ffffff]">
            Send me a message via form or an e-mail at:{' '}
            <span className="text-[#fb7e14]">
              <a
                href="mailto: michal.kielbasa1994@gmail.com"
                target="_"
                rel="noreferrer"
              >
                michal.kielbasa1994@gmail.com
              </a>
            </span>
          </p>
        </div>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="p-2 m-4 text-[#131313]"
        />
        <input
          type="email"
          placeholder="E-mail"
          name="email"
          className="p-2 m-4 text-[#131313]"
        />
        <textarea
          rows={10}
          placeholder="Message"
          name="message"
          className="p-2 m-4 text-[#131313] h-auto"
        />
        <button
          type="submit"
          className="Ngradient active:Hgradient w-[30%] rounded-xl self-center active:translate-y-1 duration-200"
        >
          Send!
        </button>
      </form>
    </div>
  );
};

export default Contact;
