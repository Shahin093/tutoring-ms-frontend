import axios from "axios";

const IMG_BB_API_KEY = "23443cc3876f3a4ab06530809164519d";

export async function uploadImageToImgBB(
  image: File
): Promise<string | undefined> {
  try {
    const formData = new FormData();
    formData.append("image", image);

    const response = await axios.post(
      "https://api.imgbb.com/1/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        params: {
          key: IMG_BB_API_KEY,
        },
      }
    );

    return response.data.data.url;
  } catch (error) {
    console.error("Error uploading image to ImgBB:", error);
    return undefined;
  }
}
