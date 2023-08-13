import { Router } from "express"
const router = Router()
router.get('/',(req, res) => res.render('index', {title: 'One Infinity Code'}))
router.get('/about',(req, res) => res.render('about', {title: 'Quiénes somos'}))
router.get('/contact',(req, res) => res.render('contact', {title: 'Contactanos'}))
router.get('/services',(req, res) => res.render('services', {title: 'Servicios'}))
router.get('/portfolio',(req, res) => res.render('portfolio', {title: 'Portafolio'}))
router.get('/testimony',(req, res) => res.render('testimony', {title: 'Testimonios'}))
export default router