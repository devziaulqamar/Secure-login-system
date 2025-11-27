import express from "express";
const router = express.Router();
import {
  register,
  verifyOTP,
  login,
  forgotPassword,
  verifyResetOTP,
  setNewPassword,
  resendOTP,
} from "../controllers/authController.controller.js";

router.post("/signup", register);
router.post("/verify-otp", verifyOTP);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/verify-reset-otp", verifyResetOTP);
router.post("/set-new-password", setNewPassword);
router.post("/resend-otp", resendOTP);

export default router;
