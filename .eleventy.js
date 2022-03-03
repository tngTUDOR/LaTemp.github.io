const markdownIt = require('markdown-it')
const markdownItAnchor = require('markdown-it-anchor')
const pluginTOC = require('eleventy-plugin-toc')

module.exports = function(eleventyConfig){

    // add .nojekyll file to not use it
    eleventyConfig.addPassthroughCopy('.nojekyll');

    // add normalize.css
    eleventyConfig.addPassthroughCopy({ './node_modules/normalize.css/normalize.css': './css/normalize.css' });

    // add normalize.css
    eleventyConfig.addPassthroughCopy({ './node_modules/@picocss/pico/css/pico.min.css': './css/pico.min.css' });

    // Markdown
    eleventyConfig.setLibrary(
        'md',
        markdownIt().use(markdownItAnchor) // Put anchor on headers
    )

    // Add TOC plugin
    eleventyConfig.addPlugin(pluginTOC, {
        tags: ['h2'], // which heading tags are selected
                                    // headings must each have an ID attribute
        wrapper: 'nav',           // element to put around the root `ol`
        wrapperClass: 'toc'       // class for the element around the root `ol`
    })

    return {
        dir: {
            layouts: "layouts",
            passthroughFileCopy: true
        }
    }
}