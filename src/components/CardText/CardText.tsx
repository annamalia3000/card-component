type CardTextProps = {
  text:string
}

export const CardText:React.FC<CardTextProps> = ({text}) => {
  return (
    <p className="card-text">{text}</p>
  )
}
