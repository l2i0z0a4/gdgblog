/*const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = mongoose.model('user');

const blogSchema = new Schema({
    type: { type: String, required: true },
    creatorName: { 
        type: String, 
        required: true,
        ref: "user"
    },
    title: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
*/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = mongoose.model('user'); // Assurez-vous que c'est bien "user" comme défini dans votre User model

const blogSchema = new Schema({
    type: { type: String, required: true },
    creator: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'user', 
        required: true
    },
    title: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

// Middleware pour valider l'alumni avant de sauvegarder
blogSchema.pre('save', async function(next) {
    const user = await User.findById(this.creator);
    if (!user || user.usertype !== 'alumni') {
        return next(new Error('Creator must be an alumni.'));
    }
    next();
});

const Blog = mongoose.model('blog', blogSchema);
module.exports = Blog;
