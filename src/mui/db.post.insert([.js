db.post.insert([
{
    "title" : "my first post",
    "author" : "Jim",
    "likes" : 5
},
{
    "title" : "my second post",
    "author" : "Jim",
    "likes" : 2
},
{
    "title" : "hello world",
    "author" : "Joe",
    "likes" : 3
}
])

db.comment.insert([
{
    "postTitle" : "my first post",
    "comment" : "great read",
    "likes" : 3
},
{
    "postTitle" : "my second post",
    "comment" : "good info",
    "likes" : 0
},
{
    "postTitle" : "my second post",
    "comment" : "i liked this post",
    "likes" : 12
},
{
    "postTitle" : "hello world",
    "comment" : "not my favorite",
    "likes" : 8
},
{
    "postTitle" : "my last post",
    "comment" : null,
    "likes" : 0
}
])
db.post.aggregate([
    { $lookup:
        {
           from: "comment",
           localField: "title",
           foreignField: "postTitle",
           as: "comment"
        }
    }
])