import React from "react";
import "./Owerview.css";
import imdbIcon from "../../assets/images/imdb-icon.png";

import Tags from "./Tags";
import Writers from "./Writers";
import Casts from "./Casts";

const Owerview = () => {
  return (
    <section className="owerview">
      <h1>You've Got Murder</h1>
      <Tags />
      <div className="rate">
        <img src={imdbIcon} className="imdb" alt="IMDB" />
        <span>
          <span>7.0</span>/10
        </span>
      </div>
      <article className="content">
        <h3>Owerview</h3>
        <p>
          Istanbul Police Department homicide detectives encounter a murder
          nothing like they’ve seen before.Commissioners Emin, Salih, Asuman and
          deputy Alaattin begin investigating.But strange murders keep
          happening. They don’t have any evidence or any clues. Day by day,
          tempers flare and the police chiefs grow annoyed.As the murders keep
          piling up, the public’s interest rises. The pressure on Emin and his
          colleagues get intense. At last, the chief of police assigns “crime
          expert” Dizdar Koşu, who has recently come back from the US, to the
          team.Overwhelmed with panic, pressure and disdain, Emin and his
          friends try to solve the strangest series of murders with the most
          unusual methods.This fast race against time immediately turns into a
          tragicomedy.
        </p>
      </article>
      <Writers />
      <hr className="line" />
      <Casts />
    </section>
  );
};

export default Owerview;
