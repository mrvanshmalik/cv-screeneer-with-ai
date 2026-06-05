const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://malikvansh2704_db_user:VchAe0bfXT6pRERf@cluster0.fljdeed.mongodb.net/?appName=Cluster0').then((res)=>{
    console.log("Data base connected !!!")
}).catch(err => {
    console.log("Something err", err);
    
})




