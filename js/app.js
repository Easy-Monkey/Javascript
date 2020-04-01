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

}