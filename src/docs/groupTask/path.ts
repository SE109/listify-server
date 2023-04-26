// ! Defind path

/**
 * TODO: [GET] /gtask -> Get all GroupTask belong to user
 * @swagger
 * /gtask:
 *   get:
 *     summary: Get all GroupTask belong to user
 *     tags: [GroupTask]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Return a list GroupTask
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/GroupTask'
 *               example:
 *                 - id: 1
 *                   name: Homework
 *                   taskList:
 *                     - id: 10
 *                       title: Do homework SE346
 *                       description: Bai tap thuc hanh 1
 *                       fromDate: 2023-04-19T14:04:40.113Z
 *                       toDate: 2023-04-19T14:04:40.113Z
 *                       isCompleted: true
 *                       isFavorited: false
 *                       createdAt: 2023-04-19T14:04:40.113Z
 *                       updatedAt: 2023-04-19T14:04:40.113Z
 *                     - id: 11
 *                       title: Do homework SE109
 *                       description: Action planning
 *                       fromDate: 2023-04-19T14:04:40.113Z
 *                       toDate: 2023-04-19T14:04:40.113Z
 *                       isCompleted: false
 *                       isFavorited: false
 *                       createdAt: 2023-04-19T14:04:40.113Z
 *                       updatedAt: 2023-04-19T14:04:40.113Z
 *                   createdAt: 2023-04-19T14:04:40.113Z
 *                   updatedAt: 2023-04-19T14:04:40.113Z
 *                 - id: 2
 *                   name: SE109
 *                   taskList:
 *                     - id: 12
 *                       title: Learn about Redis
 *                       description: What is Redis? How to caching?
 *                       fromDate: 2023-04-19T14:04:40.113Z
 *                       toDate: 2023-04-19T14:04:40.113Z
 *                       isCompleted: true
 *                       isFavorited: false
 *                       createdAt: 2023-04-19T14:04:40.113Z
 *                       updatedAt: 2023-04-19T14:04:40.113Z
 *                     - id: 13
 *                       title: Learn about logger
 *                       description: What is logger? How to apply?
 *                       fromDate: 2023-04-19T14:04:40.113Z
 *                       toDate: 2023-04-19T14:04:40.113Z
 *                       isCompleted: false
 *                       isFavorited: false
 *                       createdAt: 2023-04-19T14:04:40.113Z
 *                       updatedAt: 2023-04-19T14:04:40.113Z
 *                   createdAt: 2023-04-19T14:04:40.113Z
 *                   updatedAt: 2023-04-19T14:04:40.113Z
 */

/**
 * TODO: [GET] /gtask/{groupTaskId} -> Get single GroupTask by id
 * @swagger
 * /gtask/{groupTaskId}:
 *   get:
 *     summary: Get single GroupTask by id
 *     parameters:
 *       - in: path
 *         name: groupTaskId
 *         required: true
 *         description: The group task id
 *     tags: [GroupTask]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Return a list GroupTask
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JsonRespond'
 *             properties:
 *               data:
 *                 $ref: '#/components/schemas/GroupTask'
 *             example:
 *               statusCode: 200
 *               message: Success
 *               data:
 *                 id: 1
 *                 name: Homework
 *                 taskList:
 *                   - id: 10
 *                     title: Do homework SE346
 *                     description: Bai tap thuc hanh 1
 *                     fromDate: 2023-04-19T14:04:40.113Z
 *                     toDate: 2023-04-19T14:04:40.113Z
 *                     isCompleted: true
 *                     isFavorited: false
 *                     createdAt: 2023-04-19T14:04:40.113Z
 *                     updatedAt: 2023-04-19T14:04:40.113Z
 *                   - id: 11
 *                     title: Do homework SE109
 *                     description: Action planning
 *                     fromDate: 2023-04-19T14:04:40.113Z
 *                     toDate: 2023-04-19T14:04:40.113Z
 *                     isCompleted: false
 *                     isFavorited: false
 *                     createdAt: 2023-04-19T14:04:40.113Z
 *                     updatedAt: 2023-04-19T14:04:40.113Z
 *                 createdAt: 2023-04-19T14:04:40.113Z
 *                 updatedAt: 2023-04-19T14:04:40.113Z
 */

/**
 * TODO: [POST] /gtask -> create new GroupTask
 * @swagger
 * /gtask:
 *   post:
 *     summary: Create new GroupTask
 *     tags: [GroupTask]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Provide an object containing name
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              name: string
 *            example:
 *              name: SE346
 *     responses:
 *       200:
 *         description: Return the information of the newly created GroupTask.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/GroupTask'
 *             example:
 *               id: 1
 *               name: Homework
 *               createdAt: 2023-04-19T14:04:40.113Z
 *               updatedAt: 2023-04-19T14:04:40.113Z
 */

/**
 * TODO: [PUT] /gtask/{groupTaskId} -> Rename GroupTask
 * @swagger
 * /gtask/{groupTaskId}:
 *   put:
 *     summary: Rename GroupTask
 *     tags: [GroupTask]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Provide an object containing new name
 *       content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/GroupTask'
 *          example:
 *            name: newName
 *     responses:
 *       200:
 *         description: Return the information of the newly updated GroupTask.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JsonRespond'
 *             properties:
 *               data:
 *                 $ref: '#/components/schemas/GroupTask'
 *             example:
 *               statusCode: 200
 *               message: Success
 *               data:
 *                 id: 1
 *                 name: newName
 *                 createdAt: 2023-04-19T14:04:40.113Z
 *                 updatedAt: 2023-04-19T14:04:40.113Z
 */

/**
 * TODO: [DELETE] /gtask/{groupTaskId} -> Delete GroupTask
 * @swagger
 * /gtask/{groupTaskId}:
 *   delete:
 *     summary: Delete GroupTask
 *     tags: [GroupTask]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Return result after delete
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JsonRespond'
 *             example:
 *               statusCode: 200
 *               message: Delete successfully
 */
