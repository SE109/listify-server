// ! Defind component

/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         taskGroupId:
 *           type: integer
 *         userMail:
 *           type: string
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         voiceList:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Voice'
 *         subtaskList:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Subtask'
 *         fromDate:
 *           type: string
 *         toDate:
 *           type: string
 *         isCompleted:
 *           type: boolean
 *         isFavorited:
 *           type: boolean
 *         createdAt:
 *           type: string
 *         updatedAt:
 *           type: string
 *     TaskFind:
 *       type: object
 *       properties:
 *         all:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Task'
 *         nonelisted:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Task'
 *         done:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Task'
 *         undone:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Task'
 *         today:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Task'
 */
