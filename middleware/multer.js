const multer = require("multer");
const path = require("path");

// 저장할 파일 경로 및 파일명 설정
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // 파일 저장 경로
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // 파일명 지정
  },
});

const fileFilter = (req, file, cb) => {
  console.log(file, mimetype);
  if (file.mimetype.split("/")[1]) {
    cb(null, true);
  } else {
    cb(new Error("이미지 파일만 업로드 가능합니다."), false);
  }
};

// 파일 업로드 미들웨어
const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;
