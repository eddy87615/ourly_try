import React from 'react';
import './css/globals.css';
import './css/Main.css';

const Section = () => {
  return (
    <main className="main">
      <div className="annoying">
        <h2 className="text-[40px] font-bold">
          私も会社のコミュニケーションについて悩んでいます…
        </h2>
        <img src="/img/20Yman-02-bgN.png" />
      </div>
      <div className="solved">
        <img src="/img/20Yman-04-bgN.png" />
      </div>
    </main>
  );
};

export default function Main() {
  return (
    <>
      <Section />
      <Section />
      <Section />;
    </>
  );
}
