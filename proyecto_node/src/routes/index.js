import { Router } from "express"
const router = Router()
router.get('/',(req, res) => res.render('index', {title: 'este es un index'}))
router.get('/about',(req, res) => res.render('about', {title: 'Pagina about'}))
router.get('/contact',(req, res) => res.render('contact', {title: 'Pagina contact me'}))
export default router