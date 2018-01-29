module.exports = {
    root: true,
    extends: 'standard',
    plugins: [
        'html'
    ],
    env: {
        browser: true,
        node: true
    },
    globals: {
        $: true
    },
    // 特殊规则定义
    rules: {
        indent: ['error', 4],
        'eol-last': ['error', 'never'],
        'import/no-unresolved': [2, {commonjs: true, amd: true}]
    }
}