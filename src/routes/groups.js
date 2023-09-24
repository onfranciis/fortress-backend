const express = require("express");
const router = express.Router();

// Import controller function to get group details
const {
  createGroup,
  getAllGroups,
  getGroupDetails,
  updateGroupDetails,
  deleteGroup,
  deleteGroupMemberById,
  addUserToGroup,
  getAllUserFromGroup,
  getAllEventFromGroup,
  getEventNumFromGroup,
  getNumUserFromGroup,
} = require("../controllers/groups");

// Get group details
router.route("/groups").post(createGroup).get(getAllGroups);
router
  .route("/groups/:groupId")
  .get(getGroupDetails)
  .put(updateGroupDetails)
  .delete(deleteGroup);
router.route("/groupId/:userId").delete(deleteGroupMemberById);
router.route("/groups/:groupId").post(addUserToGroup);
router.route("/:groupId/events").get(getAllEventFromGroup);
router.route("/:groupId/events/num").get(getEventNumFromGroup);
router.route("/:groupId/users").get(getAllUserFromGroup);
router.route("/:groupId/users/num").get(getNumUserFromGroup);
module.exports = router;
