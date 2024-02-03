const skillController = (req,res)=>{
    const data = {
        'title': 'Skill'
    }
    res.render('skill', data)
}

export {skillController}