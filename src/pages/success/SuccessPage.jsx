import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Confetti from "react-confetti";
import "./success.scss";
import AnimatedPage from "../../components/AnimatedPage";

const Success = () => {
  const [pieces, setPieces] = useState(200);

  const stopConfetti = () => {
    setTimeout(() => {
      setPieces(0);
    }, 3000);
  };

  useEffect(() => {
    stopConfetti(0);
  }, []);

  return (
    <AnimatedPage>
      <div className="successContainer">
        <div className="successWrapper">
          <div className="successMessage">
            <h1 className="successTitle">Thank you! ✨</h1>
            <p>Your form submission has been received.</p>
            <Link to="/" className="back-to">
              <span>&larr;</span> Back to home
            </Link>
          </div>
        </div>
        <Confetti gravity={0.3} numberOfPieces={pieces} />
      </div>
    </AnimatedPage>
  );
};

export default Success;
