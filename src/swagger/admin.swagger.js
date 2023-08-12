


/**
 * @swagger
 * /api/admin/register:
 *   post:
 *     summary: for create
 *     tags: [Admin]
 *     description: Adminni crut apis.
 *     requestBody:
 *        content:
 *          multipart/form-data:
 *            schema:
 *              type: object
 *              properties:
 *                 firstName:
 *                   example: Tom
 *                   type: string
 *                   required: true
 *                 lastName:
 *                   example: cristiano
 *                   type: string
 *                   required: true
 *                 phoneNumber:
 *                    type: string
 *                    example: 998940102003
 *                    required: true
 *                 password:
 *                   type: string
 *                   example: 77792003
 *                   required: true
 *                 photo:
 *                   type: file
 *     responses:
 *       400:
 *         description: Create admin.
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 message:
 *                   type: string
 *                   example: succesfull
 *                 data:
 *                    type: string
 *                    example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTY4ZDFlLWUzNTctNDgzNS05YzM2LTMzMGY3MmEyYjJhNiIsImlhdCI6MTY5MTgyNzA1MSwiZXhwIjoxNjkyMDg2MjUxfQ.YBAK3LZ0ByOTKh7ttBGS9voDtjSjq_zyBHkKbzqArYc
 * /api/admin/login:
 *   post:
 *     summary: for login
 *     tags: [Admin]
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                 phoneNumber:
 *                    type: string
 *                    example: 998940102003
 *                 password:
 *                   type: string
 *                   example: 77792003
 *     responses:
 *       400:
 *         description: Create admin.
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 message:
 *                   type: string
 *                   example: succesfull
 *                 data:
 *                    type: string
 *                    example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTY4ZDFlLWUzNTctNDgzNS05YzM2LTMzMGY3MmEyYjJhNiIsImlhdCI6MTY5MTgyNzA1MSwiZXhwIjoxNjkyMDg2MjUxfQ.YBAK3LZ0ByOTKh7ttBGS9voDtjSjq_zyBHkKbzqArYc
 */
