function sayHello () {
    // TODO: return คำว่า "Hello world!"
    return "Hello world!"
}

function isString (input) {
    // input อาจจะเป็น String, Array, Number, Object หรือ Function ก็ได้
    // TODO: ถ้า input เป็น String ให้ return true, ถ้าไม่ใช่ return false
    if (typeof input == "string") {
        return true
    }
    else return false
}

function isNumber (input) {
    // input อาจจะเป็น String, Array, Number, Object หรือ Function ก็ได้
    // TODO: ถ้า input เป็น Number ให้ return true, ถ้าไม่ใช่ return false
    if (typeof input == "number") {
        return true
    }
    else return false
}

function isArray (input) {
    // input อาจจะเป็น String, Array, Number, Object หรือ Function ก็ได้
    // TODO: ถ้า input เป็น Array ให้ return true, ถ้าไม่ใช่ return false
    if (input instanceof Array) {
        return true
    }
    else return false
}

function isObject (input) {
    // input อาจจะเป็น String, Array, Number, Object หรือ Function ก็ได้
    // TODO: ถ้า input เป็น Object ให้ return true, ถ้าไม่ใช่ return false
    if (input instanceof Object && !(input instanceof Array)) {
        return true
    }
    else return false
}

function isFunction (input) {
    // input อาจจะเป็น String, Array, Number, Object หรือ Function ก็ได้
    // TODO: ถ้า input เป็น Function ให้ return true, ถ้าไม่ใช่ return false
    if (input instanceof Function) {
        return true
    }
    else return false
}