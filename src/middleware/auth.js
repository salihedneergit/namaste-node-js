const auth = (req,res,next)=>{
    const token = 'xyz';
    const adminAuthorized = token=='xyz';
    if(!adminAuthorized){
        res.status(401).send("Unathorized Request");
    }
    next()
};
module.exports = {
    auth:auth
}