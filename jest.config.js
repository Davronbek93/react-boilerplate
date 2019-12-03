module.exports = {
    moduleFileExtensions: ['js', 'jsx', 'json'],
    moduleDirectories: ['node_modules', __dirname],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/tests/unit/__mocks__/file.map.js',
        '^.*\\.(css|less|scss)': '<rootDir>/tests/unit/__mocks__/style.map.js'
    }
}