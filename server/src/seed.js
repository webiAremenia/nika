const Page = require('./admin/models/page');
const errors = require('./admin/_help/errorHandler');
module.exports.createPage = async (req, res) => {
    let keys = ['page_about', 'page_careers', 'page_work', 'page_story'];
    try {
        const pages = await Page.find();
        keys.forEach(k => {
            let page = Page.findByKey(k, pages);
            if (!page) {
                let obj = new Page({
                    key: k,
                    content: '<p>' + 'Go to admin panel and create ' + k + '</p>'
                });
                obj.save();
            }
        });

        // function findByKey(key) {
        //     let obj = pages.find(p => {
        //         return p.key === key
        //     });
        //     return obj;
        // }
    } catch (e) {
        console.log(e)
        // errors.invalidData(res, errors);
    }
};