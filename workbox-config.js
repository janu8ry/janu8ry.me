module.exports = {
    globDirectory: 'build/',
    globPatterns: ['**/*.{json,ico,png,txt,js,xml,svg}'],
    swDest: 'build/service-worker.js',
    ignoreURLParametersMatching: ['/^utm_/', '/^fbclid$/']
};
