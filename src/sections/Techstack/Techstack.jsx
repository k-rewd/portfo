import './Techstack.css'


export default function Techstack() {
  const techIcons = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original-wordmark.svg",
"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg"


  ];

  return (


    <div className="banner">
      <div className="slider" style={{ '--quantity': techIcons.length }}>
        {techIcons.map((icon, index) => (
          <div key={index} className="item" style={{ '--position': index + 1 }}>
            <img src={icon} alt={`Tech ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}