const contactController = (req,res)=>{
    const data = {
        'title': 'Contact'
    }
    res.render('contact', data)
}

export {contactController}