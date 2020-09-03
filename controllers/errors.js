exports.error404 = (req, res, next) => {
  res.status(404).render('404-err', {
    pageTitle: 'Page Not Found',
    path: '/404'
  })
}