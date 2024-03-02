const ghpages = require('gh-pages');

ghpages.publish('dist', {
  branch: 'new-branch-name',
  // Other options...
}, function(err) {
  if (err) {
    console.error('Error deploying to GitHub Pages:', err);
  } else {
    console.log('Deployment to GitHub Pages successful!');
  }
});
