module.exports = {
    getSliders: (req,res) => {
        res.end()
    },
    addSlider: (req,res) => {

        res.status(200).json({
            files: req.files
        })
    },
    changeSlider: (req,res) => {
        res.end()
    },
    deleteSlider: (req,res) => {
        res.end()
    }
};
