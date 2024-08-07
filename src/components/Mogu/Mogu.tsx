import Shadow from "../../assets/img/mogu/shadow.svg?react";
import M from "../../assets/img/mogu/mogu-m.svg?react";
import O from "../../assets/img/mogu/mogu-o.svg?react";
import G from "../../assets/img/mogu/mogu-g.svg?react";
import U from "../../assets/img/mogu/mogu-u.svg?react";
import "./Mogu.scss";

export const Mogu = () => {
  return (
    <section className="mogu">
      <div className="container mogu__container">
        <Shadow className="mogu__shadow" />
        <M className="mogu__letter mogu__letter_1" />
        <O className="mogu__letter mogu__letter_2" />
        <G className="mogu__letter mogu__letter_3" />
        <U className="mogu__letter mogu__letter_4" />
      </div>
    </section>
  );
};

export default Mogu;
