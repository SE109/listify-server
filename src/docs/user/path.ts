// ! Defind path

/**
 * TODO: [GET] /user/get-all -> Get all user
 * @swagger
 * /user/get-all:
 *   get:
 *     deprecated: true
 *     summary: Get all user
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Create new user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JsonRespond'
 */

/**
 * TODO: [PUT] /user/update-avatar -> Update avatar
 * @swagger
 * /user/update-avatar:
 *   put:
 *     summary: Update avatar
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Provide an object containing new avatar
 *       content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *          example:
 *            avatar: https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=170667a&w=0&k=20&c=m-F9Doa2ecNYEEjeplkFCmZBlc5tm1pl1F7cBCh9ZzM=
 *     responses:
 *       200:
 *         description: Return the information of the newly updated User
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JsonRespond'
 *             example:
 *               statusCode: 200
 *               message: Updated avatar successfully
 */

/**
 * TODO: [GET] /user/get-info -> Get information about user
 * @swagger
 * /user/get-info:
 *   get:
 *     summary: Get information about user
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Return the information of User
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JsonRespond'
 *             properties:
 *               data:
 *                 $ref: '#/components/schemas/User'
 *             example:
 *               statusCode: 200
 *               message: Success
 *               data:
 *                 mail: 20522122@gm.uit.edu.vn
 *                 firstName: Phúc
 *                 lastName: Hoàng
 *                 avatar: new link avatar
 *                 groupTaskList:
 *                   - id: 1
 *                     name: Homework
 *                     taskList:
 *                       - id: 10
 *                         title: Do homework SE346
 *                         description: Bai tap thuc hanh 1
 *                         voiceList:
 *                           - id: 1
 *                             taskId: 1
 *                             name: dosth1
 *                             file: link1
 *                             createdAt: 2023-04-19T14:04:40.113Z
 *                             updatedAt: 2023-04-19T14:04:40.113Z
 *                           - id: 2
 *                             taskId: 1
 *                             name: dosth2
 *                             file: link2
 *                             createdAt: 2023-04-19T14:04:40.113Z
 *                             updatedAt: 2023-04-19T14:04:40.113Z
 *                         subtaskList:
 *                           - id: 1
 *                             taskId: 1
 *                             title: Subtask1
 *                             isCompleted: true
 *                             createdAt: 2023-04-19T14:04:40.113Z
 *                             updatedAt: 2023-04-19T14:04:40.113Z
 *                           - id: 2
 *                             taskId: 1
 *                             title: Subtask2
 *                             isCompleted: false
 *                             createdAt: 2023-04-19T14:04:40.113Z
 *                             updatedAt: 2023-04-19T14:04:40.113Z
 *                         fromDate: 2023-04-19T14:04:40.113Z
 *                         toDate: 2023-04-19T14:04:40.113Z
 *                         isCompleted: true
 *                         isFavorited: false
 *                         createdAt: 2023-04-19T14:04:40.113Z
 *                         updatedAt: 2023-04-19T14:04:40.113Z
 *                       - id: 11
 *                         title: Do homework SE109
 *                         description: Action planning
 *                         fromDate: 2023-04-19T14:04:40.113Z
 *                         toDate: 2023-04-19T14:04:40.113Z
 *                         isCompleted: false
 *                         isFavorited: false
 *                         createdAt: 2023-04-19T14:04:40.113Z
 *                         updatedAt: 2023-04-19T14:04:40.113Z
 *                     createdAt: 2023-04-19T14:04:40.113Z
 *                     updatedAt: 2023-04-19T14:04:40.113Z
 *                   - id: 2
 *                     name: SE109
 *                     taskList:
 *                       - id: 12
 *                         title: Learn about Redis
 *                         description: What is Redis? How to caching?
 *                         fromDate: 2023-04-19T14:04:40.113Z
 *                         toDate: 2023-04-19T14:04:40.113Z
 *                         isCompleted: true
 *                         isFavorited: false
 *                         createdAt: 2023-04-19T14:04:40.113Z
 *                         updatedAt: 2023-04-19T14:04:40.113Z
 *                       - id: 13
 *                         title: Learn about logger
 *                         description: What is logger? How to apply?
 *                         fromDate: 2023-04-19T14:04:40.113Z
 *                         toDate: 2023-04-19T14:04:40.113Z
 *                         isCompleted: false
 *                         isFavorited: false
 *                         createdAt: 2023-04-19T14:04:40.113Z
 *                         updatedAt: 2023-04-19T14:04:40.113Z
 *                     createdAt: 2023-04-19T14:04:40.113Z
 *                     updatedAt: 2023-04-19T14:04:40.113Z
 *                 nonelistedTaskList:
 *                   - id: 21
 *                     title: Eugen
 *                     description: Université de Montpellier I
 *                     fromDate: 2023-04-26
 *                     toDate: 2023-05-12
 *                     isCompleted: true
 *                     isFavorited: true
 *                   - id: 22
 *                     title: Kelley
 *                     description: Maria Grzegorzewska College for Special Education
 *                     fromDate: 2023-05-03
 *                     toDate: 2023-05-10
 *                     isCompleted: false
 *                     isFavorited: false
 *                 phoneNum: "0967781796"
 *                 dateOfBirth: 2023-04-19T14:04:40.113Z
 *                 registeredAt: 2023-04-19T14:04:40.113Z
 *                 lastLogin: 2023-04-19T14:04:40.113Z
 */

/**
 * TODO: [PUT] /user/update-info -> Update information of user
 * @swagger
 * /user/update-info:
 *   put:
 *     summary: Update information of user
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Provide an object containing new info user
 *       content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *          example:
 *            firstName: Phúc
 *            lastName: Hoàng
 *            phoneNum: '0967781796'
 *            dateOfBirth: 2023-04-19T14:04:40.113Z
 *     responses:
 *       200:
 *         description: Return the information of the newly updated User
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JsonRespond'
 *             properties:
 *               data:
 *                 $ref: '#/components/schemas/User'
 *             example:
 *               statusCode: 200
 *               message: Success
 *               data:
 *                 mail: 20522122@gm.uit.edu.vn
 *                 firstName: Phúc
 *                 lastName: Hoàng
 *                 avatar: new link avatar
 *                 gender: true
 *                 phoneNum: "0967781796"
 *                 dateOfBirth: 2023-04-19T14:04:40.113Z
 *                 registeredAt: 2023-04-19T14:04:40.113Z
 *                 lastLogin: 2023-04-19T14:04:40.113Z
 */

/**
 * TODO: [PUT] /user/change-pw -> Change password
 * @swagger
 * /user/change-password:
 *   put:
 *     summary: User update password
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Provide an object containing new password
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *           example:
 *             oldPassword: tuannt01
 *             newPassword: tuannt02
 *     responses:
 *       200:
 *         description: Return the information of the newly updated User
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JsonRespond'
 *             example:
 *               statusCode: 200
 *               message: Changed password successfully
 */

/**
 * TODO: [PUT] /user/forget-pw -> Forget password
 * @swagger
 * /user/forget-pw:
 *   put:
 *     deprecated: true
 *     summary: User forget password
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Provide an object containing registered email
 *       content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/User'
 *          example:
 *            mail: 20522122@gm.uit.edu.vn
 *     responses:
 *       200:
 *         description: Return the request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JsonRespond'
 */
