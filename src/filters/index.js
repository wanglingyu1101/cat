class Tools {
     static movieImg(imgUrl=''){
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