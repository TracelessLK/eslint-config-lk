module.exports = {
  globals: {
    "WebSocket": true,
  },
  rules: {
    'prefer-promise-reject-errors':0, //要求使用 Error 对象作为 Promise 拒绝的原因
    'no-mixed-operators':0, //禁止混合使用不同的操作符
    'no-nested-ternary':0, //禁用嵌套的三元表达式
    'no-await-in-loop':0, //禁止在循环中出现 await
    'no-restricted-globals':0, //禁用特定的全局变量
    'prefer-destructuring':0, //优先使用数组和对象解构
    'no-tabs':0, //禁用 tab
    'no-new':0, //禁止使用 new 以避免产生副作用
    'no-useless-constructor':0, //禁用不必要的构造函数
    'promise/param-names':0,
    'no-multi-assign':0, //禁止连续赋值
    'no-bitwise':0, //禁用按位运算符
    'func-names':0, //要求或禁止使用命名的 function 表达式
    'class-methods-use-this':0, //强制类方法使用 this
    'no-throw-literal':0, //禁止抛出异常字面量
    "no-param-reassign":0, //禁止对 function 的参数进行重新赋值
    "no-debugger": 2, //禁用 debugger
    'arrow-parens':0, //要求箭头函数的参数使用圆括号
    'jsx-quotes':0, //强制在 JSX 属性中一致地使用双引号或单引号
    'object-curly-newline':0, //强制大括号内换行符的一致性
    "no-useless-rename": 2, //禁止在 import 和 export 和解构赋值时将引用重命名为相同的名字
    "no-label-var": 2, //不允许标签与变量同名
    'no-restricted-syntax':0, //禁止使用特定的语法
    'camelcase':0, //强制使用骆驼拼写法命名约定
    'new-cap':0, //要求构造函数首字母大写
    'prefer-arrow-callback':0, //要求回调函数使用箭头函数
    'space-before-blocks':2, //强制在块之前使用一致的空格
    'no-plusplus':0, //禁用一元操作符 ++ 和 --
    'no-underscore-dangle':0, //禁止标识符中有悬空下划线
    'prefer-template':0, //要求使用模板字面量而非字符串连接
    'radix':0, //强制在 parseInt() 使用基数参数
    'key-spacing':0, //强制在对象字面量的属性中键和值之间使用一致的间距
    'spaced-comment':0, //强制在注释中 // 或 /* 使用一致的空格
    'no-alert': 2, // 禁用 alert、confirm 和 prompt
    'no-console': [2, { "allow": ["warn", "error", "info"] }], // 禁用 console
    'no-var': 2, // 要求使用 let 或 const 而不是 var
    "semi": [2, "never"], // 要求或禁止使用分号代替 ASI
    'no-unused-vars': ["error", { "args": "after-used" }], // 禁止出现未使用过的变量,
    "eqeqeq": 2, // 要求使用 === 和 !==
    'comma-spacing': 2, // 强制在逗号前后使用一致的空格
    'consistent-return': 0, // 要求 return 语句要么总是指定返回的值，要么不指定
    "no-undef-init": 2, // 禁止将变量初始化为 undefined
    "no-new-func": 2, // 禁止对 Function 对象使用 new 操作符
    "global-require": 0, // 要求 require() 出现在顶层模块作用域中
    "no-extra-parens": 2, // 禁止不必要的括号
    "no-shadow": 2, // 禁止变量声明与外层作用域的变量同名
    'no-duplicate-imports': 2, // 禁止重复模块导入
    'no-dupe-class-members': 2, // 禁止类成员中出现重复的名称
    "no-lone-blocks": 2, // 禁用不必要的嵌套块
    "valid-jsdoc": 0, // 强制使用有效的 JSDoc 注释
    'no-dupe-keys': 2, // 禁止在对象字面量中出现重复名称的键名
    'no-dupe-args': 2, // 禁止在函数参数中出现重复名称的参数
    'no-ternary': 0, // 禁用三元操作符
    'no-use-before-define': 0, // 禁止在变量定义之前使用它们
    "no-eq-null": 0, // 禁止对null使用==或!=运算符
    "use-isnan": 2, // 禁止比较时使用NaN，只能用isNaN()
    "max-len": 0, // 强制一行的最大长度
    "no-loop-func": 0, // 禁止在循环中出现 function 声明和表达式
    'no-multi-spaces': 2, // 禁止出现多个空格
    "no-useless-computed-key": 2, // 禁止在对象中使用不必要的计算属性
    "no-path-concat": 0, // 禁止对 __dirname 和 __filename 进行字符串连接
    "quotes": 0, // //强制使用一致的反勾号、双引号或单引号
    'no-empty': 2, // 禁止出现空语句块
    'no-useless-return': 2, // 禁止多余的 return 语句
    'no-shadow-restricted-names': 2, // 禁止将标识符定义为受限的名字
    'no-undef': 2, // 禁用未声明的变量，除非它们在 /*global */ 注释中被提到
    'quote-props': 0, // 要求对象字面量属性名称用引号括起来
    'space-before-function-paren':0, //强制在 function的左括号之前使用一致的空格
    'comma-dangle':0, //要求或禁止末尾逗号
    'no-useless-escape':0, //禁用不必要的转义字符
    'import/no-extraneous-dependencies':0, //禁止使用无关的包
    'import/order':0, //在模块导入顺序中强制执行约定
    'standard/no-callback-literal':0, //无回调文本
    'import/no-dynamic-require':0, //禁止require()使用表达式调用
    'import/newline-after-import':2, //强制在最后一个顶级导入语句或需要调用之后有一个或多个空行
  },
}
