import express from 'express'
import {query} from 'express-validator'

const app=express()

app.use(express.json()) 
app.use(express.text())

const loggingMiddleware=(req,res,next)=>{
    console.log(`${req.method}-${req.url}`);
    next();
};


app.use(loggingMiddleware);

app.get('/',(req,res,next)=>{
    console.log("Base");
    next();
},(req,res)=>{
    res.send("HELLO");
})

const resolveIndexByUserId=(req,res,next)=>{
    const {
        body,
        params:{id},
    }=req;
    const parsedId=parseInt(id);

}


const mockUsers=[{ id: 1, username: 'john_doe', name: 'John Doe' },
    { id: 2, username: 'jane_smith', name: 'Jane Smith' },
    { id: 3, username: 'michael_brown', name: 'Michael Brown' },
    { id: 4, username: 'sarah_jones', name: 'Sarah Jones' },
    { id: 5, username: 'david_lee', name: 'David Lee' },
    { id: 6, username: 'emma_white', name: 'Emma White' },]

app.get('/api/users',
    query('filter').isString().notEmpty(),
     (req, res) => {
    console.log(req.query);
    //console.log(req);
    const {query:{filter,values}}=req;

    if(!filter || !values) return res.send(mockUsers);
    return res.send(
        mockUsers.filter((user)=>user[filter].includes(values))//user.name or user.email
    );

});

app.post('/api/users',(req,res)=>{
    const {body}=req
    return mockUsers.filter((user)=>user[body].inclu)
});


app.get('/api/users/:id',(req,res)=>{
    const id=parseInt(req.params.id);
    if(isNaN(id)){
       return res.send('Error');
    }
    const findUser=mockUsers.find((user)=>user.id===id);
    if(!findUser) return res.sendStatus(404);
    res.send(findUser);
})

app.get('/api/products/:id',(req,res)=>{
    res.send([{id:123,name:'chicken breast',price:299}])
})

app.put('/api/users/:id',(req,res)=>{
    
})

const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log(`Running on port ${PORT}`);
})