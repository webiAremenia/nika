const Page = require('./admin/models/page');
const Settings = require('./admin/models/settings');
const Logo = require('./admin/models/logo');
const Menu = require('./admin/models/menu');
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

module.exports.createLogos = (req, res) => {
    const titles = ['title_1', 'title_2'];
    try {
        titles.forEach(async i => {
            let logo = await Logo.findOne({title: i});
            if (!logo) {
                let obj = new Logo({
                    title: i,
                    img: null
                });
                obj.save()
            }
        })
    } catch (e) {
        console.log(e)
    }


};

module.exports.createMenus = (req, res) => {
    const keys = ['about', 'careers', 'works', 'stories', 'contact'];
    try {
        keys.forEach(async (key, i) => {
            let menu = await Menu.findOne({key: key});
            if (!menu) {
                let obj = new Menu({
                    key: key,
                    value: key.toUpperCase(),
                    order: i
                });
                obj.save()
            }
        })
    } catch (e) {
        console.log(e)
    }


};
