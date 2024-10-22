type CardLinkProps = {
    href: string;
    children: React.ReactNode;
  };
  
  export const CardLink: React.FC<CardLinkProps> = ({ href, children }) => {
    return (
      <a href={href} className="card-button">
        {children}
      </a>
    );
  };