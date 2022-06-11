const errorHandlerMiddleware = (err, req, res, next) => {
    console.log(err);
    res.status(500).json({ err })
}

export default errorHandlerMiddleware