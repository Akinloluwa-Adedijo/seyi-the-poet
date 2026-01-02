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
          {/* <img src={imgSrc} alt={imgAlt} width={width} height={height} /> */}
          <img src={imgSrc} alt={imgAlt} loading="lazy" ref={imageRef} width={width} height={height}/>
          {/* <a href={cursorTitle} className="text-5xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-accent">{cursorTitle}</a> */}
    </div>
  );
};

export default CustomImage;
