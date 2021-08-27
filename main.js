require('./db');
//const UserModel = require('./models/user');
const articleModel = require('./models/article');

// const run = async () => {
//     const user = new UserModel;
//     user.name = 'Ivanna';
//     user.bio.gender = 'female';
//     user.bio.birthday = '2020-10-13';
//     user.tags = ['aaaa', 'bbbbb', 'cccc'];
//     const doc = await user.save();
//     console.log(doc._id);
// }
// run();

const fill = async () => {
    const article = new articleModel;
    article.name = 'Dreams';
    article.topic = 'dreams';
    article.text = 'dream comes true (^_^)';
    article.autor = 'by me';
    article.createDate = '2021-08-27'; 
    // const doc = await article.save();
    // console.log(doc)
    const docs = await articleModel.find({ 'name': 'Dreams' });
    console.log(docs);
}
fill();

const find = async (articleName) => {
    const article = new articleModel;
    const docs = await articleModel.find({ name: articleName });
    console.log(docs);
};
find('Happiness');

const updateText = async (articleName, newText) => {
    const article = new articleModel;
    const docs = await articleModel.findOneAndUpdate({ name: articleName }, { text: newText });
    const updatedocs = await article.save();
    console.log(updatedocs);
};
updateText('The Sun', 'happy...:)');
