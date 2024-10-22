type CardBodyProps = {
  children?: React.ReactNode;
};

export const CardBody: React.FC<CardBodyProps> = ({ children }) => {
  return (
    <div className="card-body"> {children} </div>
  )
}
