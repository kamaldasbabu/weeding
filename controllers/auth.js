const { sendResponse } = require('../lib/utils');

const register = async (req, res) => {

	try {

        console.log("console register", "register");



		// if (!req.body.firstName || !req.body.password || !req.body.role || !req.body.organizationId || !req.body.fsId || !req.body.contactNumber)
		// 	return sendResponse(res, 400, false, Messages.MANDATORY_INPUTS_REQUIRED);


		// let role = roles.find(role => role.roleName == req.body.role);

		// if (!role)
		// 	return sendResponse(res, 400, false, Messages.INCORRECT_ROLE);

		// const salt = generateSalt();
		// const encrytedPassword = getHashedText(req.body.password, salt);

		// const employee = {
		// 	userId: getUniqueId(),
		// 	firstName: req.body.firstName || "",
		// 	lastName: req.body.lastName || "",
		// 	userName: parseInt(req.body.contactNumber),
		// 	organizationId: req.body.organizationId,
		// 	fsId: req.body.fsId,
		// 	password: encrytedPassword,
		// 	role,
		// 	createdAt: getEpochTime(),
		// 	//createdBy:req.tokenData.userId
		// 	status: APPROVAL_STATUS
		// };

		// const client = await dbService.getClient();
		//TODO
		//Check that whether the user is already present or not
		// if (user)
		// 	return sendResponse(res, 409, false, Messages.CONFLICT_USER_EXISTS);
		// await client
		// 	.collection(USER_COLL)
		// 	.insertOne(employee);

		// return sendResponse(res, 201, true, Messages.USER_REGISTRATION_SUCCESS);


        return sendResponse(res, 201, true, 'register is working', [{}])

	} catch (err) {

		// await genericErrorLog(err, 'register');
		console.log(err);
		// return sendResponse(res, 500, false, Messages.INTERNAL_SERVER_ERROR);

	}
};


module.exports = { register }