import express from "express";

import {memberList} from "../controller/admin/memberList.js";
import {signedMemberList} from "../controller/admin/signedMemberList.js";
import { collaboratorsList } from "../controller/admin/collaboratorsList.js";

const router = express.Router();

router.post("/", (req, resp) => {
    resp.send({success: true, message: "Admin route verified"});
})
router.get("/members-list",  memberList)
router.get("/signed-members", signedMemberList)
router.get("/collaborators-list", collaboratorsList)

export default router;