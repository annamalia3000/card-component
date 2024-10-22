type CardTitleProps = {
  title: string;
};

export const CardTitle: React.FC<CardTitleProps> = ({title}) => {
  return (
    <h5 className="card-title">{title}</h5>
  )
}