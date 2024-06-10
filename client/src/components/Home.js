import "./home.css";
import { Diashow001 } from "./Diashow001";
import { Diashow002 } from "./Diashow002";
import { Diashow003 } from "./Diashow003";
import { Diashow004 } from "./Diashow004";

export const Home = () => {
  return (
    <>
      <Diashow001 />
      <div className="element-01">
        <div className="textEl01">
          <h1>Willkommen</h1>
          <h2>
            bei liebevollbelichtet: <br /> Wo Emotionen zur Kunst werden
          </h2>
          <p>
            Hallo und herzlich willkommen! Ich bin Michael, ein
            leidenschaftlicher Hochzeitsfotograf mit einem Auge für Kunst und
            einem Herz, das für die Magie von Hochzeiten schlägt. Seit nunmehr
            zwei Jahrzehnten habe ich die Ehre, unvergessliche Momente in
            Bildern einzufangen und Geschichten zu erzählen, die ein Leben lang
            halten.
          </p>
        </div>
        <Diashow002 />
      </div>
      <h3>Glücklich allein ist die Seele, die liebt!</h3>
      <div className="element-02">
        <Diashow003 />
        <div className="textEl02">
          <h4>Hinter der Linse</h4>
          <p>
            Für mich ist Fotografie weit mehr als nur ein Beruf – es ist eine
            Leidenschaft, die mich antreibt. Meine Bilder sind der Spiegel
            meiner Seele, meine Kamera das Werkzeug, um Geschichten zu erzählen,
            die ohne Worte auskommen. In jedem Hochzeitsmoment finde ich
            Schönheit und Ausdruckskraft, und ich bin stets auf der Suche nach
            dem einzigartigen und unverwechselbaren Bild, das Ihre Liebe und
            Emotionen perfekt einfängt.
            <br />
            <br />
          </p>
          <h4>Kreativität kennt keine Grenzen</h4>
          <p>
            Meine 20-jährige Erfahrung als Kunst- und Werbefotograf hat meinen
            Blick auf die Hochzeitsfotografie geprägt. Jedes Paar ist
            einzigartig, und daher sollte auch jede Hochzeit eine einzigartige
            Geschichte erzählen. Ich scheue mich nicht davor, kreativ zu sein
            und neue Wege zu gehen, um Bilder zu schaffen, die Ihre
            Persönlichkeit und Einzigartigkeit widerspiegeln. Egal, ob es ein
            romantisches Outdoor-Shooting bei Sonnenuntergang oder ein modernes
            urbanes Hochzeitsfest ist – ich bin bereit, Ihre Vision zu
            verwirklichen.
          </p>
        </div>
      </div>
      <h3>Ein Tropfen Liebe ist mehr als ein Ozean Verstand!</h3>
      <div className="element-03">
        <div className="textEl03">
          <h4>Unsere Reise gemeinsam beginnen</h4>
          <p>
            Mein Ziel ist es, nicht nur atemberaubende Fotos zu liefern, sondern
            auch eine angenehme und entspannte Erfahrung zu schaffen. Ihre
            Hochzeit ist ein besonderer Tag, und ich möchte sicherstellen, dass
            Sie jeden Augenblick genießen können, während ich die Magie
            einfange. Ich schaffe eine Verbindung zu meinen Klienten und lerne
            ihre Geschichten und Wünsche kennen, um sicherzustellen, dass wir
            gemeinsam etwas Einzigartiges schaffen.
            <br />
            <br />
            <br />
          </p>
          <h4>Lassen Sie uns sprechen</h4>
          <p>
            Wenn Sie nach einem Hochzeitsfotografen suchen, der Ihre Liebe in
            lebendige Kunst verwandelt, dann sind Sie hier genau richtig. Lassen
            Sie uns gemeinsam anfangen, Ihre Hochzeitsgeschichte zu planen und
            zu gestalten. Kontaktieren Sie mich noch heute, um mehr darüber zu
            erfahren, wie ich Ihre Momente in unvergessliche Erinnerungen
            verwandeln kann.
          </p>
        </div>
        <Diashow004 />
      </div>
      <h3>
        Ihre Hochzeit ist ein Kunstwerk in Arbeit, und ich freue mich darauf,
        ein Teil davon zu sein.
      </h3>
    </>
  );
};
