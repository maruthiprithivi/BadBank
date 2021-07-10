const Route = ReactRouterDOM.Route;
const Link = ReactRouterDOM.Link;
const HashRouter = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

function Card(props) {
  function classes() {
    const bg = props.bgcolor ? " bg-" + props.bgcolor : " ";
    const txt = props.txtcolor ? " text-" + props.txtcolor : " text-white";
    return "card mb-3 " + bg + txt;
  }
  return (
    <div className={classes()} style={{ maxWidth: "18rem" }}>
      {/* <div className='card'> */}
      <h5 className='card-header'>{props.header}</h5>
      <div className='card-body'>
        {props.title && <h5 className='card-title'>{props.title}</h5>}
        {props.text && <p className='card-text'>{props.text}</p>}
        {props.body}
        {props.status && <div id='createStatus'>{props.status}</div>}
      </div>
      {/* </div> */}
    </div>
  );
}

function Alert(props) {
  return (
    <div className='alert alert-danger d-flex align-items-center' role='alert'>
      <svg
        className='bi flex-shrink-0 me-2'
        width='24'
        height='24'
        role='img'
        aria-label='Danger:'>
        {/* <use xlink:href='#exclamation-triangle-fill' /> */}
      </svg>
      <div>{props.text}</div>
    </div>
  );
}
