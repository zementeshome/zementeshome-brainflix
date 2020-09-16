// import React from 'react';

// function Comments() {

//     let users = [
//             {
//                 name: 'Michael Lyons',
//                 timestamp: '12/18/2018',
//                 comment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
//             },

//             {
//                 name: 'Gary Wong',
//                 timestamp: '12/12/2018',
//                 comment: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
//             },

//             {
//                 name: 'Theodore Duncan',
//                 timestamp: '11/15/2018',
//                 comment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
//             },

//     ]

//         function displayComments(commentsArray) {
//         //   document.querySelector('.app__comments-container').in = '';
//           commentsArray.forEach(userComment => {
        
//             generateComment(userComment);
//           })
//         }

//         function generateComment(userInput) {
        
//             let commentsDisplay = document.createElement('div');
//             commentsDisplay.classList.add('app__comments-displayed');

//             let underline = document.createElement('span');
//             underline.classList.add('app__comments-underline');
//             commentsDisplay.appendChild(underline);
//             document.body.querySelector('main').appendChild(commentsDisplay);

//             let circle = document.createElement('div');
//             circle.classList.add('app__comments-circle');
//             commentsDisplay.appendChild(circle);
//             document.body.querySelector('main').appendChild(commentsDisplay);

//             let name = document.createElement('h2');
//             name.classList.add('app__comments-username');
//             name.innerText = userInput.name;
//             commentsDisplay.appendChild(name);
//             document.body.querySelector('main').appendChild(commentsDisplay);

//             let timestamp = document.createElement('p');
//             timestamp.classList.add('app__comments-date');
//             timestamp.innerText = userInput.timestamp;
//             commentsDisplay.appendChild(timestamp);
//             document.body.querySelector('main').appendChild(commentsDisplay);

//             let comment = document.createElement('p');
//             comment.classList.add('app__comments-post')
//             comment.innerText = userInput.comment;
//             commentsDisplay.appendChild(comment);
//             document.body.querySelector('.app__comments-container').appendChild(commentsDisplay);
//         }

//         displayComments(users);


//         return (
//             <section className="app__comments">
//                 <div className="app__comments-container">
//                 <div className="app__comments-displayed">
//                     <span className="app__comments-underline"></span>
//                     <div className="app__comments-circle"></div>
//                     <h2 className="app__comments-username"></h2>
//                     <p className="app__comments-date"></p>
//                     <p className="app__comments-post"></p>
//                 </div>
//                 </div>
//             </section>
//         )

//     }

//     export default Comments