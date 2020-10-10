import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      songsList: [
        {
          id: 1,
          name: "The One Moment",
          link: "https://www.youtube.com/embed/QvW61K2s0tA"
        },
        {
          id: 2,
          name: "The Writing's On the Wall",
          link: "https://www.youtube.com/embed/m86ae_e_ptU"
        },
        {
          id: 3,
          name: "Obsession",
          link: "https://www.youtube.com/embed/LgmxMuW6Fsc"
        },
        {
          id: 4,
          name: "Upside Down & Inside Out",
          link: "https://www.youtube.com/embed/LWGJA9i18Co"
        }
      ],
    };
  }
  render() {

    return (
      <>
        <div className='cont'>
          <Header Counter={this.state.songsList.length} />
          <AllSongsLi songs={this.state.songsList} theNewSongs={songs => this.addNew(songs)}/>
          < Footer text={'@all copyright reserved for mais'} />
        </div>
      </>
    )
  }
// _______________________________________
  addNew(data){
    let allNewSongs=this.state.songsList
    allNewSongs.push({id:this.state.songsList.length+1,name:data.name,link:data.link})
    this.setState({
      songsList: allNewSongs
  });
}
}


// _________________________________________________________________________

class SongsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      link: ""
    };
    this.handelChange = this.handelChange.bind(this)
    this.handelSubmit = this.handelSubmit.bind(this);


  }

  render() {
    return (
    <> <div >
      <form onSubmit={this.handelSubmit}>
        {/* <label> Name </label> */}
         <input type="text" placeholder="name" id='name' onChange={this.handelChange}></input>
        
        {/* <label> link  </label> */}
           
        <input type="url" placeholder="Embed youtube link" id='link' onChange={this.handelChange}></input>
        
        <input type='submit' id='button'></input>
      </form>
      </div>
    </>)
  }
// _______________________________________
  handelChange(event) {

    let newName = document.getElementById('name').value;
    let newlink = document.getElementById('link').value;
    
    this.setState({
      name: newName,
      link:newlink
    });
  }

  // _______________________________________
  handelSubmit(event) {
    event.preventDefault();
    this.props.onThingCreate(this.state);
  }
  

}
// _______________________________________
function AllSongsLi(props) {
  return (
  <>
    <ul>
      {props.songs.map(data => <RenderAsong item={data} key={data.id} />)}
    </ul>
    <SongsForm onThingCreate={(data)=>props.theNewSongs(data)}/>

  </>);
}

// _______________________________________
function RenderAsong(props) {
  return(
    <>

      <section><h2>Name : {props.item.name}</h2>
       <a href={props.item.link}>link</a> 
      <br/>
      <iframe width="420" height="315"
          src={props.item.link}>
      </iframe>
      </section>

    </>

  ) 
}



export default App;

