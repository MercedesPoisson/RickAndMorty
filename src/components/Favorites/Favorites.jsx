import { connect } from "react-redux";
import Card from '../Card/Card';

const mapStateToProps = (state) => ({
    myFavorites: state.myFavorites,
  });
  
  function Favorites({ myFavorites }) {
    return (
      <div>
        <h1>My Favorites</h1>
        {myFavorites.map((character) => (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin}
            image={character.image}
          />
        ))}
      </div>
    );
  }
  
  export default connect(mapStateToProps)(Favorites);