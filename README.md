# MovieApp
====================
** A react Movie App using themoviedb **

### Functionality
- Discover Movies with are divided in to 3 main secttions (top Movies, up Coming , now Playing )
- Save and Remove Favourits 
- View Details of selected Movie
- Search for specific movie

_______________

### Basic Architecture:
```bash

├── store  (*using Context Api mimicing Redux pattern - Flux*)
│   ├── reducer
│   ├── actions
│   └── context
├── service
├── views
│   └── container components (*with Routes*)
│        ├── index.jsx
│        └── style.css
├── components
│   └── functional components (*Reuseable*)
│        ├── index.jsx
│        └── style.css
├── assets
└── hooks /  hoc

```
_______________

### Libraries / technology Used: 
 React Hooks 
* Flux Architecture (for simplicity as the projrect is relativly small doesnt need a huge external library)
* React Router Dom 
* No UI-Library used (as a self challenge :raising_hand:)


#### This is Only v1 :wave: ...

##### Other enhancments might be 
  * infinit scrolling
  * mobile view
  * Hero section
  * enhancement in some ui components
  
###### Hope you like it....


     
