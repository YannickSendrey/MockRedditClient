# Mock Reddit Client Project 

## Introduction

I made this small project following CodeCademy Full-Stack Engineer career path. You can access it on https://mock-reddit-client.vercel.app/.

It is my **first practical project**, especially using technologies such as **React, Redux & utilites like React-router.**

To clarify, there is no specific instructions about how to build this app on CodeCademy, only pointers on what are the big parts as shown below (similar to Trello or other project management tool).

<img width="750" src="https://github.com/YannickSendrey/MockRedditClient/assets/114011600/6d234a33-62cf-4a7f-b72a-b77938c01341" >

## Steps 

Even though I haven't work professionnally as a dev yet, I tried to follow common good practices as much as I could. 

As such, I started by doing preliminary work :  a product backlog (which isn't really pretty I admit), some wireframes (my first ones ever) and in general thinking how the whole app would unfold.
<p float="left">
  <img src="https://github.com/YannickSendrey/MockRedditClient/assets/114011600/f3754355-ff99-4e32-a49e-6ad193725ac0" width="330" />
  <img src="https://github.com/YannickSendrey/MockRedditClient/assets/114011600/fb953d9a-01fe-42b3-8dc3-ac165992335b" width="280" /> 
  <img src="https://github.com/YannickSendrey/MockRedditClient/assets/114011600/ceb7d2cf-aaf6-424b-8767-165e7729c01e" width="300" />
</p>

Then I started building the components ...⌛


## App

The App itself is quite simple. As a User you have access to : 
  - a homepage with 3 random articles and their respective upvote/downvote rate rendered
  - Then, onClick (article title or img) you are redirected to a detailed article page where you can also consult their comments.
  - You may also use a search input where you can find an article matching what you type (2 caracters or more).
    
The state of the app is handled by React-Redux (especially the voteRate counters which are the only piece of the app where the state is updated by the user action). 

## Main Issue (reddit API)

One of the goals of this project was to connect the app to the reddit API and fetch datas (articles, comments etc) from the Reddit website itself. 

Sadly as you probably know the Reddit API isn't free anymore and to be honest I kinda feared having too many requests by a random malicious person when sharing my app. 

I still looked up for my personnal knowledge how to do so, nothing too hard, would just have had to add the data to the state then use it. 

*So in the end I kind off gave up and just used static state data I wrote for this first project.*

## Design

As you may have noticed, I wasn't really inspired on the design side. I basically used twitter/X darkblue-mode.

As of today it isn't the side of a solo project I enjoy the most at all. I strive to become better at CSS/design in general and to be able to atleast be satisfied with the visual aspect of what I build. 

I still enjoyed doing the responsive side and I'm quite pleased with how it went.

## Conclusion

I'm glad I finished this first small project and learnt a lot along the way (spent around ~~25 hours on it I'd say). I am not so satisfied with the visual rendering but oh well, I have a long path ahead to improve myself. 

## Credits

*Special thanks to photographers which I used the work from Unsplash.com :
Kevin Canlas, Jordan Brett, Florian Olivo, Christin Hume, Ben Griffiths, Ella Don, James Harrison, Lautaro Andreani, Souvik Banerjee, Jametlene Reskp*

