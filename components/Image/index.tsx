import Image from "next/image";

import { Asset } from "../../graphql/types";

type TImage = {
  image?: Asset | null;
  fill?: boolean;
  height?: number | string;
  width?: number | string;
  contain?: boolean;
};

const ImageComponent = ({ image, fill, height, width, contain }: TImage) => {
  const imageSizeArray = image?.filename
    ? image?.filename?.split("/")[5].split("x")
    : undefined;
  const url =
    image?.filename +
    `/m/${imageSizeArray ? imageSizeArray[0] : 1000}x0/filters:quality(75)`;

  const blurUrl = `${image?.filename}/m/200x200`;
  //To rid warnings that images smaller than 40px should not have 'blur' placholder
  const sizeCheck = () => imageSizeArray?.some((item) => Number(item) > 40);

  return url && imageSizeArray ? (
    fill ? (
      <Image
        src={url}
        alt={image?.alt || ""}
        layout="fill"
        objectFit={contain ? "contain" : "cover"}
      />
    ) : (
      <Image
        src={url}
        alt={image?.alt || ""}
        layout="intrinsic"
        objectFit={contain ? "contain" : "cover"}
        width={width || imageSizeArray[0]}
        height={height || imageSizeArray[1]}
      />
    )
  ) : null;
};

export default ImageComponent;
