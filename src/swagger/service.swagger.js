

/**
 * @swagger
 * /api/service:
 *   post:
 *     summary: for create
 *     tags: [Service]
 *     security:
 *           - bearerAuth: []
 *     description: Service crut apis.
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
 *                 title:
 *                    type: string
 *                    example: title
 *                    required: true
 *                 photo:
 *                   type: file
 *     responses:
 *       400:
 *         description: Create service.
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 message:
 *                   type: string
 *                   example: succesfull
 * /api/service/9a87757d-2732-41d4-994f-6a6109743a1d:
 *   get:
 *     summary: for get by id
 *     tags: [Service]
 *     responses:
 *       400:
 *         description: get by id service.
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
 *                       description: firstName and required
 *                       example: Tom
 *                     title:
 *                       type: string
 *                       description: title and required
 *                       example: title
 *                     photo:
 *                       type: string
 *                       description: user's photo
 *                       example: 5ca8c742-5c20-4040-b2ea-99bb5963e93d.png
 * /api/service/all:
 *   get:
 *     summary: for get all
 *     tags: [Service]
 *     responses:
 *       400:
 *         description: get all service.
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
 *                          description: The service id
 *                          example: 20583b72-ce42-45d3-8c1e-7cfa7246d421
 *                        name:
 *                          type: string
 *                          description: firstName and required
 *                          example: Tom
 *                        title:
 *                          type: string
 *                          description: title and required
 *                          example: title
 *                        photo:
 *                          type: string
 *                          description: user's photo
 *                          example: 5ca8c742-5c20-4040-b2ea-99bb5963e93d.png
 * /api/service/9728177a-0576-4a72-a1d0-6dc73ecc5804:
 *   put:
 *     summary: for update
 *     tags: [Service]
 *     security:
 *           - bearerAuth: []
 *     requestBody:
 *        content:
 *          multipart/form-data:
 *            schema:
 *              type: object
 *              properties:
 *                 name:
 *                   example: Tom
 *                   type: string
 *                   require: true
 *                 title:
 *                    type: string
 *                    example: title
 *                    require: true
 *                 photo:
 *                   type: file
 *     responses:
 *       400:
 *         description: update service.
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 message:
 *                   type: string
 *                   example: succesfull
 * /api/service/dc92ecb5-36c6-4e37-856d-1e82bf7e4e41:
 *   delete:
 *     summary: for delete.
 *     tags: [Service]
 *     security:
 *           - bearerAuth: []
 *     responses:
 *       400:
 *         description: delete service.
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 message:
 *                   type: string
 *                   example: success
 */
