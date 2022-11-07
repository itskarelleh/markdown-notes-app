import React from "react";

const SectionHead = ({ title, children }) => (
  <div>
    <div className="my-8 h-full flex flex-row justify-between">
      <div className="w-3/4">
        <h1 className="text-2xl font-black">{title}</h1>
      </div>
      <div className="w-1/4 flex flex-row justify-end">{children}</div>
    </div>
  </div>
);

const SectionBody = ({ content }) => <div>{content}</div>;

const Section = ({ classname, children, ...props }) => (
    <section className={`m-0 p-0 ${classname}`} {...props}>
    {children}
</section>);

export { Section, SectionBody, SectionHead };
