// ! Defind path

/**
 * TODO: [GET] /task/b-gtask -> Get all task belong to GroupTask
 * @swagger
 * /task/b-gtask:
 *   get:
 *     summary: Get all task belong to GroupTask
 *     tags: [Task]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Provide an object containing group task id
 *       content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *          example:
 *            taskGroupId: 1
 *     responses:
 *       200:
 *         description: Return a list task
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JsonRespond'
 *             properties:
 *               data:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Task'
 *             example:
 *               statusCode: 200
 *               message: Success
 *               data:
 *                 - id: 1
 *                   title: task1
 *                   description: desc task1
 *                   fromDate: 2023-04-19T14:04:40.113Z
 *                   toDate: 2023-04-19T14:04:40.113Z
 *                   isCompleted: true
 *                   isFavorited: false
 *                   createdAt: 2023-04-19T14:04:40.113Z
 *                   updatedAt: 2023-04-19T14:04:40.113Z
 *                 - id: 2
 *                   title: task2
 *                   description: desc task2
 *                   fromDate: 2023-04-19T14:04:40.113Z
 *                   toDate: 2023-04-19T14:04:40.113Z
 *                   isCompleted: false
 *                   isFavorited: true
 *                   createdAt: 2023-04-19T14:04:40.113Z
 *                   updatedAt: 2023-04-19T14:04:40.113Z
 *
 */

/**
 * TODO: [GET] /task/findByType -> Find by type
 * @swagger
 * /task/findByType:
 *   get:
 *     summary: Find by type
 *     tags: [Task]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: types
 *         required: true
 *         schema:
 *           type: array
 *           items:
 *             type: string
 *             enum: [all, nonelisted, done, undone, today]
 *     responses:
 *       200:
 *         description: Return a list task
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JsonRespond'
 *             properties:
 *               data:
 *                 $ref: '#/components/schemas/TaskFind'
 *             example:
 *               statusCode: 200
 *               message: Success
 *               data:
 *                 all:
 *                   - id: 1
 *                     title: task1
 *                     description: desc task1
 *                     fromDate: 2023-04-19T14:04:40.113Z
 *                     toDate: 2023-04-19T14:04:40.113Z
 *                     isCompleted: true
 *                     isFavorited: false
 *                     createdAt: 2023-04-19T14:04:40.113Z
 *                     updatedAt: 2023-04-19T14:04:40.113Z
 *                   - id: 2
 *                     title: task2
 *                     description: desc task2
 *                     fromDate: 2023-04-19T14:04:40.113Z
 *                     toDate: 2023-04-19T14:04:40.113Z
 *                     isCompleted: false
 *                     isFavorited: true
 *                     createdAt: 2023-04-19T14:04:40.113Z
 *                     updatedAt: 2023-04-19T14:04:40.113Z
 *                 today:
 *                   - id: 2
 *                     title: task2
 *                     description: desc task2
 *                     fromDate: 2023-04-19T14:04:40.113Z
 *                     toDate: 2023-04-19T14:04:40.113Z
 *                     isCompleted: false
 *                     isFavorited: true
 *                     createdAt: 2023-04-19T14:04:40.113Z
 *                     updatedAt: 2023-04-19T14:04:40.113Z
 *
 */

/**
 * TODO: [POST] /task -> Create new task
 * @swagger
 * /task:
 *   post:
 *     summary: Create new task
 *     tags: [Task]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Provide an task object
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *           example:
 *             title: Do homework SE109
 *             description: API design
 *             fromDate: 2023-04-19T14:04:40.113Z
 *             toDate: 2023-04-19T14:04:40.113Z
 *     responses:
 *       201:
 *         description: Return the information of the newly created Task.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JsonRespond'
 *             properties:
 *               data:
 *                 $ref: '#/components/schemas/Task'
 *             example:
 *               statusCode: 201
 *               message: Success
 *               data:
 *                 id: 1
 *                 title: Do homework SE109
 *                 description: API design
 *                 fromDate: 2023-04-19T14:04:40.113Z
 *                 toDate: 2023-04-19T14:04:40.113Z
 *                 isCompleted: true
 *                 isFavorited: false
 *                 createdAt: 2023-04-19T14:04:40.113Z
 *                 updatedAt: 2023-04-19T14:04:40.113Z
 */

