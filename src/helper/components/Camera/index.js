import axios from "axios";

import { urlToFile } from "helper";
import { signS3 } from "helper/aws";

export const uploadImageUriToS3 = async (dataUri) => {
  const fileType = "image/png";
  const fileName = "userFace/userId";
  const file = await urlToFile({
    url: dataUri,
    fileName,
    mimeType: fileType,
  });

  const data = await signS3({
    fileName,
    fileType,
  });
  const { signedRequestUrl, fileUrl } = data;

  const loadOptions = {
    headers: {
      "Content-Type": fileType,
    },
  };
  const res = await axios
    .put(signedRequestUrl, file, loadOptions)
    .catch((err) => {
      throw new Error(err.message);
    });
  console.log("res", res);
  return fileUrl;
};
