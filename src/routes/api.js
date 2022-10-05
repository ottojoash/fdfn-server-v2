const express = require('express');
const AuthVerifyMiddleware = require('../middleware/AuthVerifyMiddleware');
const ProfileController = require('../controllers/ProfileController');
const AdminController = require('../controllers/AdminController');
const PayBillController = require('../controllers/PayBillController');
const PackagesController = require('../controllers/PackagesController');
const ProductController = require('../controllers/ProductController');
const ProductBillController = require('../controllers/ProductBillController');
const MemberController = require('../controllers/MemberController');
const FtpSiteController = require('../controllers/FtpSiteController');
const LiveTvController = require('../controllers/LiveTvController');
// const MovieController = require('../controllers/MovieController');
const CoverageController = require('../controllers/CoverageController');
const RegController = require('../controllers/RegController');
const NotificationController = require('../controllers/NotificationController');
const uploadPic = require('../middleware/UploadMiddleware');
const uploadRegPic = require('../middleware/RegUploadMiddleware');

const router = express.Router();

// Profile
// router.post('/profile', ProfileController.UserLogin, (err, req, res, next) => {
//     res.status(400).send({ err: err.message });
// });
// router.get('/profile', AuthVerifyMiddleware, ProfileController.SelectProfile);

// Admin Routes
router.post('/createAdmin', AdminController.createAdmin);
router.get('/readAdmins', AdminController.readAdmins);
router.post('/deleteAdmin', AdminController.deleteAdmin);
// router.get('/isAdmin', AdminController.isAdmin);
// router.get('/isModerator', AdminController.isModerator);

// Packages routes
router.post('/createPackage', PackagesController.createPackage);
router.get('/readPackages', PackagesController.readPackages);
router.post('/updatePackage', PackagesController.updatePackage);
router.post('/deletePackage', PackagesController.deletePackage);
router.get('/readPackages/:id', PackagesController.readPackageId);

// Product routes
router.post(
    '/createProduct',
    uploadPic,
    ProductController.createProduct,
    (err, req, res, next) => {
        res.status(400).send({ err: err.message });
    }
);
router.get('/readProducts', ProductController.readProducts);
router.post('/updateProduct', ProductController.updateProduct);
router.post('/deleteProduct', ProductController.deleteProduct);
router.get('/readProducts/:id', ProductController.readProductId);

// Member routes
router.post(
    '/createMember',
    uploadPic,
    MemberController.createMember,
    (err, req, res, next) => {
        res.status(400).send({ err: err.message });
    }
);
router.get('/readMembers', MemberController.readMembers);
router.post('/updateMember', MemberController.updateMember);
router.post('/deleteMember', MemberController.deleteMember);

// Ftp Site routes
router.post(
    '/createFtp',
    uploadPic,
    FtpSiteController.createFtpSite,
    (err, req, res, next) => {
        res.status(400).send({ err: err.message });
    }
);
router.get('/readFtp', FtpSiteController.readFtpSite);
router.post('/deleteFtp', FtpSiteController.deleteFtpSite);

// Bill routes
router.post('/createBill', PayBillController.createBill);
router.get('/readBill', PayBillController.readBill);
router.post('/updateBill', PayBillController.updateBill);
router.post('/deleteBill', PayBillController.deleteBill);

// Channel routes
router.post(
    '/createTv',
    uploadPic,
    LiveTvController.createChannel,
    (err, req, res, next) => {
        res.status(400).send({ err: err.message });
    }
);
router.get('/readTv', LiveTvController.readChannel);
router.post('/deleteTv', LiveTvController.deleteChannel);

// // Movie routes
// router.post(
//     '/createMovie',
//     uploadPic,
//     MovieController.createMovie,
//     (err, req, res, next) => {
//         res.status(400).send({ err: err.message });
//     }
// );
// router.get('/readMovie', MovieController.readMovie);
// router.post('/deleteMovie', MovieController.deleteMovie);

// Coverages routes
router.post('/createCoverage', CoverageController.createCoverage);
router.get('/readCoverage', CoverageController.readCoverage);
router.post('/deleteCoverage', CoverageController.deleteCoverage);

// Registration Packages
router.post(
    '/createRegPackage',
    uploadRegPic,
    RegController.createRegPackage,
    (err, req, res, next) => {
        res.status(400).send({ err: err.message });
    }
);
router.get('/readRegPackage', RegController.readRegPackage);
router.post('/updateRegPackage', RegController.updateRegPackage);
router.post('/deleteRegPackage', RegController.deleteRegPackage);
router.get('/readRegPackageByEmail', RegController.readRegPackageByEmail);

// Product Bill routes
router.post('/createProductBill', ProductBillController.createProductBill);
router.get('/readProductBill', ProductBillController.readProductBills);
router.post('/updateProductBill', ProductBillController.updateProductBill);
router.post('/deleteProductBill', ProductBillController.deleteProductBill);
router.get(
    '/readProductBillByEmail',
    ProductBillController.readProductBillByEmail
);

// Notification routes
router.post('/createNotification', NotificationController.createNotification);
router.get('/readNotification', NotificationController.readNotifications);
router.post('/deleteNotification', NotificationController.deleteNotification);

module.exports = router;
