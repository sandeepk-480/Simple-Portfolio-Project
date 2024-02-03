const homeController = (req,res)=>{
    const data = {
        'title': 'Home'
    }
    res.render('home', data)
}

export {homeController}