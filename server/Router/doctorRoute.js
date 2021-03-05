const authenticationController = require('./../Controller/authenticationController');
const doctorController = require('./../Controller/doctorController');


const router = express.Router();

router.post('/addNew',authenticationController.protect , doctorController.createDoc);
router.get('./getDoctors',authenticationController.protect ,doctorController.getAllDoc);
router.get('/getUserDoctor',authenticationController.protect,doctorController.getUserDoctor);