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
 * /api/feedback:
 *   post:
 *     summary: for create
 *     tags: [Feedback]
 *     description: Feedbackni crut apis.
 *     requestBody:
 *        content:
 *          multipart/form-data:
 *            schema:
 *              type: object
 *              properties:
 *                 name:
 *                   example: Tom
 *                   type: string
 *                   required: true
 *                 job:
 *                    type: string
 *                    example: programmer
 *                    required: true
 *                 text:
 *                   type: string
 *                   example: text
 *                   required: true
 *                 photo:
 *                   type: file
 *     responses:
 *       400:
 *         description: Create feedback.
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 message:
 *                   type: string
 *                   example: succesfull
 * /api/feedback/d0733566-243e-4910-9c81-b52889979d87:
 *   get:
 *     summary: for get by id
 *     tags: [Feedback]
 *     responses:
 *       400:
 *         description: get by id feedback.
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
 *                       example: d0733566-243e-4910-9c81-b52889979d87
 *                     name:
 *                       type: string
 *                       description: user's name and required
 *                       example: Tom
 *                     job:
 *                       type: string
 *                       description: user's job and required
 *                       example: programmer
 *                     text:
 *                       type: string
 *                       description: user's text and required
 *                       example: text
 *                     photo:
 *                       type: string
 *                       description: user's photo
 *                       example: 5ca8c742-5c20-4040-b2ea-99bb5963e93d.png
 * /api/feedback/all:
 *   get:
 *     summary: for get all
 *     tags: [Feedback]
 *     responses:
 *       400:
 *         description: get all feedback.
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
 *                          description: The feedback id
 *                          example: 20583b72-ce42-45d3-8c1e-7cfa7246d421
 *                        name:
 *                          type: string
 *                          description: user's name and required
 *                          example: Tom
 *                        job:
 *                          type: string
 *                          description: user's job and required
 *                          example: programmer
 *                        text:
 *                          type: string
 *                          description: user's text and required
 *                          example: text
 *                        photo:
 *                          type: string
 *                          description: user's photo
 *                          example: 5ca8c742-5c20-4040-b2ea-99bb5963e93d.png
 * /api/feedback/9baedbee-9f76-48c3-8c23-f1f7314adb5d:
 *   put:
 *     summary: for update
 *     tags: [Feedback]
 *     security:
 *              - bearerAuth: []
 *     requestBody:
 *        content:
 *          multipart/form-data:
 *            schema:
 *              type: object
 *              properties:
 *                 name:
 *                   example: Tom
 *                   type: string
 *                   required: true
 *                 job:
 *                    type: string
 *                    example: programmer
 *                    required: true
 *                 text:
 *                   type: string
 *                   example: text
 *                   required: true
 *                 photo:
 *                   type: file
 *     responses:
 *       400:
 *         description: update feedback.
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 message:
 *                   type: string
 *                   example: succesfull
 * /api/feedback/fabe2dd9-7fc2-4213-a7ba-6940e1c98d07:
 *   delete:
 *     summary: for delete.
 *     tags: [Feedback]
 *     security:
 *          - bearerAuth: []
 *     responses:
 *       400:
 *         description: delete feedback.
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 message:
 *                   type: string
 *                   example: success
 */
