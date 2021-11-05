export default{
    'get /api/commons/citys':(req,res)=>{
        res.json({
            status:200,
            data:[
                { value: 1001, label: '杭州' },
                { value: 1002, label: '深圳' },
                { value: 1003, label: '江苏' },
                { value: 1004, label: '黑龙江' },
            ]
        })
    }
,
    "get /api/home/hotList":(req,res)=>{

        setTimeout(()=>{
            res.json({
                code:200,
                data:[
                    {   id:1,
                        img: 'https://img1.baidu.com/it/u=1569767437,691161417&fm=253&fmt=auto&app=138&f=JPEG?w=641&h=361',
                        title: '东城民宿',
                        content: '交通方遍，景色优美',
                        price: 100
        
                    },
                    
                    {   
                        id:2,
                        img: 'https://img1.baidu.com/it/u=3269545965,3472823064&fm=26&fmt=auto',
                        title: '西城民宿',
                        content: '风景嘎嘎嘎的',
                        price: 100
        
                    },
                    {
                        id:3,
                        img: 'https://img1.baidu.com/it/u=2336988907,673505218&fm=26&fmt=auto',
                        title: '北京民宿',
                        content: '景色优美',
                        price: 100
        
                    },
                    {
                        id:4,
                        img: 'https://img0.baidu.com/it/u=1808280924,41113612&fm=26&fmt=auto',
                        title: '梨仔民宿',
                        content: '啦啦啦啦啦啦',
                        price: 100
                    }, {
                        id:5,
                        img: 'https://img1.baidu.com/it/u=2336988907,673505218&fm=26&fmt=auto',
                        title: '北京民宿',
                        content: '景色优美',
                        price: 100
        
                    },
                    {
                        id:6,
                        img: 'https://img0.baidu.com/it/u=1808280924,41113612&fm=26&fmt=auto',
                        title: '梨仔民宿',
                        content: '啦啦啦啦啦啦',
                        price: 100
                    },
                    
                ]
            })
        },1000)
       
    }
}