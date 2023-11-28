const validateToken = (req, res, next) => 
{
    const accesstoken = req.header("accessToken");

    if(!accesstoken) return res.json({errr: "User not logged in!"});

    try {
        const validateToken = verify(accesstoken,"importantoken");
        if(validateToken)
        {
            return next();
        }
    } catch (error) {
        return res.json({error:err});
    }

};

module.exports = {validateToken};