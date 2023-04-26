// ! Defind component

/**
 * @swagger
 * components:
 *   schemas:
 *     GroupTask:
 *       type: object
 *       properties:
 *         id:
 *           type: interger
 *         name:
 *           type: string
 *         taskList:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Task'
 *         createdAt:
 *           type: string
 *         updatedAt:
 *           type: string
 */
