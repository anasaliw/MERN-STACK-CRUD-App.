import express from 'express';
const router=express.Router();
import {editSingleData,add_post,getAllUsers,getSingleData,deleteUser} from './controller/controls.js'

router.post('/add',add_post)
router.get('/all',getAllUsers)

//Edit Section
router.get('/edit/:id',getSingleData)
router.put('/edit/:id',editSingleData)

//Delete Portion
router.delete('/delete/:id',deleteUser)


export default router;