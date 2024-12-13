import express from 'express'
const app=express()


app.get('/',(req,res)=>{
    res.status(201).send({msg:'Hello'});
})

app.get('/api/users', (req, res) => {
    res.send([
        { id: 1, username: 'john_doe', name: 'John Doe' },
        { id: 2, username: 'jane_smith', name: 'Jane Smith' },
        { id: 3, username: 'michael_brown', name: 'Michael Brown' },
        { id: 4, username: 'sarah_jones', name: 'Sarah Jones' },
        { id: 5, username: 'david_lee', name: 'David Lee' },
        { id: 6, username: 'emma_white', name: 'Emma White' },
    ]);
});

app.get('/api/users/:id',(req,res)=>{
    console.log(req.params);
})

app.get('/api/products',(req,res)=>{
    res.send([{id:123,name:'chicken breast',price:299}])
})

const PORT=process.env.PORT||3000;
app.listen(PORT,()=>{
    console.log(`Running on port ${PORT}`);
})