type ImgProps = React.ImgHTMLAttributes<HTMLImageElement>;

interface ImageProps extends ImgProps {
  src: ImgProps["src"];
  alt: ImgProps["alt"];
  width: ImgProps["width"];
  height: ImgProps["height"];
}

const Image = ({ ...props }: ImageProps): React.ReactElement => {
  return <img {...props} />;
};

export default Image;
