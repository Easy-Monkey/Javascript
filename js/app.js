class Base 
{
    static  HttpToResponse($arrInput=''){
        // 检查是否支持 XMLHttpRequest 老版本 IE 不支持
        var xhttp = '';
        if(window.XMLHttpRequest){
            xhttp = new XMLHttpRequest();
        }else{
            xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
    
        if($arrInput != ''){
            xhttp.send()        
        }else{
            var json_str = JSON.stringify($arrInput)
            xhttp.send(json_str)
        }
    }
}

class Error extends Base
{
    // 私有属性
    static #sub=  '1212312312312312312';
    static #msg = 'private static function';

    // 私有静态方法
    // static #staticfunction() {
    //     return Error.#sub;
    // }

    // 静态方法
    static resonse() {
        return Error.#staticfunction();  
    }

}

class ClassWithPrivateStaticMethod {
    static #privateStaticMethod() {
        return 42;
    }

    static publicStaticMethod() {
        return ClassWithPrivateStaticMethod.#privateStaticMethod();
    }
}

// assert(ClassWithPrivateStaticField.publicStaticMethod() === 42);

console.assert(ClassWithPrivateStaticField.ClassWithPrivateStaticField())


 /* 访问静态方法 object.staticfunction() */
 /* 访问普通方法 object = new class() object.function()   */

/**
 * 静态私有字段
 */


