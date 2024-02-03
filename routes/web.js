import express from 'express'
import { homeController } from '../controllers/homeController.js'
import { serviceController } from '../controllers/servicesController.js'
import { skillController } from '../controllers/skillController.js'
import { contactController } from '../controllers/contactController.js'
const router = express.Router()


router.get('/', homeController)
router.get('/service', serviceController)
router.get('/skill', skillController)
router.get('/contact', contactController)

export default router