import {
  UploadApiErrorResponse,
  UploadApiResponse,
} from "cloudinary-react-native/lib/typescript/src/api/upload/model/params/upload-params";
import { cld } from "../lib/cloudinary";
import { upload } from "cloudinary-react-native";

export const uploadImage = async (file: string | null) => {
  return new Promise<UploadApiErrorResponse | UploadApiResponse | undefined>(
    async (resolve, reject) => {
      const options = {
        upload_preset: "Default",
        unsigned: true,
      };

      await upload(cld, {
        file: file,
        options: options,
        callback: (
          error: UploadApiErrorResponse | undefined,
          response: UploadApiResponse | undefined
        ) => {
          if (error || !response) {
            reject(error);
          } else {
            resolve(response);
          }
        },
      });
    }
  );
};
