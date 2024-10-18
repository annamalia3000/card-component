import classes from "./card.module.css";

type CardProps = {
  title: string;
  text: string;
  link: string;
  imageSrc?: string;
};

export const Card: React.FC<CardProps> = ( {title, text, link, imageSrc} ) => {
  return (
    <div className={classes["card"]}>
      {imageSrc && ( <img src={imageSrc} className={classes["card-img"]} alt={title} />)}
      <div className={classes["card-body"]}>
        <h5 className={classes["card-title"]}>{title}</h5>
        <p className={classes["card-text"]}>{text}</p>
        <a href={link} className={classes["card-button"]}>
          Go somewhere
        </a>
      </div>
    </div>
  );
};
