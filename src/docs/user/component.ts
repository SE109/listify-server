// ! Defind component

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         mail:
 *           type: string
 *         groupTask:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/GroupTask'
 *         password:
 *           type: string
 *         firstName:
 *           type: string
 *         lastName:
 *           type: string
 *         avatar:
 *           type: string
 *         gender:
 *           type: boolean
 *         phoneNum:
 *           type: string
 *         dateOfBirth:
 *           type: string
 *         registeredAt:
 *           type: string
 *         lastLogin:
 *           type: string
 */
