const productUser = (req, res) => {
  const productName = req.body.name;
  const productPrice = req.body.price;
  const productQuantity = req.body.quantity;

  res.json({
    success: true,
  });
};

module.exports = productUser;
