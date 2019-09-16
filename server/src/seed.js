const Page = require('./admin/models/page');
const Settings = require('./admin/models/settings');
const Logo = require('./admin/models/logo');
const Menu = require('./admin/models/menu');
const User = require('./admin/models/user');
const Team = require('./admin/models/team');

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
    const setting_keys = ['menu-text', 'meet-us-url', 'footer-text', 'footer-link-url', 'slider-speed', 'editor_api_key'];
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


    let createElementBlocks = () => {
        let arr = [];

        for (let i = 0; i < 5; ++i) {
            arr.push({
                title: 'Lorem Ipsum is simply dummy text of the printing ',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            });
        }

        return arr;
    };

    let createClientBlocks = () => {
        let arr = [];
        for (let i = 0; i < 11; ++i) {
            arr.push({
                backGround: 'assets/images/AboutUs/intel.png'
            });
            if (i === 3) {
                arr.push({
                    text: 'North American Lighting is a member of the Japan-based Koito Group of companies'
                });
            }
        }

        return arr;

    };

    let createAwardsBlocks = () => {
        let arr = [];
        for (let i = 0; i < 7; ++i) {
            arr.push('assets/images/AboutUs/awards-logo2@2x.png');
        }

        return arr;

    };
    try {
        let teams = await Team.find({});
        if (teams.length === 0) {

            let team = new Team({
                element: {
                    title: 'Things we are good at',
                    blocks: createElementBlocks()
                },
                client: {
                    title: 'Clients',
                    description: 'We come to work everyday with one single goal - deliver greatness. We love finding simple solutions to complex',
                    blocks: createClientBlocks()
                },
                awards: {
                    title: 'Awards',
                    description: 'Lorem ipsum dolor sit incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam',
                    first: ['3 gold', '2 silver', '1 bronze'],
                    blocks: createAwardsBlocks()
                }
            });
            team.save()
        }
    } catch (e) {
        console.log(e)
    }

};
