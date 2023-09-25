const { sequelize } = require("../models/index");
class CustomerOrderRepository {
  async getAllCustomerTotalOrdersWithTotalAmount() {
    try {
      const sqlQuery = `SELECT
      c.id AS customer_id,
      c.name AS customer_name,
      c.country AS customer_country,
      COUNT(o.id) AS total_orders,
      SUM(o.amount) AS total_amount
    FROM
      customers c
    LEFT JOIN
      orders o ON c.id = o.customer_id
    GROUP BY
      c.id, c.name, c.country
    ORDER BY
      c.country ASC;`;

      const results = await sequelize.query(sqlQuery, {
        type: sequelize.QueryTypes.SELECT,
      });

      return results;

    } catch (error) {
      throw { error };
    }
  }
}
module.exports = CustomerOrderRepository;
