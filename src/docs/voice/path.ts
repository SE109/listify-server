// ! Defind path

/**
 * TODO: [GET] /voice -> Get all voice of task
 * @swagger
 * /voice:
 *   get:
 *     summary: Get all voice of task
 *     tags: [Voice]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Provide an object containing task id
 *       content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              taskId: integer
 *            example:
 *              taskId: 1
 *     responses:
 *       200:
 *         description: Return a list voice
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JsonRespond'
 *             properties:
 *               data:
 *                 type: array
 *                 items:
 *                   $ref: '#/components/schemas/Voice'
 *             example:
 *               statusCode: 200
 *               message: Success
 *               data:
 *                 - id: 1
 *                   taskId: 1
 *                   name: dosth1
 *                   file: link1
 *                   createdAt: 2023-04-19T14:04:40.113Z
 *                   updatedAt: 2023-04-19T14:04:40.113Z
 *                 - id: 2
 *                   taskId: 1
 *                   name: dosth2
 *                   file: link2
 *                   createdAt: 2023-04-19T14:04:40.113Z
 *                   updatedAt: 2023-04-19T14:04:40.113Z
 */

/**
 * TODO: [POST] /voice -> Create new voice
 * @swagger
 * /voice:
 *   post:
 *     summary: Create new voice
 *     tags: [Voice]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       description: Provide an object containing info voice
 *       content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Voice'
 *          example:
 *            taskId: 1
 *            name: IE106
 *            file: link
 *     responses:
 *       201:
 *         description: Return the information of the newly created Voice
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JsonRespond'
 *             properties:
 *               data:
 *                 $ref: '#/components/schemas/Voice'
 *             example:
 *               statusCode: 201
 *               message: Success
 *               data:
 *                 id: 2
 *                 taskId: 1
 *                 name: IE106
 *                 file: link
 *                 createdAt: 2023-04-19T14:04:40.113Z
 *                 updatedAt: 2023-04-19T14:04:40.113Z
 */

/**
 * TODO: [PUT] /voice/{voiceId} -> Update voice by id
 * @swagger
 * /voice/{voiceId}:
 *   post:
 *     summary: Update voice by id
 *     tags: [Voice]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: voiceId
 *         required: true
 *         description: The voice id
 *     requestBody:
 *       description: Provide an object containing info voice
 *       content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Voice'
 *          example:
 *            name: Painting voice detail
 *            file: link3
 *     responses:
 *       200:
 *         description: Return the information of the newly updated Voice
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JsonRespond'
 *             properties:
 *               data:
 *                 $ref: '#/components/schemas/Voice'
 *             example:
 *               statusCode: 200
 *               message: Success
 *               data:
 *                 id: 3
 *                 taskId: 1
 *                 name: Painting voice detail
 *                 file: link3
 *                 createdAt: 2023-04-19T14:04:40.113Z
 *                 updatedAt: 2023-04-19T14:04:40.113Z
 */

/**
 * TODO: [DELETE] /voice/{voiceId} -> Delete voice by id
 * @swagger
 * /voice/{voiceId}:
 *   delete:
 *     summary: Delete voice by id
 *     tags: [Voice]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: voiceId
 *         required: true
 *         description: The voice id
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
