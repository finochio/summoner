/* 
**this class uses react-bootstrap
*/
import React, { Fragment  } from 'react';
import CardDef from "./Card";
import { Row, Col, Container, Spinner } from 'react-bootstrap';
import SortCards from './SortCards';
import SearchCards from './SearchCards';
import './Cards.css'



/* 
**this class is a stateful implementation of the card listing of individual cards and includes handlers for searching, sorting, scroll handling andd loading indicators
*/
export default class Cards extends React.Component {
 constructor(props){
  super(props);
  this.state = {
    loading: true,
    cards: [],
    creatureType: 'creature',
    orderBy: 'name',
    per: 20,
    page: 1,
    totalPages: null,
    height: window.innerHeight,
    scrolling: false,
    searchText: '', 
    name: '',

  };
  this.handleScroll = this.handleScroll.bind(this);
}




/* 
** unmount the scroll event listener
*/
  componentWillUnmount(){
    window.removeEventListener("scroll", this.handleScroll);
  }

/* 
**calls the MTG api to get card results and sets state for loading logic. 
**instantiates event listener.  this is an asyncronous method 
*/
  async componentDidMount() {
    console.log('componentDidMount');
    window.addEventListener("scroll", this.handleScroll);
    const{ per, page, cards, orderBy, creatureType, name, scrolling, loading} = this.state;
    const url = `https://api.magicthegathering.io/v1/cards?type=${creatureType}&pageSize=${per}&page=${page}&orderBy=${orderBy}&name=${name}`;
    this.setState({ loading: true });
    const response = await fetch(url);
    this.setState({ loading: false });
    console.log(response);
    const data  = await response.json();
    console.log(data);

/* 
**append results of api call to stateful array to render next set of cards,, 
**set scrolling to false to allow additional scrolling events
*/
    this.setState({cards: [...cards, ...data.cards], scrolling: false });  
  }

/* 
**method to load more cards to the card list
**calls componentDidMount to make another API call and array append
**set state for scrolling to prevent multiple loading routines
*/
  loadMore= () => {
    console.log('loadMore');
    this.setState(prevState => ({ scrolling: true,
      page: prevState.page +1
    }), 
    this.componentDidMount)
    console.log(this.state.scrolling);

  } 

/* 
**handles scrolling event to call loadMore function 
**returnes if in scrolling state to prevent hammering api
**of if there are no more cards to display
*/
  handleScroll() {
    console.log('handleScroll');
    if((this.state.cards.length/20 % 1) > 0 || this.state.cards.length === 0) return;
    if(this.state.scrolling) return;
    const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight - 600) {
      console.log(this.state.page);
      this.loadMore();
    } 
}

/* 
**sort handler for change in sort parameter event
**since sorting is handled by an api call, clears the stateful array
**and sets state of ordering state with new selection
*/
  handleChangeSort = (event) => {
    console.log('handleChangeSort');
    const{ page, cards, loading } = this.state;
    this.setState({cards:[], page: 0, orderBy: event.target.value, loading: true});
    this.loadMore();
  }

/* 
**event handler for when user types in search parameters in search object
*/
   handleSearchInput = (event) => {
    console.log('handleSearchInput');
    const{searchText} = this.state;
    var tempString = event.target.value.trim()
    tempString = tempString.replace(/\s+/g, '|').toLowerCase();
    this.setState({searchText: tempString },
      () => console.log(this.state));
  };

/* 
**reloads the card listing with parameters from user input event
**calls load more method, 
*/
   handleSearchSubmit = (event) => {
    console.log('handleSearchSubmit');
    event.preventDefault();
   const{ page, cards, searchText, name, loading } = this.state;
    if (searchText.length > 0) {
      this.setState({cards:[], page: 0, name: searchText, loading: true},
        () => console.log(this.state)); //callback to immediately set state to clear arry before api call
      this.loadMore();
    }
  };

/* 
**render the card listing, forms and loading indicators
**logic to handle loading indicator from initial load, search and sorting, end of list, and more results
*/
  render() {
    var{cards} = this.state;
    return (
      <Container className = "card-list">
        <Row className="filters">
          <Col className = "search" xs={12} md={6}>
            <Row>
            <SearchCards handleSearchInput ={this.handleSearchInput} handleSearchSubmit={this.handleSearchSubmit} searchText={this.searchText} />
            </Row>
            <Row>
            <SortCards handleChangeSort={this.handleChangeSort} orderBy={this.orderBy} />
            </Row>
          </Col>
          <Col xs={12} md={6}>
          	Cards Loaded: {cards.length}
          </Col>
        </Row>
        {cards.length > 0 ?
            <Fragment>
              <Row className = "cards">
                {cards.map((temp) => {
                  return <Col xs={12} sm={6} lg={3} key={temp.id}><CardDef card={temp}/></Col>  
                })}
              </Row>
            </Fragment>
            : <p></p>
        }
        {console.log(this.state.loading)}
        {console.log(this.state.cards.length)}
        {console.log(cards.length)}
        <Fragment  >{(this.state.loading) ? <Spinner animation="grow" role="status">
        </Spinner>: <p>End of List</p> }
        </Fragment>
      </Container> 
    );
  }
}

