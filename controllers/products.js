const products = [];

exports.getAddProduct = (req, res) => {
  res.render("admin/add-product");
};
exports.getProducts = (req, res) => {
  res.render("admin/products");
};
exports.getEditProduct = (req, res) => {
  res.render("admin/edit-product");
};
exports.addNewProduct = (req, res) => {
  products.push(req.body);
  res.redirect("/products");
};

exports.products = products;
