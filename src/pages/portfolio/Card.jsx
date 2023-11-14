const Card = ({ items, className }) => {
  return (
    <>
      {items.map((el, i) => (
        <li className={className} key={el.id} id={`portfolioItem-${i}`}>
          <img src={el.url} alt="portfolio image" />
          <div className="overlay">
            <h4>{el.projectName}</h4>
            <p></p>
            <p>{el.title}</p>
            <p></p>
          </div>
        </li>
      ))}
    </>
  );
};

export default Card;
