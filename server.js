var express = require("express");
var app = express();


app.get("/api", (req, res, next) => {
    res.json({
        "companyInfo": {
            "companyName": "Ross, Schmidt and Lowe",
            "companyMotto": "customized leverage e-tailers",
            "companyEst": "2006-12-16T05:14:17.636Z"
        },
        "employees": [
            {
                "id": "cb98e7d0-53a4-4fff-98fc-694b9b6d9d1f",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/areandacom/128.jpg",
                "firstName": "Anthony",
                "lastName": "Rutherford",
                "jobTitle": "Future Factors Planner",
                "age": 26,
                "bio": "Neque magni sit sint et repellat modi modi repellendus nisi. Ea ullam tempora voluptas ipsam reiciendis. Deserunt quae sint illo reiciendis quo debitis quod fugit. Quibusdam nostrum aut exercitationem quis et aut. Non alias eveniet velit.",
                "dateJoined": "2017-05-15T07:01:06.001Z"
            },
            {
                "id": "b768f7ae-7abe-4625-a37e-39ef0833cfd0",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mufaddal_mw/128.jpg",
                "firstName": "Lincoln",
                "lastName": "Lockman",
                "jobTitle": "Regional Integration Orchestrator",
                "age": 66,
                "bio": "In dicta ea eos quidem quia non optio ut sit. Cupiditate suscipit repudiandae aliquid atque perferendis rem facere quia harum. Et quis quo sunt. Inventore a earum ut accusamus error placeat enim esse voluptas.",
                "dateJoined": "2014-08-18T14:13:42.865Z"
            },
            {
                "id": "370ccf52-87d1-45a4-aa0c-84fa47f3df62",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/scottgallant/128.jpg",
                "firstName": "Anthony",
                "lastName": "Champlin",
                "jobTitle": "Chief Accounts Director",
                "age": 19,
                "bio": "Aut aut odio est. Consequatur aspernatur amet sapiente tenetur. Commodi laborum nulla provident natus. Unde ab consequatur corrupti minima explicabo.",
                "dateJoined": "2017-12-10T20:44:36.233Z"
            },
            {
                "id": "a1071e6e-4fe6-44fe-9de7-eedcd2279d21",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/jeffgolenski/128.jpg",
                "firstName": "Skye",
                "lastName": "Harvey",
                "jobTitle": "Customer Interactions Administrator",
                "age": 66,
                "bio": "Beatae cupiditate occaecati omnis eum quia voluptate quidem non voluptas. Aut laborum recusandae quas quia impedit occaecati sunt quia qui. Magni dolore neque beatae sequi blanditiis sed.",
                "dateJoined": "2016-03-20T09:27:04.781Z"
            },
            {
                "id": "a1586224-7c8e-4871-8c13-750e4ae535a4",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/tristanlegros/128.jpg",
                "firstName": "Savannah",
                "lastName": "Koelpin",
                "jobTitle": "Internal Branding Strategist",
                "age": 53,
                "bio": "Sunt quisquam sunt et est et est. Nisi totam quo voluptatum numquam rerum nihil et in. Sed corrupti voluptatum.",
                "dateJoined": "2016-04-30T05:34:51.616Z"
            },
            {
                "id": "b8c6395e-d81a-44f7-8033-0561797fdc14",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/gojeanyn/128.jpg",
                "firstName": "Amelie",
                "lastName": "Howell",
                "jobTitle": "National Quality Planner",
                "age": 49,
                "bio": "Laboriosam mollitia ut assumenda odio tempore doloribus sit possimus. Dolore corrupti quam enim delectus accusantium nihil molestiae. Officia praesentium accusamus facilis voluptatem asperiores aut. Maiores ut error est reiciendis voluptates id est laboriosam sed. Qui doloremque sit quia quam et voluptate numquam quaerat doloribus. Non voluptatem perspiciatis porro iste ipsa sunt.",
                "dateJoined": "2015-10-17T11:01:22.582Z"
            },
            {
                "id": "6def39b3-85a6-4f51-8e1d-eedfbb8d7b0c",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/brandonmorreale/128.jpg",
                "firstName": "Kai",
                "lastName": "Ernser",
                "jobTitle": "Global Infrastructure Architect",
                "age": 25,
                "bio": "Quaerat officiis iste dolores fuga. Dolore explicabo nulla qui vel cum aliquam velit earum. Qui voluptatem inventore aut. Numquam nihil magnam. Non est eum perferendis.",
                "dateJoined": "2018-01-02T09:23:37.147Z"
            },
            {
                "id": "24b13c73-9327-42cf-85d7-8cbe8d54b24d",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg",
                "firstName": "Xavier",
                "lastName": "Rolfson",
                "jobTitle": "Global Brand Technician",
                "age": 67,
                "bio": "Molestiae necessitatibus ullam cupiditate eaque. Quia hic suscipit. Autem delectus ipsa.",
                "dateJoined": "2016-12-11T12:20:26.042Z"
            },
            {
                "id": "13d3f03f-e1e5-48d3-84a4-648f03c209c1",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/haydn_woods/128.jpg",
                "firstName": "Jake",
                "lastName": "Mitchell",
                "jobTitle": "National Program Designer",
                "age": 59,
                "bio": "Rerum id praesentium alias voluptas cum hic sit. Adipisci alias minus libero quasi error. Eius quisquam laudantium. Et porro ut eligendi maxime.",
                "dateJoined": "2016-12-13T13:16:34.727Z"
            },
            {
                "id": "85dc07ba-16aa-4367-9c86-4b5559b0565d",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kennyadr/128.jpg",
                "firstName": "Hannah",
                "lastName": "Bartoletti",
                "jobTitle": "Future Optimization Developer",
                "age": 61,
                "bio": "Modi et ut consequatur aut fugiat voluptatem et. Aut aliquid id qui non vitae sapiente deleniti enim error. Alias tenetur commodi et fugiat quia dolorem pariatur sint.",
                "dateJoined": "2010-11-21T19:50:52.596Z"
            },
            {
                "id": "9049f6c6-1516-4679-8d12-123a78446b7b",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josevnclch/128.jpg",
                "firstName": "Oliver",
                "lastName": "Wood",
                "jobTitle": "Customer Tactics Engineer",
                "age": 60,
                "bio": "Dignissimos ab cupiditate commodi magni earum facilis labore nulla eos. Eius placeat assumenda recusandae. Id amet quis nostrum officiis est error quam. Ut est delectus tempora ex eum voluptas. Placeat consequatur ratione. Tempore vitae atque.",
                "dateJoined": "2016-12-02T12:56:38.626Z"
            },
            {
                "id": "75977c91-077e-4e6a-834e-02a68223a075",
                "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/jeremyworboys/128.jpg",
                "firstName": "Alana",
                "lastName": "Robinson",
                "jobTitle": "Dynamic Operations Orchestrator",
                "age": 22,
                "bio": "Nihil sequi dicta voluptatem fugiat quis. Officiis enim non nulla. Repudiandae qui mollitia et repudiandae. Aspernatur ut facilis tempore enim qui ut voluptatibus aperiam quibusdam.",
                "dateJoined": "2015-04-17T02:22:45.783Z"
            }
        ]
    });
   });

app.listen(4444, () => {
 console.log("Server running on port 4444");
});

