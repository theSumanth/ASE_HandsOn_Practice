exports.get404 = (req, res, next) => {
  const message = "Page Not Found";
  return res.status(404).json({ message: message });
};
