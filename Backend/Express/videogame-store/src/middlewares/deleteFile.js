const cloudinary = require("cloudinary");

const deleteFile = (imgUrl) => {
  const urlSplit = imgUrl.split("/");
  // const nameSplit = urlSplit[urlSplit.length - 1].split('.')
  const nameSplit = urlSplit.at(-1).split(".");
  const folderSplit = urlSplit.at(-2);
  const public_id = `${folderSplit}/${nameSplit[0]}`;

  cloudinary.v2.uploader.destroy(public_id, () => {
    console.log(`image deleted at ${public_id}`);
  });
};

module.exports = { deleteFile };
