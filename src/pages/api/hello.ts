import { endpoints } from "@/endpoints/server";
/**
 * @swagger
 * /api/hello:
 *   get:
 *     description: Get a personalized hello message
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: The name of the user
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *         required: true
 *         description: The email of the user
 *     responses:
 *       200:
 *         description: A personalized hello message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
export default endpoints.hello;
