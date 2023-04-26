// ! Defind path

/**
 * TODO: [GET] /subtask -> Get all subtask belong to Task
 * @swagger
 * /subtask:
 *   get:
 *     summary: Get all subtask belong to Task
 *     tags: [Subtask]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Provide an object containing task id
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              taskId:
 *                type: integer
 *            example:
 *              taskId: 1
 *     responses:
 *       200:
 *         description: Return a list subtask
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JsonRespond'
 *             properties:
 *               data:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/Subtask'
 *             example:
 *               statusCode: 200
 *               message: Success
 *               data:
 *                 - id: 1
 *                   taskId: 1
 *                   title: Subtask1
 *                   isCompleted: true
 *                   createdAt: 2023-04-19T14:04:40.113Z
 *                   updatedAt: 2023-04-19T14:04:40.113Z
 *                 - id: 2
 *                   taskId: 1
 *                   title: Subtask2
 *                   isCompleted: false
 *                   createdAt: 2023-04-19T14:04:40.113Z
 *                   updatedAt: 2023-04-19T14:04:40.113Z
 */

/**
 * TODO: [POST] /subtask -> Create new subtask
 * @swagger
 * /subtask:
 *   post:
 *     summary: Create new subtask
 *     tags: [Subtask]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Provide an object containing info subtask
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Subtask'
 *           example:
 *             taskId: 1
 *             title: Title1
 *     responses:
 *       201:
 *         description: Return the information of the newly created Subtask
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JsonRespond'
 *             properties:
 *               data:
 *                 $ref: '#/components/schemas/Subtask'
 *             example:
 *               statusCode: 201
 *               message: success
 *               data:
 *                 id: 2
 *                 taskId: 1
 *                 title: Title1
 *                 isCompleted: false
 *                 createdAt: 2023-04-19T14:04:40.113Z
 *                 updatedAt: 2023-04-19T14:04:40.113Z
 */

/**
 * TODO: [PUT] /subtask/{subtaskId} -> Update title subtask
 * @swagger
 * /subtask/{subtaskId}:
 *   put:
 *     summary: Update title subtask
 *     tags: [Subtask]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: subtaskId
 *         required: true
 *         description: The subtask id
 *     requestBody:
 *       description: Provide an object containing new title
 *       content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Subtask'
 *          example:
 *            title: newTitle
 *     responses:
 *       200:
 *         description: Return the information of the newly created Subtask
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JsonRespond'
 *             properties:
 *               data:
 *                 $ref: '#/components/schemas/Subtask'
 *             example:
 *               statusCode: 200
 *               message: Success
 *               data:
 *                 id: 2
 *                 taskId: 1
 *                 title: newTitle
 *                 isCompleted: false
 *                 createdAt: 2023-04-19T14:04:40.113Z
 *                 updatedAt: 2023-04-19T14:04:40.113Z
 */

/**
 * TODO: [PUT] /subtask/{subtaskId}/toggle-mark -> Mark/unmark done Subtask
 * @swagger
 * /subtask/{subtaskId}/toggle-mark:
 *   put:
 *     summary: Mark/unmark done Subtask
 *     tags: [Subtask]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: subtaskId
 *         required: true
 *         description: The subtask id
 *     responses:
 *       200:
 *         description: Return the information of the newly created Subtask
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JsonRespond'
 *             properties:
 *               data:
 *                 $ref: '#/components/schemas/Subtask'
 *             example:
 *               statusCode: 200
 *               message: Success
 *               data:
 *                 id: 2
 *                 taskId: 1
 *                 title: newTitle
 *                 isCompleted: true
 *                 createdAt: 2023-04-19T14:04:40.113Z
 *                 updatedAt: 2023-04-19T14:04:40.113Z
 */

/**
 * TODO: [POST] /subtask/{subtaskId}/dup -> Duplicate Subtask
 * @swagger
 * /subtask/{subtaskId}/dup:
 *   post:
 *     summary: Duplicate Subtask
 *     tags: [Subtask]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: subtaskId
 *         required: true
 *         description: The subtask id
 *     responses:
 *       201:
 *         description: Return the information of the newly created Subtask
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JsonRespond'
 *             properties:
 *               data:
 *                 $ref: '#/components/schemas/Subtask'
 *             example:
 *               statusCode: 201
 *               message: Success
 *               data:
 *                 id: 2
 *                 taskId: 1
 *                 title: newTitle
 *                 isCompleted: true
 *                 createdAt: 2023-04-19T14:04:40.113Z
 *                 updatedAt: 2023-04-19T14:04:40.113Z
 */

/**
 * TODO: [DELETE] /subtask/{subtaskId} -> Delete subtask by id
 * @swagger
 * /subtask/{subtaskId}:
 *   delete:
 *     summary: Delete subtask by id
 *     tags: [Subtask]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: subtaskId
 *         required: true
 *         description: The subtask id
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
