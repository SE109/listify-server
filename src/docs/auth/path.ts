// ! Defind path

/**
 * TODO: [POST] /auth/register -> create new user
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Create new user
 *     tags: [Auth]
 *     requestBody:
 *       description: Provide an user register object to be able to register account
 *       content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/UserRegister'
 *     responses:
 *       201:
 *         description: Return result after register
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JsonRespond'
 *             example:
 *               statusCode: 201
 *               message: New account registration successful
 *       409:
 *         description: Email registered
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JsonRespond'
 *             example:
 *               statusCode: 409
 *               message: This email is registered
 *               error: ConflictError
 */

/**
 * TODO: [POST] /auth/login -> user login
 * @swagger
 * /auth/login:
 *   post:
 *     summary: User login
 *     tags: [Auth]
 *     requestBody:
 *       description: Provide an user login object to be able to login
 *       content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/UserLogin'
 *     responses:
 *       200:
 *         description: >
 *           Successfully authenticated.
 *           The session ID is returned in a cookie named `refreshtoken`. You need to include this cookie in subsequent requests.
 *         headers:
 *           Set-Cookie:
 *             schema:
 *               type: string
 *               example: JSESSIONID=abcde12345; Path=/; HttpOnly
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JsonRespond'
 *             example:
 *               statusCode: 200
 *               message: Login successfully
 *               data:
 *                 user:
 *                   mail: 20522122@gm.uit.edu.vn
 *                   firstName: Tuan
 *                   lastName: Nguyen
 *                   avatar: https://media.istockphoto.com/id/1223671392/vector/default-profile-picture-avatar-photo-placeholder-vector-illustration.jpg?s=170667a&w=0&k=20&c=m-F9Doa2ecNYEEjeplkFCmZBlc5tm1pl1F7cBCh9ZzM=
 *                   phoneNum: 0967781798
 *                   dateOfBirth: null
 *                 accessToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im1haWwiOiIyMDUyMjEyMkBnbS51aXQuZWR1LnZuIiwicm9sZSI6IkFkbWluIn0sImlhdCI6MTY4MjQxMDE0MywiZXhwIjoxNjgyNDk2NTQzfQ.QzhYyvOf3NClAr1aqM_FFsuw1D7QzpRvevBnDItUqI8
 *       401:
 *         description: Wrong password
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JsonRespond'
 *             example:
 *               statusCode: 409
 *               message: Wrong password
 *               error: UnauthorizedError
 *       409:
 *         description: User not register
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JsonRespond'
 *             example:
 *               statusCode: 409
 *               message: User not register
 *               error: ConflictError
 */

/**
 * TODO: [POST] /auth/logout -> user logout
 * @swagger
 * /auth/logout:
 *   delete:
 *     summary: User logout
 *     tags: [Auth]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Logout successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JsonRespond'
 *             example:
 *               statusCode: 200
 *               message: Logout successfully
 */

/**
 * TODO: [POST] /auth/refresh-token -> refresh token
 * @swagger
 * /auth/refresh-token:
 *   post:
 *     summary: Refresh token
 *     tags: [Auth]
 *     security:
 *       - cookieAuth: []
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/JsonRespond'
 *             example:
 *               statusCode: 200
 *               message: Success
 *               data:
 *                 accessToken: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im1haWwiOiIyMDUyMjEyMkBnbS51aXQuZWR1LnZuIiwicm9sZSI6IkFkbWluIn0sImlhdCI6MTY4MjQxMzI4OSwiZXhwIjoxNjgyNDk5Njg5fQ.mlLNlcXm1KOsFXevX35uAqS2RWx-XRWmCKh89hHawKA
 */
