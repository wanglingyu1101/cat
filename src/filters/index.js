class Tools {
     static movieImg(imgUrl=''){
        return  "https://p0.meituan.net/128.180/"+imgUrl.slice(imgUrl.search('movie'))
    }
    static  expectedImg(imgUrl=''){
         return "https://p0.meituan.net/170.230/"+imgUrl.slice(imgUrl.search('movie'))
    }

    static moviePage(page,Ids){
         if(page*12-12>=Ids){
             return -1
         }
         return Ids.slice(12*page-12,12*page)
    }
}
export  default  Tools