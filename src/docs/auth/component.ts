// ! Defind component

/**
 * @swagger
 * components:
 *   schemas:
 *     JsonRespond:
 *       type: object
 *       properties:
 *         statusCode:
 *           type: integer
 *         message:
 *           type: string
 *         data:
 *           type: object
 *         error:
 *           type: string
 *     UserRegister:
 *       type: object
 *       required:
 *         - email
 *         - password
 *         - lastName
 *         - firstName
 *         - phoneNum
 *       properties:
 *         email:
 *           type: string
 *           description: The email of user
 *         password:
 *           type: string
 *           description: The password of user
 *         lastName:
 *           type: string
 *           description: The last name of user
 *         firstName:
 *           type: string
 *           description: The first name of user
 *         phoneNum:
 *           type: string
 *           description: The phone number of user
 *       example:
 *         email: 20522122@gm.uit.edu.vn
 *         password: tuannt02
 *         lastName: Tuấn
 *         firstName: Nguyễn
 *         phoneNum: "0967781796"
 *     UserLogin:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: The email of user
 *         password:
 *           type: string
 *           description: The password of user
 *       example:
 *         email: 20522122@gm.uit.edu.vn
 *         password: tuannt02
 *   requestBodies:
 *     UserRegister:
 *       description: UserRegister object that needs to be added the system
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserRegister'
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *     cookieAuth:
 *       type: apiKey
 *       in: cookie
 *       name: refreshtoken
 */
