import photo from "./assets/Doggy picture.jpg";
import recording from "./assets/ItalybyAylex.wav";
function Photocard() {
  return (
    <body>
      <div className="front">
        <img className="front-photo" src={photo} alt="photo"></img>
        <p className="front-desc">Photocard coding session!</p>
      </div>
      <div className="back">
        <p className="back-date">10th October</p>
        <p className="back-desc">Keep coding.</p>
        <audio controls className="back-recording">
          <source src={recording} />
        </audio>
      </div>
    </body>
  );
}

export default Photocard;
