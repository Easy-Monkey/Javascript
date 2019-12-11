onload(function(){ // 匿名局部函数
    // 查找TOC 元素
    // 如果不存在，则在文档开头出创建一个
    var toc = document.getElementById("TOC");
    if(!tic){
        toc = document.createElement('div');
        toc.id = 'TOC';
        document.bady.insertBefore(toc,document.bady.firstChild);
    }

    // 查找所有标题
    var headings;
    if(document.querySelectorAll){ // 我们是否可以使用这个简单的方法
        headings = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
    }else{ // 否则查找方法稍微麻烦一些
        headings = findHeadings(document.body,[]);

        // 递归便利document的body，查找标题元素
        function findHeadings(root,sects){
            for(var c =root.firstChild; c != null; c = c.nextSibling){
                if(c.nodeType !== 1) continue;
                if(c.tagName.length == 2 && c.tagName.charAt(0) == 'H')
                    sects.push(c);
                else
                    findHeadings(c.sects);
            }
            return sects;
        }
    }

    // 初始化一个数组来保持跟踪章节号
    var sectionNumbers = [0,0,0,0,0,0];

    // 现在，循环已找到的标题元素
    for(var h=0;h<headings.length;h++){
        var heading = headings[h];
        // 跳过在TOC容器中的标题元素
        if(heading.parentNode == toc) continue;

        // 判断标题的级别
        var level = parseInt(heading.tagName.charAt(1));
        if(isNaN(level)|| level<1 || level>6) continue;

        sectionNumbers[level-1]++;
        for(var i=level;i<6;i++) sectionNumbers[i]=0;

        // 现在，将所有标题级别的章节号组合产生一个章节号， 如2.3.1
        var sectionNumber = sectionNumbers.slice(0,level).join(".")

        // 为标题级别增加章节号
        // 把数字放在span 中，使得其可以用样式修饰
        var span = document.createElement('span');
        span.className = "TOCSectNUM";
        span.innerHTML = sectionNumber;
        heading.insertBefore(span,heading,firstChild);

        // 用命名的锚点将标题抱起来，以便为他增加链接
        var anchor = document.createElement('a');
        anchor.name = "TOC"+sectionNumber;
        heading.parentNode.insertBefore(anchor,heading);
        anchor.appendChild(heading);

        // 现在为该节点创建一个链接
        var link = document.createElement("a");
        link.href = "#TOC" + sectionNumber;
        link.innerHTML = heading.innerHTML;

        // 将链接放在一个div 中 div用基于级别名字的演示修饰
        var entry = document.createElement("div");
        entry.className = "TOC"+level;
        entry.appendChild(link);

        // 将div 添加到toc 容器中
        toc.appendChild(entry);
    }

})

/**
 * 查询窗口滚动条的位置
 * 以一个对象的x和y 属性的方式返回滚动条的偏移量
 */ 

 function getScrollOffsets(w){
    // 使用指定的窗口，如果不带参数则使用当前窗口
    w = w || window;

    // 除了IE 8 及更早的版本以外，其他的浏览器都能用
    if(w.pageXOffset != null) return {x:w.pageXOffset,y:w.pageYOffset};

    // 对标准模式下的IE（或任何浏览器）
    var d=w.document;
    if(document.compatMode == "CSS1Compat")
        return {x:d.documentElement.scrollLeft,y:d.documentElement.scrollTop};
    
        // 对怪异模式下的浏览器
    return {x:d.body.scrollLeft,y:d.body.scrollTop}
    
 }
 /**
  * 查询窗口的视口尺寸
  * 以一个对象的w和h 属性的方式返回视口的尺寸
  */

  function getViewportSize(w){
        w = w || window
        if(w.innerWidth != null) return {w:w.innerWidth,h:w.innerHeight};
        
        var d = w.document;
        if(document.compatMode == "Css1Compat")
            return {
                w:w.documentElement.innerWidth,
                h:w.documentElement.innerHeight};
        
        // 对怪异模式下的浏览器
        return {w:d.body.clientWidth,h:w.body.innerHeight};

    }


/**
 *  删除节点  removeChild()  删除节点
 *  替换节点  reolaceChile() 替换节点
 */ 

 function remove(){
    var clear = document.getElementById('clone');
    var btn = document.getElementById('btn');
    var p = document.getElementById('p');

    btn.onclick = function (){
        btn.parentNode.removeChild(p);
    }
}



function replace(){
    // 查看元素是否存在
    var newb = document.getElementById('nweb');
    // 如果元素不存在 就创建
    if(!newb)
        var b = document.createElement('b');
        b.id = 'newb';
    
    // 获取元素信息
    var news = document.getElementById('clear');
    
    //  元素触发事件
    news.onclick=function(){
        var clear = document.getElementById('clone');
        news.parentNode.replaceChild(b,clear);
    }
}

//var btn = document.getElementById('btn');


// function getElements(){
//     var elements = {};

//     for(var i=0; i<$arguments.length; i++){
//         var id = arguments[i];
//         var elt = document.getElementById(id);

//         if(elt == null){
//             throw new Error('No element with id:'+id);
//             elements[id]=elt;
//         }

//         return elements;
//     }
// }

// btn.onclick = function(){
    
//     var idObject = document.getElementById('sidebar').contentWindow;
//     console.log(idObject);

    // if (idObject != null){
    //     idObject.parentNode.removeChild(idObject);
    // }

    // window.onerror('asdfa','index.html',12)
// }


// window.onerror = function(msg,url,line){
//     if(onerror.num++ < onerror.max){
//         alert('ERROR：'+msg+'\n'+url+':'+line);
//         return true;
//     }  
// }

// onerror.max = 3;
// onerror.num = 0;