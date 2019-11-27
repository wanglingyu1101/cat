class Tools {
     static movieImg(imgUrl=''){
         if(imgUrl.indexOf('movie') === -1)
             if(imgUrl.indexOf('w.h/') !== -1)
             return imgUrl.slice(0,imgUrl.indexOf('w.h/'))+imgUrl.slice(imgUrl.indexOf('w.h/')+4)
             else return imgUrl   //待定
         else
             return  "https://p0.meituan.net/128.180/"+imgUrl.slice(imgUrl.search('movie'))
    }
    static  expectedImg(imgUrl=''){
         return "https://p0.meituan.net/170.230/"+imgUrl.slice(imgUrl.search('movie'))
    }
    static exactedImg(imgUrl=''){
         return  false
    }
    static moviePage(page,Ids){
         if(page*12-12>=Ids){
             return -1
         }
         return Ids.slice(12*page-12,12*page)
    }
    static date(v){
        const date = new Date(v);
        return date.getFullYear()+"-"
            + (date.getMonth()+1).toString().padStart(2,0) + "-"
            +date.getDate().toString().padStart(2,0)
    }
}
export  default  Tools