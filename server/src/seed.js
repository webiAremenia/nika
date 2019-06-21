const Page = require('./admin/models/page');
const Settings = require('./admin/models/settings');
module.exports.createPage = async (req, res) => {
    const keys = ['page_about', 'page_careers', 'page_work', 'page_story'];
    const setting_keys = ['menu-text', 'meet-us-url', 'footer-text', 'footer-link-url', 'slider-speed'];
    try {
        const pages = await Page.find();
        keys.forEach(k => {
            let page = Page.findByKey(k, pages);
            if (!page) {
                let obj = new Page({
                    key: k,
                    content: '<p>' + 'Go to admin panel and edit ' + k + '</p>'
                });
                obj.save();
            }
        });
        const settings = await Settings.find();
        setting_keys.forEach(k => {
            let set = Settings.findByKey(k, settings);
            if (!set) {
                let obj = new Settings({
                    key: k,
                    value: 'Go to admin panel and edit ' + k
                });
                obj.save();
            }
        });

    } catch (e) {
        console.log(e)
    }
};