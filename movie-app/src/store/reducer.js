export const reducer = (state, action) => {
    switch(action.type) {
      case "Get_Fav_Local":
      var localFavs = JSON.parse(localStorage.getItem('favorits'));
      if(localFavs){
        let newArr = localFavs.split(",")
        return{ ...state, 
          favorits: [...newArr], 
        }
      }  
      else return {...state}
   
      case "Getting_TOP_MOVIES":
        return{ ...state,
          topMovies:{
            ...state.topMovies,
            fetching:true
          }
        }

        case "Set_TOP_MOVIES":
        return {...state,
          topMovies:{
            ...state.topMovies,
            fetching: false ,
            status: 'success',
            data: [...state.topMovies.data,...action.response.data.results],
            page: action.response.data.page ,
            totalPage: action.response.data.total_pages 
          }
        }

        case "Getting_UpComing":
          return{ ...state,
            upComing:{
              ...state.upComing,
              fetching:true
            }
          }

        case "Set_UpComing":
          return {...state,
            upComing:{
              ...state.upComing,
              fetching: false ,
              status: 'success',
              data: [...state.upComing.data,...action.response.data.results],
              page: action.response.data.page ,
              totalPage: action.response.data.total_pages 
            }
          }

        case "Getting_NowPlaying":
          return{ ...state,
            nowPlaying:{
              ...state.nowPlaying,
              fetching:true
            }
          }

        case"Set_NowPlaying":
        return {...state,
          nowPlaying:{
            ...state.nowPlaying,
            fetching: false ,
            status: 'success',
            data: [...state.nowPlaying.data,...action.response.data.results],
            page: action.response.data.page ,
            totalPage: action.response.data.total_pages 
          }
        }

        case"Search_Similar":
          let AllMovies = [[...state.topMovies.data],[...state.upComing.data],[...state.nowPlaying.data]].flat();
          let tempArr = AllMovies.filter((el)=>{
            let lowerCaseName = el.title.toLowerCase()
             return lowerCaseName.includes(action.string)
          })
        return {...state,
          search : [...tempArr ]
        }

        case"Get_Movie_byID":
          let tempAll = [[...state.topMovies.data],[...state.upComing.data],[...state.nowPlaying.data]].flat();
          let SelectedMovie = tempAll.find((el)=> el.id == action.id)
        return {...state,
          selected : SelectedMovie
        }

        case"Clear_Search":
        return {...state,
          search : []
        }

        case"Add_Favourit":
        const ID = `${action.id}`
        localStorage.setItem('favorits', JSON.stringify(`${[...state.favorits, ID ]}`));
        return {...state,
          favorits: [...state.favorits, ID ],
        }

        case"Remove_Favourit":
        const Arr = [...state.favorits]
        let toRemoveIndx  = state.favorits.indexOf(action.id);
        Arr.splice(toRemoveIndx, 1);
        localStorage.setItem('favorits', JSON.stringify(`${ [...Arr]}`));
        return {...state,
          favorits: [...Arr]
        }

        case "Get_Fav_Movies":
          let All = [[...state.topMovies.data],[...state.upComing.data],[...state.nowPlaying.data]].flat();
          let objFav = state.favorits.map ((FavID)=>{
            return All.find((el)=> el.id == FavID)
          })
          return {...state,
            favoritsObj: [...objFav]
          }

          default:
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
