import Image from "next/image";

type CustomImageProps = {
  imgSrc: string;
  imgAlt: string;
  width?: number;
  height?: number;
  classname?: string;
  cursorTitle?: string;
  containerRef?: React.Ref<HTMLDivElement>;
  imageRef?: React.Ref<HTMLImageElement>;
};
const CustomImage = ({
  imgSrc,
  imgAlt,
  width,
  height,
  classname,
  cursorTitle,
  imageRef,
}: CustomImageProps) => {
  return (
    <div className={`img-container ${classname}`} data-cursor={cursorTitle}>
      <Image src={imgSrc} alt={imgAlt} loading="lazy" ref={imageRef} fill />
    </div>
  );
};

export default CustomImage;
