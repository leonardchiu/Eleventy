module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy('src/site/assets');

	return {
		passthroughFileCopy: true,
		dir: {
			input: 'src/site',
			output: 'index',
			includes: 'templates'
		},
		templateFormat: [ 'html', 'md', 'njk' ],
		htmlTemplateEngine: 'html',
		markdownTemplateEngine: 'html'
	};
};
