type CardImageProps = {
  src: string;
  alt: string;
};

export const CardImage: React.FC<CardImageProps> = ({ src, alt }) => {
  return (
    <img src={src} className="card-img" alt={alt} />
  )
}
