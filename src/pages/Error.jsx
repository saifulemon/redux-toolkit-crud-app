import error404 from '../assets/404error.gif';

const Error = () => {
  return (
    <div style={{height: "100vh", display: "grid", placeItems: "center"}}>
        <img src={error404} alt="" />
    </div>
  )
}

export default Error