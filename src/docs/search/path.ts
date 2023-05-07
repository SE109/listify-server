// ! Defind path

/**
 * TODO: [PUT] /search -> Search task
 * @swagger
 * /search:
 *   get:
 *     summary: Search task
 *     tags: [Search]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: limit
 *         required: true
 *         schema:
 *           type: integer
 *         description: The numbers of items to return
 *       - in: query
 *         name: page
 *         required: true
 *         schema:
 *           type: integer
 *         description: The offset based on limit
 *       - in: query
 *         name: content
 *         required: true
 *         schema:
 *           type: string
 *         description: Text search including title, description
 *       - in: query
 *         name: types
 *         schema:
 *           type: array
 *           items:
 *             type: string
 *             enum: [all, nonelisted, done, undone, today]
 *     responses:
 *       200:
 *         description: Return a list task meet condition
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
 */
