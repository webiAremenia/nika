const Page = require('./admin/models/page');
const Settings = require('./admin/models/settings');
const Logo = require('./admin/models/logo');
const Menu = require('./admin/models/menu');
const User = require('./admin/models/user');
// const Team = require('./admin/models/team');
const Introduce = require('./admin/models/introduce');
const Client = require('./admin/models/client');
const Remark = require('./admin/models/remark');
const Leadership = require('./admin/models/leadership');
const Award = require('./admin/models/awards');
const Element = require('./admin/models/element');
const Contact = require('./admin/models/contact');

module.exports.createDefaultAdmin = async (req, res) => {
    try {
        let user = await User.find({});
        if (user.length === 0) {
            let obj = new User({
                role: "supperAdmin",
                username: "admin",
                email: "admin@admin.com",
                password: "$2b$10$5z04AgafX.OBZNcXKmRv4O0iwzHewbb.iW7gJIBx8Tbrd33ID.K6q",
            });
            obj.save();
            console.log('admin created');
        }
    } catch (e) {
        console.log(e)
    }
};

module.exports.createPage = async (req, res) => {
    const keys = ['page_about', 'page_careers', 'page_work', 'page_story'];
    const setting_keys = ['admin-email'];
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
                    value: 'email for forms'
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
    const keys = ['about', 'works', 'contact'];
    try {
        keys.forEach(async (key, i) => {
            let menu = await Menu.findOne({key: key});
            if (!menu) {
                let obj = new Menu({
                    key: key,
                    title: 'title ' + key,
                    description: 'description ' + key,
                    order: i
                });
                obj.save()
            }
        })
    } catch (e) {
        console.log(e)
    }
};
module.exports.createTeam = async (req, res) => {
    try {


        let modelsArr = [Introduce, Client, Remark, Leadership, Award, Element];


        for (let i = 0; i < modelsArr.length; ++i) {
            let items = await modelsArr[i].find({});
            if (items.length === 0) {
                let item = new modelsArr[i]();
                item.save()
            }
        }


    } catch (e) {
        console.log(e)
    }

};

module.exports.createContactForm = async (req, res) => {
    const keys = ['business', 'opportunity', 'careers'];
    try {
        keys.forEach(async (key, i) => {
            let menu = await Contact.findOne({key: key});
            if (!menu) {
                let obj = new Contact({
                    key: key,
                });
                obj.save()
            }
        })
    } catch (e) {
        console.log(e)
    }
    // try {
    //     let contacts = await Contact.find({});
    //     if (contacts.length < 2) {
    //         for (let i = 0; i < 3; ++i) {
    //             let item = new Contact();
    //             item.save()
    //         }
    //     }
    //
    // } catch (e) {
    //     console.log(e)
    // }
};
