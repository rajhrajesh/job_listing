const express = require('express');
const { 
  signup, login, getProfile, uploadProfileImage, 
  editUser, deleteUser, getUser, getAllUsers 
} = require('../controllers/authController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');
const multer = require('multer');

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

router.post('/signup', signup);
router.post('/login', login);
router.get('/profile', authMiddleware, getProfile);
router.post('/upload', authMiddleware, upload.single('image'), uploadProfileImage);

// User Management Routes
router.put('/edit', authMiddleware, editUser);
router.delete('/delete/:id', authMiddleware, deleteUser);
router.get('/user/:id', authMiddleware, adminMiddleware, getUser);
router.get('/users', authMiddleware, adminMiddleware, getAllUsers);

module.exports = router;
