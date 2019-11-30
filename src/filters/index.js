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

    static clockMin(clock,min)
    {
        const nowTime = '2019-11-30 ' + clock +':00';
        let STimeMs =+ new Date(nowTime)
        let ETimeMs = STimeMs + min*60*1000
        console.log(nowTime,STimeMs,ETimeMs)
        let data = new Date(ETimeMs)
      return (data.getHours().toString().padStart(2,0)+':'+data.getMinutes())
    }
}


export  default  Tools