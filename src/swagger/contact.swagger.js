
/** 
* @swagger
*  components:
*    securitySchemes:
*      bearerAuth:
*        name : Authorization
*        type : http
*        scheme: bearer
*        bearerFormat: JWT    
*       
*/

/**
 * @swagger
 * /api/contact:
 *   post:
 *     summary: for create
 *     tags: [contact]
 *     description: Contactni crut apis.
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                 name:
 *                   example: Tom
 *                   type: string
 *                 phoneNumber:
 *                    type: string
 *                    example: 998940102003
 *                 email:
 *                   type: string
 *                   example: email@gmail.com
 *                 message:
 *                    type: string
 *                    example: Hello word
 *     responses:
 *       400:
 *         description: Create contact.
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 message:
 *                   type: string
 *                   example: succesfull
 * /api/contact/20583b72-ce42-45d3-8c1e-7cfa7246d421:
 *   get:
 *     summary: for get by id
 *     tags: [contact]
 *     security:
 *           - bearerAuth: []
 *     responses:
 *       400:
 *         description: get by id contact.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: 20583b72-ce42-45d3-8c1e-7cfa7246d421
 *                     name:
 *                       type: string
 *                       description: user's firstName and required
 *                       example: Tom
 *                     phoneNumber:
 *                       type: string
 *                       description: user's phoneNumber and required
 *                       example: 998940102003
 *                     email:
 *                       type: string
 *                       description: user's email and required
 *                       example: email@gmail.com
 *                     message:
 *                       type: string
 *                       description: user's message and required
 *                       example: Hello word
 * /api/contact/all:
 *   get:
 *     summary: for get all
 *     tags: [contact]
 *     security:
 *           - bearerAuth: []
 *     responses:
 *       400:
 *         description: get all contact.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  data:
 *                    type: array
 *                    items:
 *                      type: object
 *                      properties:
 *                        id:
 *                          type: string
 *                          description: The contact id
 *                          example: 20583b72-ce42-45d3-8c1e-7cfa7246d421
 *                        name:
 *                          type: string
 *                          description: user's firstName and required
 *                          example: Tom
 *                        phoneNumber:
 *                          type: string
 *                          description: user's phoneNumber and required
 *                          example: 998940102003
 *                        email:
 *                          type: string
 *                          description: user's email and required
 *                          example: email@gmail.com
 *                        message:
 *                          type: string
 *                          description: user's message and required
 *                          example: Hello word
 * /api/contact/6631cd98-0b31-49e7-a277-a25fa7ac5803:
 *   put:
 *     summary: for update .
 *     tags: [contact]
 *     security:
 *           - bearerAuth: []
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                 name:
 *                   example: Tom
 *                   type: string
 *                 phoneNumber:
 *                    type: string
 *                    example: 998940102003
 *                 email:
 *                   type: string
 *                   example: email@gmail.com
 *                 message:
 *                    type: string
 *                    example: Hello word
 *     responses:
 *       400:
 *         description: update contact.
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 message:
 *                   type: string
 *                   example: succesfull
 * /api/contact/87876c8a-96ff-4430-9871-156a135d909a:
 *   delete:
 *     summary: for delete.
 *     tags: [contact]
 *     security:
 *           - bearerAuth: []
 *     responses:
 *       400:
 *         description: delete contact.
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 message:
 *                   type: string
 *                   example: success
 */
