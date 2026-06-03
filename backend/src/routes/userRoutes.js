import express from 'express'
import {
  getAdminOverview,
  getUserProfile,
  userLogin,
  userRegister,
} from '../controllers/userControllers.js'
import { adminOnly, protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/register').post(userRegister);
router.route('/login').post(userLogin);
router.route('/profile').get(protect, getUserProfile);
router.route('/admin/overview').get(protect, adminOnly, getAdminOverview);


export default router;
