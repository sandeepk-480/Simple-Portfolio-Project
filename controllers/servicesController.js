const serviceController = (req,res)=>{
    const data = {
        'title': 'service'
    }
    res.render('services', data)
}

export {serviceController}