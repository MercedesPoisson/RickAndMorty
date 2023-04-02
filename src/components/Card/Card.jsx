export default function Card({name, status, species, gender, origin, image, onclose }) {
   return (
      <div>
         <button onClick={onclose}>X</button>
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={image} alt='Rick Sanchez' />
      </div>
   );
}
