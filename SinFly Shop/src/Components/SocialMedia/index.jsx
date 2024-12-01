// Socail Media Section
// Imports
import classes from "./index.module.css";
// React Component
const SocialMedia = () => {
  // Variables
  const { iconContainer } = classes;
  return (
    <div
      style={{
        backgroundImage: "linear-gradient(white,#f5f5f5,#ddd)",
      }}
      className={`text-center d-flex justify-content-center  align-items-center ${iconContainer}`}
    >
      <div>
        <i className="fa fa-3x  fa-twitch d-block" aria-hidden="true" />
        <span className="fw-bold">Twitch</span>
      </div>
      <div>
        <i className="fa fa-3x fa-slack d-block" aria-hidden="true" />
        <span className="fw-bold">Slack</span>
      </div>
      <div>
        <i className="d-block fa fa-3x fa-github" aria-hidden="true" />
        <span className="fw-bold">Git Hub</span>
      </div>
      <div>
        <i className="d-block fa fa-3x fa-cubes" aria-hidden="true" />
        <span className="fw-bold">Cubes</span>
      </div>
      <div>
        <i className="d-block fa fa-3x fa-instagram" aria-hidden="true" />
        <span className="fw-bold">Instagram</span>
      </div>
      <div>
        <i className="d-block fa fa-3x fa-telegram" aria-hidden="true" />
        <span className="fw-bold">Telegram</span>
      </div>
    </div>
  );
};

export default SocialMedia;