/**
 * TODO: [PUT] /task/{taskId} -> Update info task
 * @swagger
 * /task/{taskId}:
 *   put:
 *     summary: Update info task
 *     tags: [Task]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: taskId
 *         required: true
 *         description: The task id
 *     requestBody:
 *       description: Provide an task object
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *           example:
 *             title: Do homework SE346
 *             description: Bai tap thuc hanh 1
 *             fromDate: 2023-04-19T14:04:40.113Z
 *             toDate: 2023-04-19T14:04:40.113Z
 *     responses:
 *       200:
 *         description: Return the information of the newly updated Task
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JsonRespond'
 *             properties:
 *               data:
 *                 $ref: '#/components/schemas/Task'
 *             example:
 *               statusCode: 200
 *               message: Success
 *               data:
 *                 id: 10
 *                 title: Do homework SE346
 *                 description: Bai tap thuc hanh 1
 *                 fromDate: 2023-04-19T14:04:40.113Z
 *                 toDate: 2023-04-19T14:04:40.113Z
 *                 isCompleted: true
 *                 isFavorited: false
 *                 createdAt: 2023-04-19T14:04:40.113Z
 *                 updatedAt: 2023-04-19T14:04:40.113Z
 */

/**
 * TODO: [PUT] /task/{taskId}/move -> Move task to GroupTask
 * @swagger
 * /task/{taskId}/move:
 *   put:
 *     summary: Move task to GroupTask
 *     tags: [Task]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: taskId
 *         required: true
 *         description: The task id
 *     requestBody:
 *       description: Provide an object containing group task id
 *       content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Task'
 *          example:
 *            taskGroupId: 1
 *     responses:
 *       200:
 *         description: Return the information of the newly updated Task
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JsonRespond'
 *             example:
 *               statusCode: 200
 *               message: Move task successfully
 */

/**
 * TODO: [POST] /task/{taskId}/dup -> Duplicate task
 * @swagger
 * /task/{taskId}/dup:
 *   post:
 *     summary: Duplicate task
 *     tags: [Task]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: taskId
 *         required: true
 *         description: The task id
 *     responses:
 *       201:
 *         description: Return the information of the newly created Task
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JsonRespond'
 *             properties:
 *               data:
 *                 $ref: '#/components/schemas/Task'
 *             example:
 *               statusCode: 201
 *               message: Success
 *               data:
 *                 id: 10
 *                 taskGroupId: 2
 *                 title: Do homework SE346
 *                 description: Bai tap thuc hanh 1
 *                 fromDate: 2023-04-19T14:04:40.113Z
 *                 toDate: 2023-04-19T14:04:40.113Z
 *                 isCompleted: true
 *                 isFavorited: false
 *                 createdAt: 2023-04-19T14:04:40.113Z
 *                 updatedAt: 2023-04-19T14:04:40.113Z
 */

/**
 * TODO: [PUT] /task/{taskId}/toggle-mark -> Mark/unmark done task
 * @swagger
 * /task/{taskId}/toggle-mark:
 *   put:
 *     summary: Mark/unmark done task
 *     tags: [Task]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: taskId
 *         required: true
 *         description: The task id
 *     responses:
 *       200:
 *         description: Return the information of the newly updated Task
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JsonRespond'
 *             properties:
 *               data:
 *                 $ref: '#/components/schemas/Task'
 *             example:
 *               statusCode: 200
 *               message: Mark success
 *               data:
 *                 id: 10
 *                 taskGroupId: 2
 *                 title: Do homework SE346
 *                 description: Bai tap thuc hanh 1
 *                 fromDate: 2023-04-19T14:04:40.113Z
 *                 toDate: 2023-04-19T14:04:40.113Z
 *                 isCompleted: true
 *                 isFavorited: false
 *                 createdAt: 2023-04-19T14:04:40.113Z
 *                 updatedAt: 2023-04-19T14:04:40.113Z
 */

/**
 * TODO: [PUT] /task/{taskId}/toggle-favo -> Add/remove favorite task
 * @swagger
 * /task/{taskId}/toggle-favo:
 *   put:
 *     summary: Add/remove favorite task
 *     tags: [Task]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: taskId
 *         required: true
 *         description: The task id
 *     responses:
 *       200:
 *         description: Return the information of the newly updated Task
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JsonRespond'
 *             properties:
 *               data:
 *                 $ref: '#/components/schemas/Task'
 *             example:
 *               statusCode: 200
 *               message: Remove favorite task success
 *               data:
 *                 id: 10
 *                 taskGroupId: 2
 *                 title: Do homework SE346
 *                 description: Bai tap thuc hanh 1
 *                 fromDate: 2023-04-19T14:04:40.113Z
 *                 toDate: 2023-04-19T14:04:40.113Z
 *                 isCompleted: true
 *                 isFavorited: false
 *                 createdAt: 2023-04-19T14:04:40.113Z
 *                 updatedAt: 2023-04-19T14:04:40.113Z
 */

/**
 * TODO: [DELETE] /task/{taskId} -> Delete task by id
 * @swagger
 * /task/{taskId}:
 *   delete:
 *     summary: Delete task by id
 *     tags: [Task]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: taskId
 *         required: true
 *         description: The task id
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
